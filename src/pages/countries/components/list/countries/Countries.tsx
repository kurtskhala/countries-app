import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { FormEvent, useReducer } from "react";
import Likes from "./countryCard/likes";
import { countriesReducer } from "./reducer/reducer";
import { initialState } from "./reducer/state";
import SortButtons from "./sortButtons";
import AddCountry from "./addCountry";

const Countries: React.FC = () => {
  const [countries, dispatch] = useReducer(countriesReducer, initialState);

  const handleLikeButton = (id: string) => {
    dispatch({
      type: "like",
      payload: {
        id,
      },
    });
  };

  const handleSortButton = (sortType: "asc" | "desc" | "normal") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleCreateCounty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const countyObj: any = {};
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      countyObj[key] = value;
    }

    dispatch({ type: "create", payload: { countyObj } });
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };

  return (
    <div className={styles.appCountriesContainer}>
      <SortButtons handleSortButton={handleSortButton} />
      <AddCountry onCountyCreate={(e) => handleCreateCounty(e)} />
      <div className={styles.appCountries}>
        {countries
          .sort((a, b) => b.active - a.active)
          .map((country) => {
            return (
              <CountryCard id={country.id} onCountryDelete={handleDeleteCountry} active={country.active} key={country.id}>
                <Image flag={country.flag} name={country.name} />
                <Details renderHeader={<Header name={country.name} />}>
                  <Content
                    capital={country.capital}
                    population={country.population}
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

export default Countries;
