import { Link } from "react-router-dom";
import styles from "./CountryCardStyles.module.css";

type Children = {
  children: React.ReactNode,
  id: string
}

const CountryCard: React.FC<Children> = ({children, id}) => {
  return (
    <Link style={{color: "black", textDecoration: "none"}} to={`/countries/${id}`}>
      <div className={styles.appCountryCard}>
        {children}
      </div>
    </Link>
  )
}

export default CountryCard