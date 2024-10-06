import styles from "#/header/HeaderStyles.module.css";
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";


const Header: React.FC = () => {

  const handleActiveNav = (props : NavLinkRenderProps) => {
    const {isActive} = props;
    return isActive? styles["appHeaderNavItemActive"] : styles["appHeaderNavItem"]
  }

  return (
    <header className={styles.appHeader}>
      <Link to={"/"}>
        <h1 className={styles.appHeaderH1}>Countries</h1>
      </Link>

      <div className={styles.appHeaderNav}>
        <NavLink className={handleActiveNav} to={"./about"}>
          <span>about</span>
        </NavLink>
        <NavLink className={handleActiveNav} to={"./countries"}>
          <span>countries</span>
        </NavLink>
        <NavLink className={handleActiveNav} to={"./contact"}>
          <span>contact</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header