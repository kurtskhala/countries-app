import React from "react";
import styles from "./ContentStyles.module.css";
import { Link } from "react-router-dom";

type ContentProps = {
    capital: string;
    population: string;
    id: string;
};

const Content:React.FC<ContentProps> = ({capital, population, id}) => {
  return (
    <>
        <p className={styles.countryInfo}><strong>Capital:</strong> {capital}</p>
        <p className={styles.countryInfo}><strong>Population:</strong> {population}</p>
        <Link className={styles.countryInfoReadMore} to={`/countries/${id}`}>
          <p>Read More</p>
        </Link>
    </>
  )
}

export default Content