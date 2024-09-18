const inputField = document.querySelector(".location");
const submitButton = document.querySelector(".submit");
const weatherTodayDiv = document.querySelector(".weather-today");

submitButton.addEventListener("click", () => {
  const inputFieldValue = inputField.value;
  getWeather(inputFieldValue);
})


async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NDNCH7XP9PE4PXWQB9T3R7ED5`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    const currentConditionsOutput = weatherData.currentConditions;
    const todaysConditionsOutput = weatherData.days[0];

    const timeZone = weatherData.timezone;
    const todaysDate = todaysConditionsOutput.datetime;
    const currentTemperature = convertToCelcius(currentConditionsOutput.temp);
    const currentFeelsLikeTemperature = convertToCelcius(currentConditionsOutput.feelslike);
    const todaysTempMax = convertToCelcius(todaysConditionsOutput.tempmax);
    const todaysTempMin = convertToCelcius(todaysConditionsOutput.tempmin);
    const todaysPrecip = todaysConditionsOutput.precip;
    const currentConditionsDescription = currentConditionsOutput.conditions;

    let weatherOutput = {
        timezone: timeZone,
        date: todaysDate,
        temp: currentTemperature,
        feelsLike: currentFeelsLikeTemperature,
        tempMax: todaysTempMax,
        tempMin: todaysTempMin,
        precip: todaysPrecip,
        description: currentConditionsDescription,
      };

      //TODO: Try and get the week's data
    
      //TODO: Add the weather to the DOM using the div
      
    console.log(weatherOutput, weatherData);
  } catch (err) {
    console.log(err);
  }
}

function convertToCelcius(fahrenheit) {
  const celcius = (fahrenheit - 32) / 1.8;
  const temperature = celcius.toFixed(1);
  return temperature;
}
