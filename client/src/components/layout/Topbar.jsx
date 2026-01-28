import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div>
        <div className={styles.title}>Admin dashboard</div>
        <div className={styles.subtitle}>Manage services and availability</div>
      </div>

      <div className={styles.actions}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.search}
            placeholder="Search..."
            aria-label="Search admin"
          />
        </div>
        <button className={styles.primaryBtn}>Add service</button>
      </div>
    </header>
  );
}
