export { convertToCelcius };

    function convertToCelcius(fahrenheit) {
    const celcius = (fahrenheit - 32) / 1.8;
    const temperature = celcius.toFixed(1);
    return temperature;
  }
  