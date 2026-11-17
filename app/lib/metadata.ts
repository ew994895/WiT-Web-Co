import type { Metadata } from "next";

const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "WiT Web Co. | Web design for Greater Philadelphia",
};

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "WiT Web Co.",
      url: path,
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}
