export const fetchWeather = async (city) => {
  const API_KEY = "b521575635f9ca0222eaa654958fa353";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  // ✅ Check if API returned error
  if (data.cod !== 200) {
    alert("City not found or API error");
    return null;
  }

  return {
    name: data.name,
    temp: data.main?.temp,
    description: data.weather?.[0]?.description,
    humidity: data.main?.humidity,
    wind: data.wind?.speed,
  };
};