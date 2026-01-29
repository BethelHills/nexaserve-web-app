import AdminLayout from "../../components/layout/AdminLayout";
import { bookingsMock } from "../../services/bookingsMock";
import { servicesMock } from "../../services/servicesMock";
import { usersMock } from "../../services/usersMock";

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

export default function AdminDashboard() {
  const totalBookings = bookingsMock.length;
  const pendingBookings = bookingsMock.filter((b) => b.status === "Pending").length;
  const totalServices = servicesMock.length;
  const totalUsers = usersMock.length;

  return (
    <AdminLayout title="Admin Dashboard">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 14,
        }}
      >
        <StatCard label="Total Users" value={totalUsers} />
        <StatCard label="Total Services" value={totalServices} />
        <StatCard label="Total Bookings" value={totalBookings} />
        <StatCard label="Pending Bookings" value={pendingBookings} />
      </div>

      <div
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        <div style={card}>
          <div style={{ fontWeight: 900, color: "#0f172a" }}>Bookings Overview</div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
            Analytics placeholder (integrate charts later).
          </div>

          <div
            style={{
              marginTop: 18,
              height: 220,
              borderRadius: 14,
              background:
                "repeating-linear-gradient( 45deg, #f1f5f9, #f1f5f9 10px, #e5e7eb 10px, #e5e7eb 20px )",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748b",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            Chart Area
          </div>
        </div>

        <div style={card}>
          <div style={{ fontWeight: 900, color: "#0f172a" }}>Recent Bookings</div>

          <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
            {bookingsMock.slice(0, 4).map((b) => (
              <div
                key={b.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: 10,
                }}
              >
                <div style={{ fontWeight: 900, color: "#0f172a", fontSize: 14 }}>
                  {b.serviceName}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                  {b.date} • {b.time}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    fontWeight: 800,
                    color:
                      b.status === "Pending"
                        ? "#92400e"
                        : b.status === "Confirmed"
                        ? "#0b7f7e"
                        : "#64748b",
                  }}
                >
                  {b.status}
                </div>
              </div>
            ))}

            {bookingsMock.length === 0 && (
              <div style={{ fontSize: 13, color: "#64748b" }}>No bookings yet.</div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={card}>
      <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 22, fontWeight: 900, color: "#0f172a" }}>
        {value}
      </div>
    </div>
  );
}
