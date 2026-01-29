import AdminLayout from "../../components/layout/AdminLayout";
import { bookingsMock } from "../../services/bookingsMock";

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

function StatusPill({ status }) {
  const base = {
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 900,
    border: "1px solid transparent",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  const styles =
    status === "Pending"
      ? {
          background: "rgba(245,158,11,0.12)",
          color: "#92400e",
          borderColor: "rgba(245,158,11,0.25)",
        }
      : status === "Confirmed"
      ? {
          background: "rgba(14,165,164,0.12)",
          color: "#0b7f7e",
          borderColor: "rgba(14,165,164,0.25)",
        }
      : status === "Completed"
      ? {
          background: "rgba(34,197,94,0.12)",
          color: "#15803d",
          borderColor: "rgba(34,197,94,0.25)",
        }
      : {
          background: "rgba(239,68,68,0.12)",
          color: "#991b1b",
          borderColor: "rgba(239,68,68,0.25)",
        };

  return <span style={{ ...base, ...styles }}>{status}</span>;
}

export default function ManageBookings() {
  return (
    <AdminLayout title="Bookings">
      <div style={card}>
        <div style={{ fontWeight: 900, color: "#0f172a" }}>Bookings</div>
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
          Review recent bookings and statuses (mock).
        </div>

        <div style={{ overflowX: "auto", marginTop: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "#64748b", fontSize: 12 }}>
                <th style={th}>Service</th>
                <th style={th}>Date</th>
                <th style={th}>Time</th>
                <th style={th}>Location</th>
                <th style={th}>Price</th>
                <th style={th}>Status</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingsMock.map((b) => (
                <tr key={b.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={td}>
                    <div style={{ fontWeight: 900, color: "#0f172a" }}>{b.serviceName}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{b.id}</div>
                  </td>
                  <td style={td}>{b.date}</td>
                  <td style={td}>{b.time}</td>
                  <td style={td}>{b.location}</td>
                  <td style={td}>${b.price}</td>
                  <td style={td}>
                    <StatusPill status={b.status} />
                  </td>
                  <td style={td}>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "1px solid #e5e7eb",
                        padding: "8px 10px",
                        borderRadius: 12,
                        fontWeight: 900,
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {bookingsMock.length === 0 && (
                <tr>
                  <td style={td} colSpan={7}>
                    No bookings yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

const th = { padding: "12px 10px" };
const td = { padding: "12px 10px", color: "#0f172a", fontSize: 14, verticalAlign: "top" };
