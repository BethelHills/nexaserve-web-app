import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 12,
  display: "block",
  fontWeight: 700,
  color: isActive ? "#0ea5a4" : "#0f172a",
  background: isActive ? "rgba(14,165,164,0.12)" : "transparent",
  border: isActive ? "1px solid rgba(14,165,164,0.2)" : "1px solid transparent",
});

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        padding: 16,
        position: "sticky",
        top: 0,
        height: "100vh",
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>
          NexaServe
        </div>
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
          Admin Panel
        </div>
      </div>

      <nav style={{ display: "grid", gap: 8 }}>
        <NavLink to="/admin" end style={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/services" style={linkStyle}>
          Services
        </NavLink>
        <NavLink to="/admin/bookings" style={linkStyle}>
          Bookings
        </NavLink>
        <NavLink to="/admin/users" style={linkStyle}>
          Users
        </NavLink>
        <NavLink to="/services" style={linkStyle}>
          Public Services Page
        </NavLink>
      </nav>
    </aside>
  );
}
