export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const lastModified = new Date().toISOString().split("T")[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/services</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/work</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/privacy</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
</urlset>`;

  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
