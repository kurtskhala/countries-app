import { Countries } from "@/language/language";
import CountriesComp from "@/pages/countries/components/list/countries";
import Hero from "@/pages/countries/components/list/hero";

const CountriesListView: React.FC<{language: "en" | "ka", content: Countries}> = ({ language, content }) => {
  return (
    <>
      <Hero content={content} />
      <CountriesComp language={language} content={content} />
    </>
  );
};

export default CountriesListView;
