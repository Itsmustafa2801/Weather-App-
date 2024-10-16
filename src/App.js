import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import WeatherCard from "./WeatherCard/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("I am the submit handler function");

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=807d5dab8136a4a392486f49b79c4981&units=metric`
      );
      console.log("response:", response);
      setData(response.data.list);
    } catch (error) {
      console.log("error in API call", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Weather App</h1>
        <label htmlFor="city">City Name</label>
        <input
          type="text"
          id="city"
          placeholder="Enter city name"
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button type="submit" variant="primary">Get Weather</Button>{' '}
      </form>
      {data.map((eachForecast, index) => (
        <WeatherCard
          key={index}
          date={eachForecast.dt_txt}
          temp={eachForecast.main.temp}
          min={eachForecast.main.temp_min}
          max={eachForecast.main.temp_max}
          pressure={eachForecast.main.pressure}
        />
      ))}
    </div>
  );
};

export default Home;