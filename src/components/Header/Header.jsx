import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import AegisTube from "../../assets/AegisTube.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function ({ toggleSidebar }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { isLoggedIn, user, handleLogout } = useAuth();

  // const getUserName = () => authState?.user.firstName;

  const toggleShowDropdown = () => setShowDropdown((s) => !s);

  const openDropdown = () => setShowDropdown(true);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.menu__logo}>
            <div className={styles.menu}>
              <AiOutlineMenu onClick={toggleSidebar} />
            </div>
            <div className={styles.logo}>
              <img src={AegisTube} alt="logo" />
            </div>
          </div>
          <div className={styles.navitems}>
            {isLoggedIn ? (
              <div
                className={styles.user}
                onClick={toggleShowDropdown}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}>
                <div className={styles.user__name}>{user?.firstName}</div>
                <div className={styles.user__icon}>
                  <FaUserCircle />
                </div>
                {!showDropdown ? <FiChevronDown /> : <FiChevronUp />}
                {showDropdown ? (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdown__item}>Profile</div>
                    <div
                      className={styles.dropdown__item}
                      onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                onClick={() => navigate("/auth/login")}
                className={styles.login__button}>
                Login
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
