import { Countries } from "@/language/language";
import styles from "./CountryInfo.module.css";
import { Country } from "../../list/countries/reducer/state";

const CountryInfo: React.FC<{
  language: "en" | "ka";
  content: Countries;
  countryInfo: Country;
  isError: boolean;
  isLoading: boolean;
}> = ({ language, content, countryInfo, isError, isLoading }) => {
  return (
    <div className={styles.countryInfo}>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className={styles.countryInfoCard}>
          <img
            src={countryInfo.flag}
            alt={`Flag of ${countryInfo.name[language]}`}
            className={styles.countryInfoflag}
          />
          <div className={styles.countryInfoContent}>
            <h1>{countryInfo.name[language]}</h1>
            <div className={styles.info}>
              <p>
                <strong>{content.list.capital}:</strong>{" "}
                {countryInfo.capital[language]}
              </p>
              <p>
                <strong>{content.list.population}:</strong>{" "}
                {countryInfo.population[language]}
              </p>
            </div>
          </div>
        </div>
      )}
      {isError && "ერორი მოხდა"}
    </div>
  );
};

export default CountryInfo;
