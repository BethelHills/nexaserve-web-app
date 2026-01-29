import UserLayout from "../../components/layout/UserLayout";
import { bookingsMock } from "../../services/bookingsMock";

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

export default function UserDashboard() {
  const total = bookingsMock.length;
  const pending = bookingsMock.filter((b) => b.status === "Pending").length;
  const confirmed = bookingsMock.filter((b) => b.status === "Confirmed").length;

  return (
    <UserLayout title="Dashboard">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        <div style={card}>
          <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>
            Total Bookings
          </div>
          <div style={{ marginTop: 6, fontSize: 22, fontWeight: 900, color: "#0f172a" }}>
            {total}
          </div>
        </div>
        <div style={card}>
          <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>Pending</div>
          <div style={{ marginTop: 6, fontSize: 22, fontWeight: 900, color: "#0f172a" }}>
            {pending}
          </div>
        </div>
        <div style={card}>
          <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>Confirmed</div>
          <div style={{ marginTop: 6, fontSize: 22, fontWeight: 900, color: "#0f172a" }}>
            {confirmed}
          </div>
        </div>
      </div>

      <div style={{ ...card, marginTop: 14 }}>
        <div style={{ fontWeight: 900, color: "#0f172a" }}>Recent Booking</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 6 }}>
          This is a mock dashboard. Backend integration comes later.
        </div>
      </div>
    </UserLayout>
  );
}
