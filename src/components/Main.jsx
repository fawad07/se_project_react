import './Main.css';
import WeatherCard from './WeatherCard.jsx';
import ItemCard from './ItemCard.jsx';
import { defaultClothingItems } from '../utils/constants.js';

function Main( {data, handleCardClick}) {
    //console.log(data);      //debugginf Statement
    return (
        <main>
            <WeatherCard weatherData={data}></WeatherCard>
            <section className="cards">
                <p className="cards__text">Today is { data.temp.F} &deg; F / You want to wear:</p>
                <ul className="cards__list">
                    { defaultClothingItems.filter( (item) => {
                        return item.weather === data.type;
                    })
                    .map( (item) => {
                        return (
                         <ItemCard key={item._id} props= {item} onCardClick={handleCardClick}></ItemCard>
                    )}
                    ) };
                </ul>
            </section>
        </main>
    );
};

export default Main;