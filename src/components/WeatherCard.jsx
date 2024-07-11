import './WeatherCard.css';
import { weatherOptions } from '../utils/constants';


function WeatherCard( { weatherData}) {
    const weatherOpts = weatherOptions.filter( (opts) => {
        //console.log(weatherData);      //Debugging statement
        return  (
            opts.day === weatherData.isDay && 
            opts.condition === weatherData.weatherCondition 
        ) ;
    });

    const weatherOptsUrl = weatherOpts[0]?.url;
    const weatherOptsCondition = weatherOpts[0]?.condition;

    //debugger;
    return (
        <>
        <section className="weather-card">
            <p className='weather-card__temp'>{weatherData.temp.F} &deg; F</p>
            <img src={weatherOptsUrl }
                     alt={ weatherOptsCondition }
                     className="weather-card__image" />
        </section>
        </>
    );
}

export default WeatherCard;