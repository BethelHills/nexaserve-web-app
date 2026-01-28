import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { servicesMock } from "../../services/servicesMock";

function formatMoney(amount) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

const card = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
};

export default function BookService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = useMemo(() => servicesMock.find((s) => s.id === id), [id]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  if (!service) {
    return (
      <div style={{ background: "#f5f7fb", minHeight: "100vh", padding: 24 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ margin: 0, color: "#0f172a" }}>Service not found</h2>
          <p style={{ color: "#64748b" }}>Please go back and pick a service.</p>
          <Link to="/services" style={{ color: "#0ea5a4", fontWeight: 800 }}>
            ← Back to services
          </Link>
        </div>
      </div>
    );
  }

  const canSubmit = Boolean(date && time) && service.status !== "Unavailable";

  const onConfirm = () => {
    alert(
      `Booking confirmed (mock)\n\nService: ${service.name}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || "None"}`
    );
    navigate("/dashboard/bookings");
  };

  return (
    <div style={{ background: "#f5f7fb", minHeight: "calc(100vh - 64px)", padding: 24 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 14 }}>
          <Link to={`/services/${service.id}`} style={{ color: "#0ea5a4", fontWeight: 800 }}>
            ← Back to service details
          </Link>
          <h1 style={{ margin: "10px 0 0", color: "#0f172a" }}>Book Service</h1>
          <p style={{ margin: "6px 0 0", color: "#64748b" }}>
            Choose a date and time to confirm your booking.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            alignItems: "start",
          }}
        >
          <div style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 900, color: "#0f172a", fontSize: 18 }}>
                  {service.name}
                </div>
                <div style={{ marginTop: 6, color: "#64748b", fontSize: 13 }}>
                  {service.category} • {service.location} • {service.durationMins} mins
                </div>
              </div>

              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 900,
                  border: "1px solid rgba(14,165,164,0.2)",
                  background: "rgba(14,165,164,0.12)",
                  color: "#0b7f7e",
                  height: "fit-content",
                  whiteSpace: "nowrap",
                }}
              >
                {service.status}
              </span>
            </div>

            <p style={{ margin: "12px 0 0", color: "#64748b", lineHeight: 1.5 }}>
              {service.description}
            </p>

            <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "#64748b", fontSize: 12, fontWeight: 700 }}>
                  Price
                </div>
                <div style={{ color: "#0f172a", fontSize: 20, fontWeight: 900 }}>
                  {formatMoney(service.price)}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#64748b", fontSize: 12, fontWeight: 700 }}>
                  Rating
                </div>
                <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 900 }}>
                  ★ {service.rating} <span style={{ color: "#94a3b8" }}>({service.reviews})</span>
                </div>
              </div>
            </div>

            {service.status === "Unavailable" && (
              <div
                style={{
                  marginTop: 12,
                  padding: 12,
                  borderRadius: 14,
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  color: "#991b1b",
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                This service is currently unavailable. Please choose another service.
              </div>
            )}
          </div>

          <div style={card}>
            <div style={{ fontWeight: 900, color: "#0f172a", fontSize: 16 }}>
              Booking Details
            </div>
            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              <div>
                <label style={label}>Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={input}
                />
              </div>

              <div>
                <label style={label}>Select Time</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {timeSlots.map((slot) => {
                    const active = time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        style={{
                          borderRadius: 12,
                          padding: "10px 12px",
                          fontWeight: 900,
                          fontSize: 13,
                          cursor: "pointer",
                          border: active
                            ? "1px solid rgba(14,165,164,0.4)"
                            : "1px solid #e5e7eb",
                          background: active ? "rgba(14,165,164,0.12)" : "#fff",
                          color: active ? "#0b7f7e" : "#0f172a",
                        }}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={label}>Notes (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special instructions?"
                  rows={4}
                  style={{ ...input, resize: "vertical" }}
                />
              </div>

              <button
                type="button"
                onClick={onConfirm}
                disabled={!canSubmit}
                style={{
                  border: "none",
                  background: canSubmit ? "#0ea5a4" : "#94a3b8",
                  color: "#fff",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontWeight: 900,
                  cursor: canSubmit ? "pointer" : "not-allowed",
                }}
              >
                Confirm Booking
              </button>

              <div style={{ color: "#94a3b8", fontSize: 12 }}>
                This is a mock booking flow for now. Backend integration comes next.
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 18 }} />
        <div style={{ color: "#94a3b8", fontSize: 12 }}>
          Tip: On mobile, this layout will stack automatically after we add responsive styles.
        </div>
      </div>
    </div>
  );
}

const label = {
  display: "block",
  marginBottom: 6,
  fontSize: 12,
  fontWeight: 800,
  color: "#64748b",
};

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
