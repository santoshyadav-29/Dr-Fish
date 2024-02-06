import "./temp.scss";
import { useState, useEffect } from "react";
// set the temperature 10 for 2sec and then 25 for 2sec to see the reaction

const Temperature = () => {
  const [temperature, setTemperature] = useState(generateRandomTemperature());

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(generateRandomTemperature());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function generateRandomTemperature() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  }

  const temperatureData = [
    { date: '2024-02-01', temperature },
    // Add more data points as needed
  ];
  return (
    <div className="temperature-wrapper">
      <h1 className="temperature-value">{temperature}°C</h1>
      <div className="temperature-info">
        <p>{temperature > 20 ? "temperature is high" : "temperature is low"}</p>
      </div>

      <div className="temperature-reaction">
        {temperature > 20 ? "🐠🥹" : "🐠😊"}
      </div>
    </div>
  );
};

export default Temperature;
