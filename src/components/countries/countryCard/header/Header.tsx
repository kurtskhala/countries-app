import React from "react";
import styles from "#/countries/CountryCard/Header/HeaderStyles.module.css";

type Props = {
    name: string
}

const Header:React.FC<Props> = ({name}) => {
  return (
    <h2 className={styles.countryName}>{name}</h2>
  )
}

export default Header