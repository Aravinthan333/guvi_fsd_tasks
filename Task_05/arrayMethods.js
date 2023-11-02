fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Get all the countries from Asia continent/region using Filter function
    const countriesInAsia = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", countriesInAsia);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with a population of less than 2 lakhs:",
      countriesPopulation
    );

    // Print the following details name, capital, flag, using forEach function
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common} | Capital: ${country.capital} | Flag: ${country.flags[0]}`
      );
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find((country) => country.currencies.USD);
    console.log("Country using US dollars:", countryWithUSD);
  });
