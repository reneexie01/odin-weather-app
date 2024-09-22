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
        console.log(weatherOutput);
        todayWeatherContainer.innerHTML = `
                <div class="current-output">
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
      } catch (err) {
        console.log(err);
      }

      try {
        let futureWeatherOutput =
          await weatherAPI.getWeeklyWeather(inputFieldValue);
        console.log(futureWeatherOutput);
        futureWeatherOutput.forEach((item, index) => {
          const div = document.createElement("div");
          div.className = "future-days"
          div.innerHTML = `
                    <div class="day${index+1}-output">
                        <div id="day${index + 1}-date">Date: ${item.date}</div>
                        <div id="day${index + 1}-minmax" class="minmax">
                            <div id="min"><span class="bold">Min:</span> ${item.tempMin}</div> 
                            <div id="max"><span class="bold">Max:</span> ${item.tempMax}</div>
                        </div>
                        <div id="day${index + 1}-description">Description: ${item.description}</div>
                    </div>
                    `;
          futureWeatherContainer.appendChild(div);
          loadingContainer.className = "hidden";
        });
      } catch (err) {
        console.log(err);
      }
    });
  };

  return { locationButton };
})();
