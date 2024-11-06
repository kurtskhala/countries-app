import fs from "fs/promises";
import axios from "axios";

async function writeDataToFile() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data.map((country, index) => {
      const name = country.name.common;
      const capital = country.capital?.[0] || "N/A";
      const population = (country.population / 1000000).toFixed(2);
      const flagUrl = country.flags.png;

      return {
        id: (index + 1).toString(),
        name: {
          en: name,
          ka: name,
        },
        capital: {
          en: capital,
          ka: capital,
        },
        population: {
          en: `${population} million`,
          ka: `${population} million`,
        },
        flag: flagUrl,
        likes: 0,
        active: true,
      };
    });

    fs.writeFile(
      "database.json",
      JSON.stringify({ countries: countries }, null, 2),
    );
  } catch (e) {
    console.error(e);
  }
}

writeDataToFile();
