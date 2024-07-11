import './WeatherCard.css';
import weatherTest from '../assets/images/weatherTest.svg';

function WeatherCard( { weatherData}) {
    return (
        <>
        <section className="weather-card">
            <p className='weather-card__temp'>{weatherData.temp.F} &deg; F</p>
            <img src={weatherTest}
                     alt="" 
                     className="weather-card__image" />
        </section>
        </>
    );
}

export default WeatherCard;