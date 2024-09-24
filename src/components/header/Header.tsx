import styles from "./HeaderStyles.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.appHeader}>
      <h1 className={styles.appHeaderH1}>Countries</h1>
    </div>
  )
}

export default Header