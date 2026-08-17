import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#172b23",
          color: "#f3efe4",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 35,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: -4,
          width: "100%",
        }}
      >
        W<span style={{ color: "#ff5a36", fontFamily: "Georgia, serif" }}>i</span>T
      </div>
    ),
    size,
  );
}
