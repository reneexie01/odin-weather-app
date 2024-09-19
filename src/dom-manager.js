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

                //TODO: Add the weatherOutput to the weatherContainer
            } catch (err) {
                console.log(err);
            }
          })
    }


    return { locationButton };
})();
