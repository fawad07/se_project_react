import React from "react";
import { useContext } from "react";

import "./WeatherCard.css";
import { weatherOptions } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
	const weatherOpts = weatherOptions.filter((opts) => {
		//console.log(weatherData); //Debugging statement
		return (
			opts.day === weatherData.isDay &&
			opts.condition === weatherData.weatherCondition
		);
	});

	const weatherOptsUrl = weatherOpts[0]?.url;
	const weatherOptsCondition = weatherOpts[0]?.condition;
	const { currentTemperatureUnit } = useContext(
		CurrentTemperatureUnitContext
	);
	const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;
	//debugger;
	return (
		<section className="weather-card">
			<p className="weather-card__temp">{temp} &deg; { currentTemperatureUnit }</p>
			<img
				src={weatherOptsUrl}
				alt={weatherOptsCondition}
				className="weather-card__image"
			/>
		</section>
	);
}

export default WeatherCard;
