import Banner from "../../assets/VideoHero.svg";
import Logo from "../../assets/AegisTube.svg";
import styles from "./LandingPage.module.css";

export default function () {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero}>
        <div className={styles.hero__image__container}>
          <img src={Banner} alt="Hero Banner" />
        </div>
        <div className={styles.hero__text__container}>
          <img src={Logo} alt="logo" width={300} />
          <div className={styles.hero__text}>
            Video library for DotA fnatics
          </div>
        </div>
      </div>
    </section>
  );
}
