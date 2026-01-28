import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 12,
  display: "block",
  fontWeight: 800,
  color: isActive ? "#0ea5a4" : "#0f172a",
  background: isActive ? "rgba(14,165,164,0.12)" : "transparent",
  border: isActive ? "1px solid rgba(14,165,164,0.2)" : "1px solid transparent",
});

export default function UserLayout({ title, children }) {
  return (
    <div style={{ display: "flex", background: "#f5f7fb", minHeight: "calc(100vh - 64px)" }}>
      <aside
        style={{
          width: 260,
          background: "#fff",
          borderRight: "1px solid #e5e7eb",
          padding: 16,
          position: "sticky",
          top: 64,
          height: "calc(100vh - 64px)",
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>
            NexaServe
          </div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
            User Dashboard
          </div>
        </div>

        <nav style={{ display: "grid", gap: 8 }}>
          <NavLink to="/dashboard" end style={linkStyle}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/bookings" style={linkStyle}>
            My Bookings
          </NavLink>
          <NavLink to="/services" style={linkStyle}>
            Browse Services
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <h1 style={{ margin: 0, color: "#0f172a", fontSize: 26 }}>{title}</h1>
          <p style={{ margin: "6px 0 0", color: "#64748b" }}>
            Track your bookings and manage your appointments.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
