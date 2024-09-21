import React from "react";
import { useContext } from "react";

import "./Main.css";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import { defaultClothingItems } from "../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";


function Main({ data, handleCardClick, clothingItems }) {
	//console.log(data);      //debugginf Statement
	const { currentTemperatureUnit } = useContext(
		CurrentTemperatureUnitContext
	);
	const temp = data?.temp?.[currentTemperatureUnit] || 99;


	return (
		<main>
			<WeatherCard weatherData={data}></WeatherCard>
			<section className="cards">
				<p className="cards__text">
					Today is {temp} &deg;{ currentTemperatureUnit }  You want to wear:
				</p>
				<ul className="cards__list">
					{clothingItems
						.filter((item) => {
							//console.log(item);	//debugging
							return item.weather.toLowerCase() === data.type;
						})
						.map((item) => {
							return (
								<ItemCard
									key={item._id}
									props={item}
									onCardClick={handleCardClick}
									clothingItems={clothingItems}
								></ItemCard>
							);
						})}
					;
				</ul>
			</section>
		</main>
	);
}

export default Main;
