import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Johan Garcia — Integration Engineer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0c1610",
          padding: 64,
          fontFamily: "monospace",
        }}
      >
        {/* Terminal window */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            background: "#101d15",
            borderRadius: 16,
            border: "1px solid #1a2e1f",
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 28px",
              borderBottom: "1px solid #1a2e1f",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#ef4444" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#eab308" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#4ade80" }} />
            <div style={{ display: "flex", color: "#5a7263", fontSize: 22, marginLeft: 16 }}>
              johangarcia.dev — portfolio.tsx
            </div>
          </div>

          {/* Terminal body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "48px 56px",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", color: "#4ade80", fontSize: 30 }}>
              $ whoami
            </div>
            <div
              style={{
                display: "flex",
                color: "#e8f0ea",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Johan Garcia
            </div>
            <div style={{ display: "flex", color: "#3d8b5e", fontSize: 38 }}>
              Integration Engineer
            </div>
            <div
              style={{
                display: "flex",
                color: "#8ba394",
                fontSize: 26,
                marginTop: 12,
              }}
            >
              IBM MQ · IIB/ACE · DataPower · Docker · OpenShift · AWS
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 28,
              }}
            >
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "#4ade80" }} />
              <div style={{ display: "flex", color: "#8ba394", fontSize: 24 }}>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
