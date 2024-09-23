import { weatherAPI } from "./weather-api";

export { domManager };

const domManager = (function DomManager() {
  const inputField = document.querySelector(".location");
  const submitButton = document.querySelector(".submit");
  const todayWeatherContainer = document.querySelector(".weather-today");
  const futureWeatherContainer = document.querySelector(".weather-future");
  const loadingContainer = document.querySelector(".loading");

  const locationButton = () => {
    submitButton.addEventListener("click", async () => {
      loadingContainer.classList.remove("hidden");

      const inputFieldValue = inputField.value;
      todayWeatherContainer.innerHTML = "";
      futureWeatherContainer.innerHTML = "";
      try {
        let weatherOutput = await weatherAPI.getWeather(inputFieldValue);
        const iconSrc = require(`./weather-icons/${weatherOutput.icon}.svg`);
        todayWeatherContainer.innerHTML = `
                <div class="current-output">
                    <img src="${iconSrc}"" alt="${weatherOutput.icon}" width="100" class="icon">
                    <div id="current-temperature">${weatherOutput.temp}</div>
                    <div id="current-description">${weatherOutput.description}</div>
                    <div id="current-date">Date: ${weatherOutput.date}</div>
                    <div id="current-location">${weatherOutput.resolvedAddress} (${weatherOutput.timezone})</div>
                    <div id="current-feelslike">Feels Like: ${weatherOutput.feelsLike}</div>
                    <div id="todays-minmax">
                        <div id="min"><span class="bold">Min:</span> ${weatherOutput.tempMin}</div> 
                        <div id="max"><span class="bold">Max:</span> ${weatherOutput.tempMax}</div>
                    </div>
                    <div id="current-precipitation">Precipitation: ${weatherOutput.precip}%</div>
                </div>
                `;
        loadingContainer.className = "hidden";
      } catch (err) {
        console.log(err);
      }

      try {
        let futureWeatherOutput =
          await weatherAPI.getWeeklyWeather(inputFieldValue);
        futureWeatherOutput.forEach((item, index) => {
          const iconSrc = require(`./weather-icons/${item.icon}.svg`);
          const div = document.createElement("div");
          div.className = "future-days";
          div.innerHTML = `
          <img src="${iconSrc}"" alt="${item.icon}" width="50" class="icon">
                    <div class="day${index + 1}-output">
                        <div id="day${index + 1}-date">Date: ${item.date}</div>
                        <div id="day${index + 1}-minmax" class="minmax">
                            <div id="min"><span class="bold">Min:</span> ${item.tempMin}</div> 
                            <div id="max"><span class="bold">Max:</span> ${item.tempMax}</div>
                        </div>
                        <div id="day${index + 1}-description">Description: ${item.description}</div>
                    </div>
                    `;
          futureWeatherContainer.appendChild(div);
        });
      } catch (err) {
        console.log(err);
      }
    });
  };

  return { locationButton };
})();
