import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { useReducer } from "react";
import Likes from "./countryCard/likes";
import { countriesReducer } from "./reducer/reducer";
import { initialState } from "./reducer/state";
import SortButtons from "./sortButtons";
import AddCountry from "./addCountry";
import { CountyFormData } from "@/pages/countries/types";
import { Countries } from "@/language/language";
import InputOTP from "./inputOTP";

const CountriesComp: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [countries, dispatch] = useReducer(countriesReducer, initialState);

  const handleLikeButton = (id: string) => {
    dispatch({
      type: "like",
      payload: {
        id,
      },
    });
  };

  const handleSortButton = (sortType: "asc" | "desc" | "default") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleCreateCounty = (formData: CountyFormData) => {
    dispatch({ type: "create", payload: { formData } });
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };

  return (
    <div className={styles.appCountriesContainer}>
      <SortButtons content={content} handleSortButton={handleSortButton} />
      <div className={styles.appCountriesForms}>
        <AddCountry content={content} onCountyCreate={handleCreateCounty} />
        <InputOTP length={6}/>
      </div>
      <div className={styles.appCountries}>
        {countries
          .sort((a, b) => Number(b.active) - Number(a.active))
          .map((country) => {
            return (
              <CountryCard
                content={content}
                id={country.id}
                onCountryDelete={handleDeleteCountry}
                active={country.active}
                key={country.id}
              >
                <Image flag={country.flag} name={country.name[language]} />
                <Details
                  renderHeader={<Header name={country.name[language]} />}
                >
                  <Content
                    content={content}
                    capital={country.capital[language]}
                    population={country.population[language]}
                    id={country.id}
                    onCountryDelete={handleDeleteCountry}
                  />
                </Details>
                <Likes
                  handleLikeButton={() => handleLikeButton(country.id)}
                  likes={country.likes}
                />
              </CountryCard>
            );
          })}
      </div>
    </div>
  );
};

export default CountriesComp;
