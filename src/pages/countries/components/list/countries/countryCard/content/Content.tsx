import React from "react";
import styles from "./ContentStyles.module.css";
import { Link } from "react-router-dom";
import { Countries } from "@/language/language";

type ContentProps = {
  content: Countries;
  capital: string;
  population: string;
  id: string;
  onCountryDelete: (arg: string) => void;
};

const Content: React.FC<ContentProps> = ({
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
        <Link className={styles.countryInfoReadMore} to={`${id}`}>
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
