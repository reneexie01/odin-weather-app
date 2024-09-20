import { convertToCelcius } from "./function-tools";

export { weatherAPI };

const weatherAPI = (function WeatherAPI() {
  const getWeather = async function getWeather(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NDNCH7XP9PE4PXWQB9T3R7ED5`,
        { mode: "cors" }
      );
      const weatherData = await response.json();

      const currentConditionsOutput = weatherData.currentConditions;
      const todaysConditionsOutput = weatherData.days[0];

      const resolvedAddress = weatherData.resolvedAddress;
      const timeZone = weatherData.timezone;
      const todaysDate = todaysConditionsOutput.datetime;
      const currentTemperature = convertToCelcius(currentConditionsOutput.temp);
      const currentFeelsLikeTemperature = convertToCelcius(
        currentConditionsOutput.feelslike
      );
      const todaysTempMax = convertToCelcius(todaysConditionsOutput.tempmax);
      const todaysTempMin = convertToCelcius(todaysConditionsOutput.tempmin);
      const todaysPrecip = todaysConditionsOutput.precip;
      const currentConditionsDescription = currentConditionsOutput.conditions;

      let weatherOutput = {
        resolvedAddress: resolvedAddress,
        timezone: timeZone,
        date: todaysDate,
        temp: currentTemperature,
        feelsLike: currentFeelsLikeTemperature,
        tempMax: todaysTempMax,
        tempMin: todaysTempMin,
        precip: todaysPrecip,
        description: currentConditionsDescription,
      };
      return weatherOutput;
    } catch (err) {
      console.log(err);
    }
  };

  const getWeeklyWeather = async function getWeeklyWeather(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NDNCH7XP9PE4PXWQB9T3R7ED5`,
        { mode: "cors" }
      );

      const weatherData = await response.json();

      const day1Output = weatherData.days[1];
      const day1Date = day1Output.datetime;
      const maxTemp1 = convertToCelcius(day1Output.tempmax);
      const minTemp1 = convertToCelcius(day1Output.tempmin);
      const description1 = day1Output.conditions;

      let weatherOutput1 = {
        date: day1Date,
        tempMax: maxTemp1,
        tempMin: minTemp1,
        description: description1,
      };

      const day2Output = weatherData.days[2];
      const day2Date = day2Output.datetime;
      const maxTemp2 = convertToCelcius(day2Output.tempmax);
      const minTemp2 = convertToCelcius(day2Output.tempmin);
      const description2 = day2Output.conditions;

      let weatherOutput2 = {
        date: day2Date,
        tempMax: maxTemp2,
        tempMin: minTemp2,
        description: description2,
      };

      const day3Output = weatherData.days[3];
      const day3Date = day3Output.datetime;
      const maxTemp3 = convertToCelcius(day3Output.tempmax);
      const minTemp3 = convertToCelcius(day3Output.tempmin);
      const description3 = day3Output.conditions;

      let weatherOutput3 = {
        date: day3Date,
        tempMax: maxTemp3,
        tempMin: minTemp3,
        description: description3,
      };

      let futureWeather = [weatherOutput1, weatherOutput2, weatherOutput3];

      return futureWeather;
    } catch (err) {
      console.log(err);
    }
  };

  return { getWeather, getWeeklyWeather };
})();
