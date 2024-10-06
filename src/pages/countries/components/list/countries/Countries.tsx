import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard"
import styles from "./CountriesStyles.module.css";
import React from "react";
import { countries } from "../../../static/dummy-data";



const Countries: React.FC = () => {
  return (
    <div className={styles.appCountries}>
      {
        countries.map((country) => {
          return (
            <CountryCard key={country.id} id={country.id}> 
              <Image flag={country.flag} name={country.name}/>
                <Details renderHeader={<Header name={country.name}/>}>
                  <Content capital={country.capital} population={country.population}/>
                </Details>
            </CountryCard>
          )
        })
      }
    </div>
  )
}

export default Countries