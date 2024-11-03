import { useParams } from "react-router-dom";
import CountryInfo from "@/pages/countries/components/single/CountryInfo";
import { useEffect, useState } from "react";
import { Country } from "../../components/list/countries/reducer/state";
import { Countries } from "@/language/language";
import axios from "axios";

const SingleCountryView: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [country, setCountry] = useState({} as Country);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/countries/${id}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (!country) {
    return <div>Country Not Found</div>;
  }

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <CountryInfo
          language={language}
          content={content}
          countryInfo={country}
          isError={isError}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default SingleCountryView;
