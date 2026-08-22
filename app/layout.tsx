import { headers } from "next/headers";
import type { Metadata } from "next";
import { Analytics } from "./components/Analytics";
import { getContactEmail } from "./lib/site";
import "./globals.css";

const title = "WiT Web Co. — Digital work with wit, built to grow";
const description =
  "A full-service digital studio creating websites, iOS and Android apps, brand design, photography, SEO, and social campaigns for growing businesses.";

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
      description: "Websites, mobile apps, creative, and digital growth for businesses ready to look sharp and move with purpose.",
      type: "website",
      siteName: "WiT Web Co.",
      url: "/",
      images: [{
        url: "/og.png",
        width: 1792,
        height: 935,
        alt: "WiT Web Co. — Digital work with wit. Built to grow.",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Websites, mobile apps, creative, and digital growth for businesses ready to look sharp and move with purpose.",
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
  const contactEmail = getContactEmail();
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
      "Web development",
      "iOS application development",
      "Android application development",
      "Graphic design",
      "Photography",
      "Search engine optimization",
      "Social media marketing",
    ],
    email: contactEmail,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
