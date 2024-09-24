import CountryCardContent from "../countryCardContent/CountryCardContent";
import CountryCardDetails from "../countryCardDetails/CountryCardDetails";
import CountryCardHeader from "../countryCardHeader/CountryCardHeader";
import CountryCardImage from "../countryCardImage/CountryCardImage";
import CountryCard from "../countryCard/CountryCard"
import styles from "./CountriesStyles.module.css";
import React from "react";

const country = {
  name: "Georgia",
  capital: "Tbilisi",
  population: "3.71 milion",
  flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/920px-Flag_of_Georgia.svg.png",
}


const Countries: React.FC = () => {
  return (
    <div className={styles.appCountries}>
        <CountryCard> 
          <CountryCardImage flag={country.flag} name={country.name}/>
            <CountryCardDetails>
              <CountryCardHeader name={country.name}/>
              <CountryCardContent capital={country.capital} population={country.population}/>
            </CountryCardDetails>
        </CountryCard>
    </div>
  )
}

export default Countries