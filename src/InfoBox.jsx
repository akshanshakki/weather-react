import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./SearchBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { WbSunny } from "@mui/icons-material";

export default function InfoBox({ info }) {
  const Img_url =
    "https://images.unsplash.com/photo-1699801571393-cf5f39a52332?dpr=1&h=168&w=680&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxODMxNzEzfA&ixlib=rb-4.0.3";

  const Hot =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const Cold =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

  //   let info = {
  //     city: "Delhi",
  //     feelsLike: 14.62,
  //     humidity: 77,
  //     temp: 15.05,
  //     tempMax: 15.05,
  //     tempMin: 15.05,
  //     weather: "mist",
  //   };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            // image={Img_url}
            image={info.humidity > 80 ? Rain : info.temp > 10 ? Hot : Cold}
            title="green iguana"
          />
          <CardContent>
            <Typography className="icon" gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 10 ? (
                <WbSunny />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>TemperatureMin = {info.tempMin}&deg;C</p>
              <p>TemperatureMax = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be descriped as{" "}
                <i>
                  <b>{info.weather}</b>
                </i>
                & feels like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
