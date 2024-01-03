import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";
function App() {
  const [count, setCount] = useState(0);

  let handleClick = () => {
    console.log("button clicked");
  };

  return (
    <>
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp/>
      {/* <h1>Material Ui</h1>

      <Button
        variant="outlined"
        onClick={handleClick}
        size="large"
        startIcon={<DeleteIcon />}
      >
        Outlined
      </Button>

      <Button variant="text" onClick={handleClick} color="success" size="small">
        Click Me
      </Button>
      <Button
        variant="contained"
        onClick={handleClick}
        color="error"
        size="medium"
      >
        Contained
      </Button>
      <Button variant="outlined" onClick={handleClick} disabled size="large">
        Outlined
      </Button>

      <Alert severity="error">Error Alert</Alert> */}
    </>
  );
}

export default App;
