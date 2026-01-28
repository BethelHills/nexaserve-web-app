import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import { servicesMock } from "../../services/servicesMock";

function formatMoney(amount) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function Badge({ status }) {
  const cls =
    status === "Available"
      ? styles.badgeAvailable
      : status === "Limited"
      ? styles.badgeLimited
      : styles.badgeUnavailable;

  return <span className={`${styles.badge} ${cls}`}>{status}</span>;
}

export default function Services() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("recommended");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(servicesMock.map((s) => s.category)));
    return ["All", ...unique];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = servicesMock.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);

      const matchesCategory = category === "All" ? true : s.category === category;

      return matchesQuery && matchesCategory;
    });

    if (sort === "priceLow") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    // recommended: keep original order
    return list;
  }, [query, category, sort]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Services</h1>
          <p className={styles.subTitle}>
            Browse available services, compare details, then book in seconds.
          </p>
        </div>

        <div className={styles.statPills}>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Total</span>
            <span className={styles.pillValue}>{servicesMock.length}</span>
          </div>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Available</span>
            <span className={styles.pillValue}>
              {servicesMock.filter((s) => s.status === "Available").length}
            </span>
          </div>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Limited</span>
            <span className={styles.pillValue}>
              {servicesMock.filter((s) => s.status === "Limited").length}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            aria-label="Search services"
          />
        </div>

        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort services"
        >
          <option value="recommended">Sort: Recommended</option>
          <option value="rating">Sort: Highest Rating</option>
          <option value="priceLow">Sort: Price (Low to High)</option>
          <option value="priceHigh">Sort: Price (High to Low)</option>
        </select>
      </div>

      <div className={styles.grid}>
        {filtered.map((s) => (
          <div className={styles.card} key={s.id}>
            <div className={styles.cardTop}>
              <div className={styles.cardTitleRow}>
                <h3 className={styles.cardTitle}>{s.name}</h3>
                <Badge status={s.status} />
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaChip}>{s.category}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaText}>{s.location}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaText}>{s.durationMins} mins</span>
              </div>
            </div>

            <p className={styles.desc}>{s.description}</p>

            <div className={styles.cardBottom}>
              <div className={styles.priceBlock}>
                <div className={styles.price}>{formatMoney(s.price)}</div>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span>
                  <span>
                    {s.rating} <span className={styles.reviews}>({s.reviews})</span>
                  </span>
                </div>
              </div>

              <div className={styles.actions}>
                <Link className={styles.ghostBtn} to={`/services/${s.id}`}>
                  View
                </Link>

                <Link
                  className={styles.primaryBtn}
                  to={`/book/${s.id}`}
                  aria-disabled={s.status === "Unavailable"}
                  onClick={(event) => {
                    if (s.status === "Unavailable") {
                      event.preventDefault();
                    }
                  }}
                >
                  Book
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <h3>No services found</h3>
          <p>Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
