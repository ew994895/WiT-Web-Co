import vinext from "vinext";
import { defineConfig } from "vite";

const CLOUDFLARE_D1_DATABASE_ID =
  "b2c43a86-5648-4c39-8fc7-c80cce719a6c";


// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = {
  name: "wit-web-co",
  main: "./worker/index.ts",
  compatibility_date: "2026-08-22",
  compatibility_flags: ["nodejs_compat"],
  preview_urls: true,
  assets: {
    binding: "ASSETS",
    not_found_handling: "none" as const,
  },
  images: { binding: "IMAGES" },
  observability: {
    enabled: true,
    logs: { head_sampling_rate: 1 },
  },
  d1_databases: [
        {
          binding: "DB",
          database_name: "wit-web-co-production",
          database_id: CLOUDFLARE_D1_DATABASE_ID,
          migrations_dir: "drizzle",
        },
      ],
};

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: localBindingConfig,
      }),
    ],
  };
});
