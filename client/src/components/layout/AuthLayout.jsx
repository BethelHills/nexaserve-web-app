import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "#f5f7fb",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 980,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 14,
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 18,
            padding: 22,
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 18, color: "#0f172a" }}>NexaServe</div>
          <div style={{ marginTop: 10, color: "#64748b", lineHeight: 1.5 }}>
            A service booking and management platform built to demonstrate real-world
            workflows.
          </div>

          <div
            style={{
              marginTop: 18,
              borderRadius: 14,
              padding: 14,
              border: "1px solid rgba(14,165,164,0.25)",
              background: "rgba(14,165,164,0.10)",
              color: "#0b7f7e",
              fontWeight: 800,
              lineHeight: 1.45,
              fontSize: 13,
            }}
          >
            What you can do:
            <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
              <li>Browse services and book appointments</li>
              <li>Track bookings in your dashboard</li>
              <li>Admin can manage services, bookings, and users</li>
            </ul>
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/services" style={ghostLink}>
              Browse Services
            </Link>
            <Link to="/admin" style={ghostLink}>
              Admin Dashboard
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 18,
            padding: 22,
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
          }}
        >
          <h1 style={{ margin: 0, color: "#0f172a", fontSize: 24 }}>{title}</h1>
          <p style={{ margin: "6px 0 0", color: "#64748b" }}>{subtitle}</p>

          <div style={{ marginTop: 16 }}>{children}</div>
        </div>
      </div>

      <div style={{ marginTop: 12, color: "#94a3b8", fontSize: 12 }}>
        Note: Auth is UI-only for now. Backend integration comes next.
      </div>
    </div>
  );
}

const ghostLink = {
  textDecoration: "none",
  color: "#0f172a",
  background: "transparent",
  border: "1px solid #e5e7eb",
  padding: "10px 12px",
  borderRadius: 12,
  fontWeight: 800,
  fontSize: 13,
};
