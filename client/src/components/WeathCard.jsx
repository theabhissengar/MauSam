import "./Weath.css";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="weather-left">
        <div className="temp">24°C</div>
        <div className="condition">Sunny</div>
        <div className="city">New Delhi</div>
      </div>

      <div className="weather-right">
        <div className="detail">
          <span>Humidity</span>
          <p>52%</p>
        </div>
        <div className="detail">
          <span>Wind</span>
          <p>10 km/h</p>
        </div>
        <div className="detail">
          <span>Feels Like</span>
          <p>26°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
