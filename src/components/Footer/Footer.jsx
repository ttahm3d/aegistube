import styles from "./Footer.module.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import AegisTube from "../../assets/AegisTube.svg";
import { Link } from "react-router-dom";

export default function () {
  const internalLinks = [
    {
      id: 1,
      text: "Explore",
      path: "/explore",
    },
    {
      id: 2,
      text: "History",
      path: "/history",
    },
    {
      id: 3,
      text: "Playlist",
      path: "/playlist",
    },
    {
      id: 4,
      text: "Liked Videos",
      path: "/liked-videos",
    },
    {
      id: 5,
      text: "Watch Later",
      path: "/watch-later",
    },
  ];

  const externalLinks = [
    {
      id: 1,
      text: (
        <div className={styles.ext__link}>
          <div className={styles.ext__link__icon}>
            <AiOutlineLinkedin />
          </div>
          <div className={styles.ext__link__text}>Linked In</div>
        </div>
      ),
      path: `https://www.linkedin.com/in/tahirahmedt/`,
    },
    {
      id: 2,
      text: (
        <div className={styles.ext__link}>
          <div className={styles.ext__link__icon}>
            <AiOutlineGithub />
          </div>
          <div className={styles.ext__link__text}>Github</div>
        </div>
      ),
      path: `https://github.com/ttahm3d`,
    },
    {
      id: 3,
      text: (
        <div className={styles.ext__link}>
          <div className={styles.ext__link__icon}>
            <AiOutlineTwitter />
          </div>
          <div className={styles.ext__link__text}>Twitter</div>
        </div>
      ),
      path: `https://twitter.com/ttahm3d`,
    },
  ];

  return (
    <footer className={`p-y-2 p-x-2 ${styles.footer}`}>
      <div className="container">
        <div className={styles.footer__container}>
          <div>
            <img src={AegisTube} alt="logo" />
          </div>
          <div>
            <div className={styles.links__heading}>Quick Links</div>
            <div className={styles.links__container}>
              {internalLinks.map((link) => (
                <Link to={link.path} id={link.id} className={styles.link}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.links__heading}>Other Links</div>
            <div className={styles.links__container}>
              {externalLinks.map((link) => (
                <a
                  href={link.path}
                  id={link.id}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer noopener">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
