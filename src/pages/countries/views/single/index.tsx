import { useParams } from "react-router-dom";
import CountryInfo from "@/pages/countries/components/single/CountryInfo";
import { Countries } from "@/language/language";
import { useQuery } from "@tanstack/react-query";
import { getCountry } from "@/api/countries";
import { Country } from "../../components/list/countries/reducer/state";

const SingleCountryView: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const { id } = useParams<{ id: string }>();
  const {
    data: country,
    isLoading,
    isError,
  } = useQuery<Country>({
    queryKey: ["country", id],
    queryFn: () => {
      if (!id) throw new Error("Country ID not found");
      return getCountry(id);
    },
    enabled: !!id,
    retry: 0,
  });

  if (!id || !country) {
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
