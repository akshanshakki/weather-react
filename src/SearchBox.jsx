import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "80e6cf7226aa164b2abf549f27a4226c";

  let getWeatherInfo = async () => {

    try {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
          );
          let jsonRes = await response.json();
          console.log(jsonRes);
      
          let result = {
            city: city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
          };
          console.log(result);
          return result;
    } catch (err) {
        throw err;
    }

  
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {

    try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch (error) {
        setError(true)

    }


  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br></br>
        <br></br>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
        {error && <p className="error">No such place exist in our api</p>}
      </form>
    </div>
  );
}
