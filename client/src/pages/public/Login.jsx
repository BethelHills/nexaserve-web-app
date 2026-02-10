import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { login } from "../../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      const data = await login({
        email: form.email.trim(),
        password: form.password,
      });

      localStorage.setItem("token", data.token);
      console.log("Login success", data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Login" subtitle="Welcome back. Sign in to continue.">
      <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
        {error && <div style={errorBox}>{error}</div>}

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
              placeholder="Enter password"
              type={show ? "text" : "password"}
              style={{ ...input, border: "none", padding: 0 }}
            />
            <button type="button" onClick={() => setShow((s) => !s)} style={toggleBtn}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" style={primaryBtn}>
          Login
        </button>

        <div style={{ marginTop: 6, fontSize: 13, color: "#64748b" }}>
          Do not have an account?{" "}
          <Link to="/register" style={link}>
            Create one
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
