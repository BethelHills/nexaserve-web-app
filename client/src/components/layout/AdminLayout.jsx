import Sidebar from "./Sidebar";

export default function AdminLayout({ title, children }) {
  return (
    <div style={{ display: "flex", background: "#f5f7fb", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <h1 style={{ margin: 0, color: "#0f172a", fontSize: 26 }}>{title}</h1>
          <p style={{ margin: "6px 0 0", color: "#64748b" }}>
            Manage services, bookings, and users from one place.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
