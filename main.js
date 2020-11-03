const countryList = document.getElementById('country-list');

async function fetchData() {
  try {
    const result = await axios.get('https://restcountries.eu/rest/v2/all');
    const countries = result.data.sort((a, b) => a.population - b.population);

    countries.map((country) => {
      const { flag, region, name, population } = country;
      const countryElement = document.createElement('li');

      // vlag maken
      const flagElement = document.createElement('img');
      flagElement.setAttribute('src', flag);
      flagElement.setAttribute('class', 'flag');
      countryElement.appendChild(flagElement);

      // naam maken
      const countryName = document.createElement('span');
      countryName.setAttribute('class', determineColor(region));
      countryName.textContent = name;
      countryElement.appendChild(countryName);

      countryElement.addEventListener('click', () => {
        const currentPopulationText = document.getElementById(`population-${name}`);

        if (currentPopulationText) {
          countryElement.removeChild(currentPopulationText);
        } else {
          const populationText = document.createElement('p');
          populationText.setAttribute('id', `population-${name}`);
          populationText.setAttribute('class', 'population-text');
          populationText.textContent = `Has a population of ${population} people`;
          countryElement.appendChild(populationText);
        }
      });

      countryList.appendChild(countryElement);
    })

  } catch (e) {
    console.error(e);
  }
}

fetchData();

function determineColor(region) {
  switch(region) {
    case "Africa":
      return "blue";
    case "Americas":
      return "green";
    case "Asia":
      return "red";
    case "Europe":
      return "yellow";
    case "Oceania":
      return "purple";
    default:
      return "black";
  }
}