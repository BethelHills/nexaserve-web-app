import AdminLayout from "../../components/layout/AdminLayout";

export default function AdminBookings() {
  return (
    <AdminLayout title="Bookings">
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          padding: 16,
          boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
        }}
      >
        <div style={{ fontWeight: 900, color: "#0f172a" }}>Bookings</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 6 }}>
          Admin bookings view is coming next.
        </div>
      </div>
    </AdminLayout>
  );
}
