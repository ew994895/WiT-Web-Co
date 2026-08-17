import { headers } from "next/headers";
import type { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl();

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: { canonical: "/" },
    icons: { icon: { url: "/icon", type: "image/png", sizes: "64x64" } },
    openGraph: {
      title,
      description: "Strategy, web design, and development for growing brands ready to look sharp and mean business.",
      type: "website",
      siteName: "WiT Web Co.",
      url: "/",
      images: [{
        url: "/og.png",
        width: 1792,
        height: 935,
        alt: "WiT Web Co. — Websites with wit. Built to work.",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Strategy, web design, and development for growing brands ready to look sharp and mean business.",
      images: ["/og.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = await getRequestBaseUrl();
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
