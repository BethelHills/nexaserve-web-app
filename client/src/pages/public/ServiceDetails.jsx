import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { servicesMock } from "../../services/servicesMock";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = useMemo(() => servicesMock.find((s) => s.id === id), [id]);

  if (!service) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Service not found</h2>
        <Link to="/services">Back to services</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <Link to="/services">← Back</Link>
      <h1 style={{ marginTop: 12 }}>{service.name}</h1>
      <p>{service.description}</p>

      <ul>
        <li>Category: {service.category}</li>
        <li>Location: {service.location}</li>
        <li>Duration: {service.durationMins} minutes</li>
        <li>Status: {service.status}</li>
      </ul>

      <button
        onClick={() => alert(`Booking flow next: ${service.name}`)}
        disabled={service.status === "Unavailable"}
        style={{
          marginTop: 12,
          padding: "10px 14px",
          borderRadius: 10,
          border: "none",
          cursor: service.status === "Unavailable" ? "not-allowed" : "pointer",
        }}
      >
        Book this service
      </button>
    </div>
  );
}
