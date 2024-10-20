import styles from "./CountryInfo.module.css";

const CountryInfo = ({content, countryInfo}) => {
  
  return (
    <div className={styles.countryInfo}>
        <div className={styles.countryInfoCard}>
          <img 
            src={countryInfo.flag} 
            alt={`Flag of ${countryInfo.name}`} 
            className={styles.countryInfoflag}
          />
          <div className={styles.countryInfoContent}>
            <h1>{countryInfo.name}</h1>
            <div className={styles.info}>
              <p><strong>{content.list.capital}:</strong> {countryInfo.capital}</p>
              <p><strong>{content.list.population}:</strong> {countryInfo.population}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CountryInfo