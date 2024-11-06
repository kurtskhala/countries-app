import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { useEffect, useReducer } from "react";
import Likes from "./countryCard/likes";
import { countriesReducer } from "./reducer/reducer";
import SortButtons from "./sortButtons";
import AddCountry from "./addCountry";
import { CountyFormData } from "@/pages/countries/types";
import { Countries } from "@/language/language";
import InputOTP from "./inputOTP";
import { Country } from "./reducer/state";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCountry,
  deleteCountry,
  getCountries,
  editCountry,
} from "@/api/countries";

const CountriesComp: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [countries, dispatch] = useReducer(countriesReducer, []);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    retry: 0,
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: "initialize", payload: { data } });
    }
  }, [data, dispatch]);

  const { mutate: createCountryMutate } = useMutation({
    mutationFn: createCountry,
  });

  const { mutate: editCountryMutate } = useMutation({
    mutationFn: editCountry,
  });

  const { mutate: deleteCountryMutate } = useMutation({
    mutationFn: deleteCountry,
  });

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
    createCountryMutate(
      { payload: newCountry },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  const handleEditCountry = (updatedData: Country, id: string) => {
    editCountryMutate(
      { id, payload: updatedData },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  const handleDeleteCountry = (id: string | number) => {
    console.log(id);

    deleteCountryMutate(id, {
      onSuccess: () => {
        refetch();
      },
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
                  <CountryCard
                    onEdit={handleEditCountry}
                    country={country}
                    content={content}
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
            {isError && "ერორი მოხდა"}
          </div>
        </>
      )}
    </div>
  );
};

export default CountriesComp;
