import "./temp.scss";
const Temperature = () => {
  const temp = 25;
  return (
    <div className="temperature-wrapper">
      <h1 className="temperature-value">25°C</h1>
      <div className="temperature-info">
        <p>{temp > 20 ? "temperature is high" : "temperature is low"}</p>
          </div>
          
          <div className="temperature-reaction">
            {temp > 20 ? "🐠🥹" : "🐠😊"}
          </div>
    </div>
  );
};

export default Temperature;
