function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value;
  const conversionType = document.getElementById('conversionType').value;
  const resultElement = document.getElementById('result');
  const errorElement = document.getElementById('error');

  resultElement.textContent = '';
  errorElement.textContent = '';
  errorElement.style.display = 'none';

  const temperature = parseFloat(temperatureInput);
  if (isNaN(temperature)) {
    errorElement.textContent = 'Please enter a valid number.';
    errorElement.style.display = 'block';
    return;
  }

  let result;

  if (conversionType === 'celsiusToFahrenheit') {
    result = (temperature * 9/5) + 32;
    resultElement.textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
  } else if (conversionType === 'fahrenheitToCelsius') {
    result = (temperature - 32) * 5/9;
    resultElement.textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
  }
}
