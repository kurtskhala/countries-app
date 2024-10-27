import { useParams } from "react-router-dom";
import CountryInfo from "@/pages/countries/components/single/CountryInfo";
import { countriesReducer } from "../../components/list/countries/reducer/reducer";
import { useReducer } from "react";
import { initialState } from "../../components/list/countries/reducer/state";
import { Countries } from "@/language/language";

const SingleCountryView: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [countries] = useReducer(countriesReducer, initialState);
  const { id } = useParams();
  const countryInfo = countries.find((country) => country.id === id);

  if (!countryInfo) {
    return <div>Country Not Found</div>;
  }

  return (
    <>
      <CountryInfo
        language={language}
        content={content}
        countryInfo={countryInfo}
      />
    </>
  );
};

export default SingleCountryView;
