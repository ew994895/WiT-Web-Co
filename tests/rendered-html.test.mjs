import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(path, "http://localhost/"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the WiT Web Co homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>WiT Web Co\. — Websites with wit, built to work<\/title>/i);
  assert.match(html, /Websites with/);
  assert.match(html, /Built to work/);
  assert.match(html, /Selected work/);
  assert.match(html, /From blank page/);
  assert.match(html, /Have a project in mind/);
  assert.match(html, /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="http:\/\/localhost(?::3000)?\/")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty="og:site_name")(?=[^>]*\bcontent="WiT Web Co\.")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="http:\/\/localhost(?::3000)?\/og\.png)[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bname="twitter:card")(?=[^>]*\bcontent="summary_large_image")[^>]*>/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /ProfessionalService/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);

  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
});

test("serves discovery metadata routes", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get("content-type") ?? "", /^text\/plain/i);
  assert.match(await robotsResponse.text(), /Sitemap: http:\/\/localhost\/sitemap\.xml/);

  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /^application\/xml/i);
  assert.match(await sitemapResponse.text(), /<loc>http:\/\/localhost\/<\/loc>/);
});
