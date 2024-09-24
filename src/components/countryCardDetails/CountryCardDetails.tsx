import React from "react";
import styles from "./CountryCardDetailsStyles.module.css";

type Children = {
    children: React.ReactNode
}

const CountryCardDetails: React.FC<Children> = ({children}) => {
  return (
    <div className={styles.countryDetiles}>
        {children}
    </div>
  )
}

export default CountryCardDetails;