import React from "react";
import styles from "./CountryCardHeaderStyles.module.css";

type Props = {
    name: string
}

const CountryCardHeader:React.FC<Props> = ({name}) => {
  return (
    <h2 className={styles.countryName}>{name}</h2>
  )
}

export default CountryCardHeader