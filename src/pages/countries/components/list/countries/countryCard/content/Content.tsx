import React from "react";
import styles from "./ContentStyles.module.css";
import { Link } from "react-router-dom";

type ContentProps = {
  capital: string;
  population: string;
  id: string;
  onCountryDelete: any;
};

const Content: React.FC<ContentProps> = ({
  capital,
  population,
  id,
  onCountryDelete,
}) => {
  return (
    <>
      <p className={styles.countryInfo}>
        <strong>Capital:</strong> {capital}
      </p>
      <p className={styles.countryInfo}>
        <strong>Population:</strong> {population}
      </p>
      <div className={styles.countryInfoButtons}>
        <Link className={styles.countryInfoReadMore} to={`/countries/${id}`}>
          <p>Read More</p>
        </Link>

        <button
          onClick={() => onCountryDelete(id)}
          className={styles.coutryDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Content;
