import { useMemo, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { usersMock } from "../../services/usersMock";

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

function Pill({ text, tone }) {
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
    tone === "teal"
      ? {
          background: "rgba(14,165,164,0.12)",
          color: "#0b7f7e",
          borderColor: "rgba(14,165,164,0.25)",
        }
      : tone === "green"
      ? {
          background: "rgba(34,197,94,0.12)",
          color: "#15803d",
          borderColor: "rgba(34,197,94,0.25)",
        }
      : tone === "red"
      ? {
          background: "rgba(239,68,68,0.12)",
          color: "#991b1b",
          borderColor: "rgba(239,68,68,0.25)",
        }
      : {
          background: "rgba(148,163,184,0.18)",
          color: "#334155",
          borderColor: "rgba(148,163,184,0.35)",
        };

  return <span style={{ ...base, ...styles }}>{text}</span>;
}

export default function ManageUsers() {
  const [rows, setRows] = useState(usersMock);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return rows.filter((u) => {
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.id.toLowerCase().includes(q);

      const matchesRole = role === "All" ? true : u.role === role;

      return matchesQuery && matchesRole;
    });
  }, [rows, query, role]);

  const toggleStatus = (id) => {
    setRows((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "suspended" : "active" }
          : u
      )
    );
  };

  const promoteToAdmin = (id) => {
    setRows((prev) => prev.map((u) => (u.id === id ? { ...u, role: "admin" } : u)));
  };

  return (
    <AdminLayout title="Users">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
        <div style={card}>
          <div style={label}>Total Users</div>
          <div style={value}>{rows.length}</div>
        </div>
        <div style={card}>
          <div style={label}>Admins</div>
          <div style={value}>{rows.filter((u) => u.role === "admin").length}</div>
        </div>
        <div style={card}>
          <div style={label}>Suspended</div>
          <div style={value}>{rows.filter((u) => u.status === "suspended").length}</div>
        </div>
      </div>

      <div style={{ ...card, marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>User List</div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
              Admin view: search, filter roles, and manage user access (mock).
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={searchWrap}>
              <span style={{ color: "#64748b", fontSize: 14 }}>⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users..."
                style={searchInput}
              />
            </div>

            <select value={role} onChange={(e) => setRole(e.target.value)} style={select}>
              <option value="All">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: "auto", marginTop: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "#64748b", fontSize: 12 }}>
                <th style={th}>User</th>
                <th style={th}>Email</th>
                <th style={th}>Role</th>
                <th style={th}>Status</th>
                <th style={th}>Created</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={td}>
                    <div style={{ fontWeight: 900, color: "#0f172a" }}>{u.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{u.id}</div>
                  </td>

                  <td style={td}>{u.email}</td>

                  <td style={td}>
                    <Pill text={u.role} tone={u.role === "admin" ? "teal" : "gray"} />
                  </td>

                  <td style={td}>
                    <Pill text={u.status} tone={u.status === "active" ? "green" : "red"} />
                  </td>

                  <td style={td}>{u.createdAt}</td>

                  <td style={td}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => toggleStatus(u.id)}
                        style={u.status === "active" ? dangerBtn : primaryBtn}
                      >
                        {u.status === "active" ? "Suspend" : "Activate"}
                      </button>

                      {u.role !== "admin" ? (
                        <button type="button" onClick={() => promoteToAdmin(u.id)} style={ghostBtn}>
                          Promote
                        </button>
                      ) : (
                        <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 800 }}>—</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td style={td} colSpan={6}>
                    No users match your search.
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

const label = { fontSize: 12, color: "#64748b", fontWeight: 700 };
const value = { marginTop: 6, fontSize: 22, fontWeight: 900, color: "#0f172a" };

const th = { padding: "12px 10px" };
const td = { padding: "12px 10px", color: "#0f172a", fontSize: 14, verticalAlign: "top" };

const select = {
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: "10px 12px",
  background: "#fff",
  fontWeight: 800,
  color: "#0f172a",
  outline: "none",
  fontSize: 13,
};

const searchWrap = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: "10px 12px",
};

const searchInput = {
  border: "none",
  outline: "none",
  fontSize: 14,
  color: "#0f172a",
  background: "transparent",
  minWidth: 220,
};

const primaryBtn = {
  border: "none",
  background: "#0ea5a4",
  color: "#fff",
  padding: "8px 10px",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
};

const ghostBtn = {
  background: "transparent",
  border: "1px solid #e5e7eb",
  padding: "8px 10px",
  borderRadius: 12,
  fontWeight: 900,
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
