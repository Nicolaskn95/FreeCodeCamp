function nonMutatingSplice(cities) {
    return cities.slice(1,3);
  }
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));