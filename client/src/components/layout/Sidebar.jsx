import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { adminRoutes } from "../../routes/adminRoutes";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.logo}>NS</span>
        <div>
          <div className={styles.brandName}>NexaServe</div>
          <div className={styles.brandSub}>Admin dashboard</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {adminRoutes.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
            {item.comingSoon && <span className={styles.soon}>Soon</span>}
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.user}>
          <div className={styles.avatar}>BH</div>
          <div>
            <div className={styles.userName}>Bethel Hills</div>
            <div className={styles.userRole}>Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
