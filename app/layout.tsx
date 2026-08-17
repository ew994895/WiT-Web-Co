import { headers } from "next/headers";
import "./globals.css";

const title = "WiT Web Co. — Websites with wit, built to work";
const description =
  "An independent web studio creating sharp, purposeful websites and digital experiences for growing brands.";

async function getRequestBaseUrl() {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = forwardedHost ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

  try {
    return new URL(`${protocol}://${host}`);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = await getRequestBaseUrl();
  const canonicalUrl = new URL("/", baseUrl).toString();
  const socialImageUrl = new URL("/og.png", baseUrl).toString();
  const contactEmail = process.env.CONTACT_EMAIL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WiT Web Co.",
    url: baseUrl.origin,
    description,
    areaServed: {
      "@type": "City",
      name: "West Chester, Pennsylvania",
    },
    knowsAbout: [
      "Web strategy",
      "Web design",
      "Front-end development",
      "Brand systems",
    ],
    ...(contactEmail ? { email: contactEmail } : {}),
  };

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/icon" type="image/png" sizes="64x64" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Strategy, web design, and development for growing brands ready to look sharp and mean business." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WiT Web Co." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:width" content="1792" />
        <meta property="og:image:height" content="935" />
        <meta property="og:image:alt" content="WiT Web Co. — Websites with wit. Built to work." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Strategy, web design, and development for growing brands ready to look sharp and mean business." />
        <meta name="twitter:image" content={socialImageUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
