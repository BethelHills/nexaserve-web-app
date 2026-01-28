import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontWeight: 600,
  color: isActive ? "#0ea5a4" : "#0f172a",
  padding: "6px 10px",
  borderRadius: 8,
});

export default function Navbar() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "14px 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 18, color: "#0f172a" }}>
          NexaServe
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <NavLink to="/services" style={linkStyle}>
            Services
          </NavLink>

          <NavLink to="/admin/services" style={linkStyle}>
            Admin
          </NavLink>

          <NavLink to="/login" style={linkStyle}>
            Login
          </NavLink>

          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              padding: "8px 14px",
              background: "#0ea5a4",
              color: "#ffffff",
              borderRadius: 10,
              fontWeight: 800,
            }}
          >
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
