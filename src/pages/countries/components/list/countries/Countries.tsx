import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { useState } from "react";
import Likes from "./countryCard/likes";

const Countries: React.FC = () => {
  const [sorted, setSorted] = useState(false);
  const [countries, setCountries] = useState([
    {
      id: "1",
      name: "Georgia",
      capital: "Tbilisi",
      population: "3.71 milion",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/920px-Flag_of_Georgia.svg.png",
      likes: 0,
    },
    {
      id: "2",
      name: "Kingdom of Belgium",
      capital: "Brussels",
      population: "11.76 milion",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/188px-Flag_of_Belgium.svg.png",
      likes: 0,
    },
    {
      id: "3",
      name: "Czech Republic",
      capital: "Prague",
      population: "10.9 milion",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/188px-Flag_of_the_Czech_Republic.svg.png",
      likes: 0,
    },
  ]);

  const handleLikeButton = (id: string) => {
    const update = countries.map((country) => {
      if (country.id === id) {
        return { ...country, likes: country.likes + 1 };
      }
      return { ...country };
    });
    if (sorted) {
      setCountries(update.sort((a, b) => b.likes - a.likes));
    } else {
      setCountries(update);
    }
  };

  const handleSortButton = () => {
    setSorted((prev) => !prev);
    if (!sorted) {
      const update = countries.sort((a, b) => b.likes - a.likes);
      setCountries(update);
    } else {
      const update = countries.sort((a, b) => a.id - b.id);
      setCountries(update);
    }
  };

  return (
    <div>
      <button className={styles.sortButton} onClick={handleSortButton}>
        {sorted ? "Do not sort" : "Sort"}
      </button>
      <div className={styles.appCountries}>
        {countries.map((country) => {
          return (
            <CountryCard key={country.id}>
              <Image flag={country.flag} name={country.name} />
              <Details renderHeader={<Header name={country.name} />}>
                <Content
                  capital={country.capital}
                  population={country.population}
                  id={country.id}
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
