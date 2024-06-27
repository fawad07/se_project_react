//Main.jsx
import './Main.css';
import WeatherCard from './WeatherCard.jsx';


function Main() {
    return (
        <main>
            <WeatherCard></WeatherCard>
            <section className="cards">
                <p className="cards__text">Today is 75 &deg; F / You want to wear:</p>
                {/**TODO: ADD CARDS */}
            </section>

        </main>
    );
};

export default Main;