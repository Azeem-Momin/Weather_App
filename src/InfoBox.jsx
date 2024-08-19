import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function InfoBox({ info }) {

    let INIT_URL = "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VBUPVQLFMRP33GO4WUQY4VLSMI.jpg";
    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRGdLrI_kPO4d_j7JfRJE2p1YTz8Ln0rVrg&s";
    let HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE=";
    let RAIN_URL = "https://centralca.cdn-anvilcms.net/media/images/2019/01/02/images/Rainy_Weather_pix.max-1200x675.jpg";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}

                     image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} 
                            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather is <i>{info.weather}</i> & feels like {info.feelslike}</p>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
