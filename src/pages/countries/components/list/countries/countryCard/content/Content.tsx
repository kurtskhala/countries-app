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
  language,
  content,
  capital,
  population,
  id,
  onCountryDelete,
}) => {
  return (
    <>
      <p className={styles.countryInfo}>
        <strong>{content.list.capital}:</strong> {capital}
      </p>
      <p className={styles.countryInfo}>
        <strong>{content.list.population}:</strong> {population}
      </p>
      <div className={styles.countryInfoButtons}>
        <Link className={styles.countryInfoReadMore} to={`${language}/countries/${id}`}>
          <p>{content.list.readMore}</p>
        </Link>

        <button
          onClick={() => onCountryDelete(id)}
          className={styles.coutryDelete}
        >
          {content.list.delete}
        </button>
      </div>
    </>
  );
};

export default Content;
