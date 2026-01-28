import styles from "./AdminServices.module.css";
import { servicesMock } from "../../services/servicesMock";

const statusClassMap = {
  Available: styles.available,
  Limited: styles.limited,
  Unavailable: styles.unavailable,
};

export default function AdminServices() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Services</h1>
          <p className={styles.subtitle}>
            Review and manage service listings, pricing, and availability.
          </p>
        </div>
        <button className={styles.primaryBtn}>Add service</button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Rating</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {servicesMock.map((service) => (
              <tr key={service.id}>
                <td>
                  <div className={styles.serviceCell}>
                    <div className={styles.serviceName}>{service.name}</div>
                    <div className={styles.serviceMeta}>
                      {service.location} • {service.reviews} reviews
                    </div>
                  </div>
                </td>
                <td>{service.category}</td>
                <td>${service.price}</td>
                <td>{service.durationMins} mins</td>
                <td>
                  <span className={styles.rating}>★ {service.rating}</span>
                </td>
                <td>
                  <span
                    className={`${styles.status} ${
                      statusClassMap[service.status]
                    }`}
                  >
                    {service.status}
                  </span>
                </td>
                <td>
                  <button className={styles.ghostBtn}>Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
