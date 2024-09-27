import styles from "#/countries/CountryCard/CountryCardStyles.module.css";

type Children = {
  children: React.ReactNode
}

const CountryCard: React.FC<Children> = ({children}) => {
  return (
    <div className={styles.appCountryCard}>
      {children}
    </div>
  )
}

export default CountryCard