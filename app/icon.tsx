import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#10213a",
          color: "#f8fbff",
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
        W<span style={{ color: "#77adf5", fontFamily: "Georgia, serif" }}>i</span>T
      </div>
    ),
    size,
  );
}
