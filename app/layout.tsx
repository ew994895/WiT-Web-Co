import type { Metadata } from "next";
import { Analytics } from "./components/Analytics";
import { getContactEmail, SITE_URL } from "./lib/site";
import "./globals.css";

const title = "WiT Web Co. — Your business. Your website. Your call.";
const description =
  "Custom websites for local businesses in West Chester, PA. Built by Ethan, owned by you, with clear project quotes and help when you need it.";


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(SITE_URL);

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: { canonical: "/" },
    icons: { icon: { url: "/icon", type: "image/png", sizes: "64x64" } },
    openGraph: {
      title,
      description: "Custom websites for local businesses. Real ownership, personal service, and updates on your terms.",
      type: "website",
      siteName: "WiT Web Co.",
      url: "/",
      images: [{
        url: "/og.png",
        width: 1792,
        height: 935,
        alt: "WiT Web Co. — Your business. Your website. Your call.",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Custom websites for local businesses. Real ownership, personal service, and updates on your terms.",
      images: ["/og.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = new URL(SITE_URL);
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
      "Web applications",
      "Search engine optimization",
      "Website maintenance",
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
