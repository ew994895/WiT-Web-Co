import { env } from "cloudflare:workers";

interface PreparedStatement {
  bind(...values: unknown[]): PreparedStatement;
  run(): Promise<unknown>;
}

interface DatabaseBinding {
  prepare(query: string): PreparedStatement;
}

export function getDatabase() {
  const database = (env as unknown as { DB?: DatabaseBinding }).DB;
  if (!database) throw new Error("The DB binding is unavailable.");
  return database;
}
