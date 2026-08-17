import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WiT Web Co. — Websites with wit, built to work",
    template: "%s | WiT Web Co.",
  },
  description:
    "An independent web studio creating sharp, purposeful websites and digital experiences for growing brands.",
  openGraph: {
    title: "WiT Web Co. — Websites with wit, built to work",
    description:
      "Strategy, web design, and development for growing brands ready to look sharp and mean business.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WiT Web Co. — Websites with wit, built to work",
    description:
      "Strategy, web design, and development for growing brands ready to look sharp and mean business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
