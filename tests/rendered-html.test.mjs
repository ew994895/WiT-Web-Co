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
  assert.match(html, /<title>WiT Web Co\. — Digital work with wit, built to grow<\/title>/i);
  assert.match(html, /Digital work with/);
  assert.match(html, /Built to grow/);
  assert.match(html, /Independent web design and development/i);
  assert.match(html, /AI Integrations &amp; Automation/i);
  assert.match(html, /Website Care &amp; Improvements/i);
  assert.match(html, /A better website/i);
  assert.match(html, /Explore the work/i);
  assert.doesNotMatch(html, /Witty Games|Roster IQ|Witty’s Website|witty-games\.ejwit004|roster-iq\.ejwit004/);

  assert.match(html, /Led by Ethan Witkowski/i);
  assert.match(html, /Simple process/i);
  assert.match(html, /Email Ethan/i);
  assert.match(html, /ejwit007@gmail\.com/i);
  assert.match(html, /Have a project in mind/i);
  assert.doesNotMatch(html, /Built with purpose/);
  assert.match(html, /Have a project in mind/);
  assert.match(html, /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="https:\/\/witwebco\.com\/?")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty="og:site_name")(?=[^>]*\bcontent="WiT Web Co\.")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="https:\/\/witwebco\.com\/og\.png)[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bname="twitter:card")(?=[^>]*\bcontent="summary_large_image")[^>]*>/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /ProfessionalService/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);

  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
});

test("serves dedicated services and work pages", async () => {
  const [servicesResponse, workResponse] = await Promise.all([
    render("/services"),
    render("/work"),
  ]);

  assert.equal(servicesResponse.status, 200);
  const servicesHtml = await servicesResponse.text();
  assert.match(servicesHtml, /<title>Digital Services — WiT Web Co\.<\/title>/i);
  assert.match(servicesHtml, /scope, timing, and quote/i);
  assert.match(servicesHtml, /Web Apps &amp; Custom Tools/i);
  assert.match(servicesHtml, /AI Integrations/i);
  assert.match(servicesHtml, /AI Integrations &amp; Automation/i);
  assert.match(servicesHtml, /Website Care &amp; Improvements/i);
  assert.doesNotMatch(servicesHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""), /\$[0-9]|Suggested investment|Most popular|Usually [0-9]/i);
  assert.doesNotMatch((await (await render()).text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""), /\$[0-9]|pricing|outlook\.com/i);
  assert.match(servicesHtml, /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="https:\/\/witwebco\.com\/services")[^>]*>/i);

  assert.equal(workResponse.status, 200);
  const workHtml = await workResponse.text();
  assert.match(workHtml, /<title>Selected Projects — WiT Web Co\.<\/title>/i);
  assert.match(workHtml, /Witty Games/);
  assert.match(workHtml, /Roster IQ/);
  assert.match(workHtml, /Witty’s Website/);

  assert.match(workHtml, /Personal products and experiments/i);
  assert.match(workHtml, /Independent project/i);
  assert.match(workHtml, /https:\/\/witty-games\.ejwit004\.workers\.dev/i);
  assert.match(workHtml, /https:\/\/roster-iq\.ejwit004\.workers\.dev/i);
  assert.match(workHtml, /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="https:\/\/witwebco\.com\/work")[^>]*>/i);
});

test("serves discovery metadata routes", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get("content-type") ?? "", /^text\/plain/i);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/witwebco\.com\/sitemap\.xml/);

  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /^application\/xml/i);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /<loc>https:\/\/witwebco\.com\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/witwebco\.com\/services<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/witwebco\.com\/work<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/witwebco\.com\/privacy<\/loc>/);
});

test("serves a clear privacy notice", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Privacy — WiT Web Co\.<\/title>/i);
  assert.match(html, /Project inquiries/i);
  assert.match(html, /Site measurement/i);
  assert.match(html, /advertising cookies/i);
  assert.match(html, /ejwit007@gmail\.com/i);
});

// Collection must stay closed while the public site directs visitors to email.
test("disabled inquiry endpoint never accepts or stores a submission", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(new Request("https://witwebco.com/api/inquiries", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Test visitor", email: "test@example.com", message: "Test" }),
  }), { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { ok: false, message: "Please email ejwit007@gmail.com to discuss your project." });
});

test("public pages contain only the current showcase and direct contact", async () => {
  for (const path of ["/", "/work"]) {
    const html = await (await render(path)).text();
    assert.doesNotMatch(html, /wit-demo-|him-and-ham-sports-talk|Earl-Bowl|Noah Heating|KC Electric/);
    if (path === "/work") assert.match(html, /https:\/\/ew994895\.github\.io\/WittysWebsite\//);
  }
  const home = await (await render()).text();
  assert.doesNotMatch(home, /<form\b|Send inquiry/);
  assert.match(home, /mailto:ejwit007@gmail\.com/);
  const sitemap = await (await render("/sitemap.xml")).text();
  assert.doesNotMatch(sitemap, /<lastmod>/);
});


test("public aliases redirect to HTTPS without losing the path or query", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  for (const origin of ["https://www.witwebco.com", "http://www.witwebco.com", "http://witwebco.com", "https://wit-web-co.ejwit004.workers.dev"]) {
    const response = await worker.fetch(new Request(`${origin}/work?source=launch&project=games`), {}, {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "https://witwebco.com/work?source=launch&project=games");
  }
  const response = await worker.fetch(new Request("https://www.witwebco.com/api/inquiries", { method: "POST", body: "test" }), {}, {});
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://witwebco.com/api/inquiries");
});
