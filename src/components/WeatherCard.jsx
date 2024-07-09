import './WeatherCard.css';
import weatherTest from '../assets/images/weatherTest.svg';

function WeatherCard( { weatherInfo}) {
    return (
        <>
        <section className="weather-card">
            <p className='weather-card__temp'>{weatherInfo.temp.F} &deg; F</p>
            <img src={weatherTest}
                     alt="" 
                     className="weather-card__image" />
        </section>
        </>
    );
}

export default WeatherCard;