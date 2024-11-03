import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { useEffect, useReducer, useState } from "react";
import Likes from "./countryCard/likes";
import { countriesReducer } from "./reducer/reducer";
import SortButtons from "./sortButtons";
import AddCountry from "./addCountry";
import { CountyFormData } from "@/pages/countries/types";
import { Countries } from "@/language/language";
import InputOTP from "./inputOTP";
import axios from "axios";
import { Country } from "./reducer/state";

const CountriesComp: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [countries, dispatch] = useReducer(countriesReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/countries")
      .then((res) => {
        dispatch({ type: "initialize", payload: { data: res.data } });
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
    const newCountry = {
      id: (Number(countries.at(-1)?.id) + 1).toString(),
      ...formData,
      likes: 0,
      active: true,
    };
    axios
      .post("http://localhost:3000/countries", newCountry)
      .then((res) => {
        dispatch({ type: "create", payload: { formData: res.data } });
      })
      .catch((error) => {
        console.error("Error adding country:", error);
      });
  };

  const handleEditCountry = (updatedData: Country, id: string) => {
    axios
      .put(`http://localhost:3000/countries/${id}`, updatedData)
      .then(() => {
        dispatch({
          type: "edit",
          payload: { data: updatedData, id },
        });
      })
      .catch((error) => console.error("Edit error:", error));
  }

  const handleDeleteCountry = (id: string) => {
    axios
      .delete(`http://localhost:3000/countries/${id}`)
      .then(() => {
        dispatch({ type: "delete", payload: { id } });
      })
      .catch((error) => {
        console.error("Error deleting country:", error);
      });
  };

  return (
    <div className={styles.appCountriesContainer}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <SortButtons content={content} handleSortButton={handleSortButton} />
          <div className={styles.appCountriesForms}>
            <AddCountry content={content} onCountyCreate={handleCreateCounty} />
            <InputOTP length={6} />
          </div>
          <div className={styles.appCountries}>
            {countries
              .sort((a, b) => Number(b.active) - Number(a.active))
              .map((country) => {
                return (
                  <CountryCard onEdit={handleEditCountry} country={country} content={content} key={country.id}>
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
            {isError && "ერორი მოხდა"}
          </div>
        </>
      )}
    </div>
  );
};

export default CountriesComp;
