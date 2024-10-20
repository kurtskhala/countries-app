import { useParams } from "react-router-dom";
import CountryInfo from "@/pages/countries/components/single/CountryInfo";
import { countries } from "@/pages/countries/static/dummy-data";

const SingleCountryView = ({content}) => {

  const {id} = useParams();

  const countryInfo = countries.find((country) => country.id === id);

  if(!countryInfo) {
    return <div>Country Not Found</div>
  }
  
  return (
    <>
        <CountryInfo content={content} countryInfo={countryInfo}/>
    </>
  )
}

export default SingleCountryView