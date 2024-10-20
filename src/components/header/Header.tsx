import styles from "#/header/HeaderStyles.module.css";
import {
  Link,
  NavLink,
  NavLinkRenderProps,
  useNavigate,
} from "react-router-dom";

const Header: React.FC = ({ language, setLanguage, content }) => {
  const navigate = useNavigate();
  const handleActiveNav = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive
      ? styles["appHeaderNavItemActive"]
      : styles["appHeaderNavItem"];
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    navigate(`/${e.target.value}`);
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
