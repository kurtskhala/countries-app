type CountriesInitialState = {
  id: string;
  name: string;
  capital: string;
  population: string;
  flags: string;
  likes: number;
  active: boolean;
}[];

export const countriesReducer = (
  countries: CountriesInitialState,
  action: any
) => {
  if (action.type === "like") {
    const update = countries.map((country: any) => {
      if (country.id === action.payload.id) {
        return { ...country, likes: country.likes + 1 };
      }
      return { ...country };
    });

    return update;
  }

  if (action.type === "sort") {
    const activeCountries = [...countries.filter((country) => country.active)];
    const deletedCountries = [...countries.filter((country) => !country.active)];

    const sortedCountriesList = activeCountries.sort((a, b) => {
      return action.payload.sortType === "asc"
        ? a.likes - b.likes
        : action.payload.sortType === "desc"
        ? b.likes - a.likes
        : Number(a.id) - Number(b.id);
    });

    const updatedCountriesList = [...sortedCountriesList, ...deletedCountries];

    return updatedCountriesList;
  }

  if (action.type === "create") {
    
    const updatedCountriesList = [
      ...countries,
      {
        id: (Number(countries.at(-1)?.id) + 1).toString(),
        ...action.payload.formData,
        likes: 0,
        active: true,
      },
    ];

    return updatedCountriesList;
  }

  if (action.type === "delete") {
    const updatedCountriesList = countries.map((country: any) => {
      if (country.id === action.payload.id) {
        return { ...country, active: !country.active };
      }
      return { ...country };
    });

    return updatedCountriesList;
  }

  return countries;
};
