import React from "react";
import styles from "./CountryCardImageStyles.module.css";

type Props = {
    flag: string,
    name: string
}

const CountryCardImage: React.FC<Props> = ( {flag, name}) => {
  return (
    <img className={styles.countryFlag} src={flag} alt={`${name} flag`} />
  )
}

export default CountryCardImage;