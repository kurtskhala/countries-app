import Countries from "@/pages/countries/components/list/countries";
import Hero from "@/pages/countries/components/list/hero";

const CountriesListView = ({language, content}) => {

  return (
    <>
        <Hero content={content}/>
        <Countries language={language} content={content}/>
    </>
  )
}

export default CountriesListView