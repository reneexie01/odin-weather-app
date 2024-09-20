import { weatherAPI } from "./weather-api";

export { domManager };

const domManager = (function DomManager() {
  const inputField = document.querySelector(".location");
  const submitButton = document.querySelector(".submit");
  const todayWeatherContainer = document.querySelector(".weather-today");
  const futureWeatherContainer = document.querySelector(".weather-future");

  const locationButton = () => {
    submitButton.addEventListener("click", async () => {
      const inputFieldValue = inputField.value;

      try {
        let weatherOutput = await weatherAPI.getWeather(inputFieldValue);
        console.log(weatherOutput);
        todayWeatherContainer.innerHTML = `
                <ul>
                    <li class="current-output" id="current-date">Date: ${weatherOutput.date}</li>
                    <li class="current-output" id="current-description">Description: ${weatherOutput.description}</li>
                    <li class="current-output" id="current-location">Location: ${weatherOutput.resolvedAddress}</li>
                    <li class="current-output" id="current-timezone">Timezone: ${weatherOutput.timezone}</li>
                    <li class="current-output" id="current-temperature">Current Temperature: ${weatherOutput.temp}</li>
                    <li class="current-output" id="current-feelslike">Feels Like: ${weatherOutput.feelsLike}</li>
                    <li class="current-output" id="todays-max">Temperature (Max): ${weatherOutput.tempMax}</li>
                    <li class="current-output" id="todays-min">Temperature (Min): ${weatherOutput.tempMin}</li>
                    <li class="current-output" id="current-precipitation">Precipitation: ${weatherOutput.precip}</li>
                </ul>
                `;
      } catch (err) {
        console.log(err);
      }

      try {
        let futureWeatherOutput =
          await weatherAPI.getWeeklyWeather(inputFieldValue);
        console.log(futureWeatherOutput);
        futureWeatherOutput.forEach((item, index) => {
          const div = document.createElement("div");
          div.innerHTML = `
                    <ul>
                        <li class="day${index + 1}-output" id="day${index + 1}-date">Date: ${item.date}</li>
                        <li class="day${index + 1}-output" id="day${index + 1}-max">Temperature (Max): ${item.tempMax}</li>
                        <li class="day${index + 1}-output" id="day${index + 1}-min">Temperature (Min): ${item.tempMin}</li>
                        <li class="day${index + 1}-output" id="day${index + 1}-description">Description: ${item.description}</li>
                    </ul>
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
