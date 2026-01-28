import AdminLayout from "../../components/layout/AdminLayout";
import { servicesMock } from "../../services/servicesMock";

function StatusPill({ status }) {
  const base = {
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    border: "1px solid transparent",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  const styles =
    status === "Available"
      ? {
          background: "rgba(34,197,94,0.12)",
          color: "#15803d",
          borderColor: "rgba(34,197,94,0.25)",
        }
      : status === "Limited"
      ? {
          background: "rgba(245,158,11,0.12)",
          color: "#92400e",
          borderColor: "rgba(245,158,11,0.25)",
        }
      : {
          background: "rgba(239,68,68,0.12)",
          color: "#991b1b",
          borderColor: "rgba(239,68,68,0.25)",
        };

  return <span style={{ ...base, ...styles }}>{status}</span>;
}

export default function ManageServices() {
  return (
    <AdminLayout title="Services">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 14,
        }}
      >
        <div style={cardStyle}>
          <div style={cardLabel}>Total Services</div>
          <div style={cardValue}>{servicesMock.length}</div>
        </div>
        <div style={cardStyle}>
          <div style={cardLabel}>Available</div>
          <div style={cardValue}>
            {servicesMock.filter((s) => s.status === "Available").length}
          </div>
        </div>
        <div style={cardStyle}>
          <div style={cardLabel}>Limited / Unavailable</div>
          <div style={cardValue}>
            {servicesMock.filter((s) => s.status !== "Available").length}
          </div>
        </div>
      </div>

      <div style={{ ...cardStyle, marginTop: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>
              Service List
            </div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
              Mock data for now. API comes later.
            </div>
          </div>

          <button style={primaryBtn} onClick={() => alert("Add service form next")}>
            + Add Service
          </button>
        </div>

        <div style={{ overflowX: "auto", marginTop: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "#64748b", fontSize: 12 }}>
                <th style={th}>Service</th>
                <th style={th}>Category</th>
                <th style={th}>Price</th>
                <th style={th}>Duration</th>
                <th style={th}>Location</th>
                <th style={th}>Status</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {servicesMock.map((s) => (
                <tr key={s.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={td}>
                    <div style={{ fontWeight: 900, color: "#0f172a" }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                      {s.rating}★ ({s.reviews})
                    </div>
                  </td>
                  <td style={td}>{s.category}</td>
                  <td style={td}>${s.price}</td>
                  <td style={td}>{s.durationMins} mins</td>
                  <td style={td}>{s.location}</td>
                  <td style={td}>
                    <StatusPill status={s.status} />
                  </td>
                  <td style={td}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={ghostBtn} onClick={() => alert(`Edit: ${s.name}`)}>
                        Edit
                      </button>
                      <button style={dangerBtn} onClick={() => alert(`Delete: ${s.name}`)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {servicesMock.length === 0 && (
                <tr>
                  <td style={td} colSpan={7}>
                    No services yet.
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

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

const cardLabel = { fontSize: 12, color: "#64748b", fontWeight: 700 };
const cardValue = { marginTop: 6, fontSize: 22, color: "#0f172a", fontWeight: 900 };

const th = { padding: "12px 10px" };
const td = { padding: "12px 10px", color: "#0f172a", fontSize: 14, verticalAlign: "top" };

const primaryBtn = {
  border: "none",
  background: "#0ea5a4",
  color: "#fff",
  padding: "10px 12px",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
};

const ghostBtn = {
  background: "transparent",
  border: "1px solid #e5e7eb",
  padding: "8px 10px",
  borderRadius: 12,
  fontWeight: 800,
  cursor: "pointer",
};

const dangerBtn = {
  background: "rgba(239,68,68,0.12)",
  border: "1px solid rgba(239,68,68,0.25)",
  color: "#991b1b",
  padding: "8px 10px",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
};
