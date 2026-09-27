import { ImageResponse } from "next/og";

export const alt = "Zan — AI Engineer in the Making";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101317",
          color: "#eef1f4",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 52,
              height: 52,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #83a7ff",
              borderRadius: 12,
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <span style={{ color: "#a7b0bd", fontSize: 19, letterSpacing: 5 }}>PERSONAL PORTFOLIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ color: "#83a7ff", fontSize: 21, letterSpacing: 4 }}>MUHAMAD FAUZAN AL FARIKHI</span>
          <span style={{ fontSize: 69, fontWeight: 700, letterSpacing: -3 }}>Building toward</span>
          <span style={{ fontSize: 69, fontWeight: 700, letterSpacing: -3 }}>AI Engineering.</span>
        </div>
        <span style={{ color: "#a7b0bd", fontSize: 22 }}>Informatics Student · Universitas Gunadarma</span>
      </div>
    ),
    size,
  );
}
