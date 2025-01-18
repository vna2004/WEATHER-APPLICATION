import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const HotImg =
    "https://images.pexels.com/photos/2792077/pexels-photo-2792077.jpeg?auto=compress&cs=tinysrgb&w=600";
  const ColdImg =
    "https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=600";
  const RainImg =
    "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="InfoBox">
      <h2>Weather Info ⛅</h2>
      <div className="cardContainer">
        <Card sx={{ width: 400 }}>
          <CardMedia
            component="img"
            alt="Weather"
            height="140"
            image={info.humidity > 80 ? RainImg : info.temp > 15 ? HotImg : ColdImg} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                <b>Humidity:</b> {info.humidity}
              </p>
              <p>
                <b>Temperature:</b> {info.temp}&deg;C
              </p>
              <p>
                <b>Min Temperature:</b> {info.tempMin}&deg;C
              </p>
              <p>
                <b>Max Temperature:</b> {info.tempMax}&deg;C
              </p>
              <p>
                <b>Feels Like:</b> {info.feelslike}&deg;C
              </p>
              <p>
                <b>Weather:</b> {info.weather}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
