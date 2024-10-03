import Content from "@/pages/home/components/countries/countryCard/content";
import Details from "@/pages/home/components/countries/countryCard/details";
import Header from "@/pages/home/components/countries/countryCard/header";
import Image from "@/pages/home/components/countries/countryCard/image";
import CountryCard from "@/pages/home/components/countries/countryCard"
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
          <Image flag={country.flag} name={country.name}/>
            <Details renderHeader={<Header name={country.name}/>}>
              <Content capital={country.capital} population={country.population}/>
            </Details>
        </CountryCard>
    </div>
  )
}

export default Countries