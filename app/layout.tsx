import type { Metadata } from "next";
import { Analytics } from "./components/Analytics";
import { pageMetadata } from "./lib/metadata";
import { getContactEmail, SITE_URL } from "./lib/site";
import "./globals.css";

const title = "Web Design for Greater Philadelphia | WiT Web Co.";
const description = "Custom websites and redesigns for small businesses in Greater Philadelphia. Work directly with Ethan Witkowski, an independent web designer and developer.";
export const metadata: Metadata = {
  ...pageMetadata("/", title, description),
  metadataBase: new URL(SITE_URL),
  icons: { icon: { url: "/icon", type: "image/png", sizes: "64x64" } },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WiT Web Co.",
  url: SITE_URL,
  description,
  areaServed: { "@type": "Place", name: "Greater Philadelphia" },
  knowsAbout: ["Web design", "Web development", "Web applications", "Website maintenance"],
  email: getContactEmail(),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
