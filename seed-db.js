import axios from "axios";

function getBase64FromUrl(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const base64 = Buffer.from(response.data, "binary").toString("base64");
      return `data:image/png;base64,${base64}`;
    })
    .catch((error) => {
      console.error("Error converting flag to base64:", error);
      return url;
    });
}

function processCountries() {
  axios
    .get("http://localhost:3000/countries")
    .then((res) => {
      console.log(res.data);

      for (const country of res.data) {
        axios.delete(`http://localhost:3000/countries/${country.id}`);
      }
    })
    .catch((e) => {
      console.log(e);
    });

  axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => {
      let count = 0;
      for (const country of res.data) {
        count++;
        const name = country.name.common;
        const capital = country.capital?.[0] || "N/A";
        const population = (country.population / 1000000).toFixed(2);

        const flagUrl = country.flags.png;

        getBase64FromUrl(flagUrl).then((flagBase64) => {
          const processedCountry = {
            id: count,
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
            flag: flagBase64,
            likes: 0,
            active: true,
          };

          axios
            .post("http://localhost:3000/countries", processedCountry)
            .then((res) => {})
            .catch((e) => {
              console.log(`Error adding ${name}:`, e);
            });
        });
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

processCountries();
