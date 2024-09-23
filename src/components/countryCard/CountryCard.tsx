import "./CountryCardStyles.css";
const country = {
    name: "Georgia",
    capital: "Tbilisi",
    population: "3.71 milion",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/920px-Flag_of_Georgia.svg.png",
}

const CountryCard = () => {
  return (
    <div className="app-country-card">
        <img className="country-flag" src={country.flag} alt={`${country.name} flag`} />
        <div className="country-details">
            <h2 className="country-name">{country.name}</h2>
            <p className="country-info"><strong>Capital:</strong> {country.capital}</p>
            <p className="country-info"><strong>Population:</strong> {country.population}</p>
        </div>
    </div>
  )
}

export default CountryCard