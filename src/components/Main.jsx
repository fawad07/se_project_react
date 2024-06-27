import './Main.css';
import WeatherCard from './WeatherCard.jsx';
import ItemCard from './ItemCard.jsx';
import { defaultClothingItems } from '../utils/constants.js';

function Main( {data}) {
    return (
        <main>
            <WeatherCard></WeatherCard>
            <section className="cards">
                <p className="cards__text">Today is 75 &deg; F / You want to wear:</p>
                <ul className="cards__list">
                    { defaultClothingItems.filter( (item) => {
                        return item.weather === data.type;
                    })
                    .map( (item) => {
                        return (
                         <ItemCard key={item._id} props= {item}></ItemCard>
                    )}
                    ) };
                </ul>
            </section>
        </main>
    );
};

export default Main;