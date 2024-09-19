import { getWeather } from "./weather-api";

export { domManager };

const domManager = (function DomManager() {

    const inputField = document.querySelector(".location");
    const submitButton = document.querySelector(".submit");
    
    const locationButton = () => {
        submitButton.addEventListener("click", () => {
            const inputFieldValue = inputField.value;
            getWeather(inputFieldValue);
          })
    }
    
    return { locationButton };
})();
