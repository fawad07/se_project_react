import './WeatherCard.css';
import weatherTest from '../assets/images/weatherTest.svg';

function WeatherCard() {
    return (
        <>
        <section className="weather-card">
            <p className='weather-card__temp'>70 &deg; F</p>
            <img src={weatherTest}
                     alt="" 
                     className="weather-card__image" />
        </section>
        </>
    );
}

export default WeatherCard;