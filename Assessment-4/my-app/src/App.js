import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import { fetchWeather } from "./utils/api";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="app">
      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard data={weatherData} />

      {/* ✅ Footer ALWAYS visible */}
      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default App;