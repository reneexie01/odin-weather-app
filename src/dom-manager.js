import { weatherAPI } from "./weather-api";

export { domManager };

const domManager = (function DomManager() {

    const inputField = document.querySelector(".location");
    const submitButton = document.querySelector(".submit");
    const weatherContainer = document.querySelector(".weather-today");
    
    const locationButton = () => {
        submitButton.addEventListener("click", async () => {
            const inputFieldValue = inputField.value;

            try {
                let weatherOutput = await weatherAPI.getWeather(inputFieldValue);
                console.log(weatherOutput);
                weatherContainer.innerHTML = `
                <ul>
                    <li class="current-output" id="current-date">Date: ${weatherOutput.date}</li>
                    <li class="current-output" id="current-description">Description: ${weatherOutput.description}</li>
                    <li class="current-output" id="current-location">Location: ${weatherOutput.resolvedAddress}</li>
                    <li class="current-output" id="current-timezone">Timezone: ${weatherOutput.timezone}</li>
                    <li class="current-output" id="current-temperature">Current Temperature: ${weatherOutput.temp}</li>
                    <li class="current-output" id="current-feelslike">Feels Like: ${weatherOutput.feelsLike}</li>
                    <li class="current-output" id="todays-max">Temperature (Max): ${weatherOutput.tempMax}</li>
                    <li class="current-output" id="todays-min">Temperature (Min): ${weatherOutput.tempMin}</li>
                    <li class="current-output" id="current-precipitation">Precipitation:${weatherOutput.precip}</li>
                </ul>
                `
                //TODO: Add the weatherOutput to the weatherContainer
            } catch (err) {
                console.log(err);
            }
          })
    }


    return { locationButton };
})();
