import styles from "#/header/HeaderStyles.module.css";
import { Header as HeaderTypes } from "@/language/language";
import { ChangeEvent } from "react";
import {
  Link,
  NavLink,
  NavLinkRenderProps,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Header: React.FC<{language: string, content: HeaderTypes} > = ({ language, content }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(4);

  const handleActiveNav = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive
      ? styles["appHeaderNavItemActive"]
      : styles["appHeaderNavItem"];
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}/${path}`);
  };

  return (
    <header className={styles.appHeader}>
      <Link to={`/${language}`}>
        <h1 className={styles.appHeaderH1}>{content.logo}</h1>
      </Link>

      <div className={styles.appHeaderNav}>
        <NavLink className={handleActiveNav} to={`/${language}/about`}>
          <span>{content.navBar[0]}</span>
        </NavLink>
        <NavLink className={handleActiveNav} to={`/${language}/countries`}>
          <span>{content.navBar[1]}</span>
        </NavLink>
        <NavLink className={handleActiveNav} to={`/${language}/contact`}>
          <span>{content.navBar[2]}</span>
        </NavLink>
      </div>
      <div className={styles.dropdown}>
        <select
          value={language}
          onChange={handleLanguageChange}
          className={styles.select}
        >
          <option value="en">English</option>
          <option value="ka">ქართული</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
