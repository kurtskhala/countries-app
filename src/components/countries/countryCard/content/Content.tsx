import React from "react";
import styles from "#/countries/CountryCard/Content/ContentStyles.module.css";

type ContentProps = {
    capital: string;
    population: string;
};

const Content:React.FC<ContentProps> = ({capital, population}) => {
  return (
    <>
        <p className={styles.countryInfo}><strong>Capital:</strong> {capital}</p>
        <p className={styles.countryInfo}><strong>Population:</strong> {population}</p>
    </>
  )
}

export default Content