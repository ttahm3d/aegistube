import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LandingPage.module.css";

export default function () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data?.categories);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="p-x-2 p-y-2">
      <div className={styles.categories__heading}>Browse Categories</div>
      <div className={`${styles.categories} p-y-1`}>
        {categories.map(({ id, name, url, description }) => (
          <div key={id} className={styles.category__card}>
            <div>
              <img
                src={url}
                alt={name}
                className={styles.category__card__image}
              />
            </div>
            <div className={styles.category__text__container}>
              <div className={styles.category__text__title}>{name}</div>
              <div className={styles.category__text__description}>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
