import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";

export default function Register() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.trim().length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <AuthLayout title="Create Account" subtitle="Set up your NexaServe account in seconds.">
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        {error && <div style={errorBox}>{error}</div>}

        <div>
          <label style={label}>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            style={input}
          />
        </div>

        <div>
          <label style={label}>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            style={input}
          />
        </div>

        <div>
          <label style={label}>Password</label>
          <div style={passWrap}>
            <input
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Create a password"
              type={show ? "text" : "password"}
              style={{ ...input, border: "none", padding: 0 }}
            />
            <button type="button" onClick={() => setShow((s) => !s)} style={toggleBtn}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" style={primaryBtn}>
          Create Account
        </button>

        <div style={{ marginTop: 6, fontSize: 13, color: "#64748b" }}>
          Already have an account?{" "}
          <Link to="/login" style={link}>
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

const label = { display: "block", marginBottom: 6, fontSize: 12, fontWeight: 800, color: "#64748b" };
const input = {
  width: "100%",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: "10px 12px",
  outline: "none",
  fontSize: 14,
  color: "#0f172a",
  background: "#ffffff",
};
const passWrap = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: "10px 12px",
};
const toggleBtn = {
  border: "1px solid #e5e7eb",
  background: "#fff",
  padding: "6px 10px",
  borderRadius: 10,
  fontWeight: 900,
  cursor: "pointer",
};
const primaryBtn = {
  border: "none",
  background: "#0ea5a4",
  color: "#fff",
  padding: "12px 14px",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
};
const errorBox = {
  background: "rgba(239,68,68,0.12)",
  border: "1px solid rgba(239,68,68,0.25)",
  color: "#991b1b",
  padding: 12,
  borderRadius: 12,
  fontWeight: 800,
  fontSize: 13,
};
const link = { color: "#0ea5a4", fontWeight: 900, textDecoration: "none" };
