import React from "react";
import styles from "./CountryCardContentStyles.module.css";

type ContentProps = {
    capital: string;
    population: string;
};

const CountryCardContent:React.FC<ContentProps> = ({capital, population}) => {
  return (
    <>
        <p className={styles.countryInfo}><strong>Capital:</strong> {capital}</p>
        <p className={styles.countryInfo}><strong>Population:</strong> {population}</p>
    </>
  )
}

export default CountryCardContent