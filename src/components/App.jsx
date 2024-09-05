import { useState, useEffect } from "react";
import {  Switch, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "./AddItemModal";


function App() {
	const [weatherData, setWeatherData] = useState({
		type: "",
		temp: { F: 999, C: 999 },
		city: "",
	});
	const [activeModal, setActiveModal] = useState("");
	const [selectedCard, setSelectedCard] = useState({});
	const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
/*
	console.log(
		`Inside App Component, CurrentTempUnit: ${currentTemperatureUnit}`
	); //debugging
*/
	const addButtonClick = () => {
		setActiveModal("Add-Garment");
	};

	const closeActiveModal = () => {
		setActiveModal("");
	};

	const cardClick = (card) => {
		setActiveModal("preview");
		setSelectedCard(card);
	};

	useEffect(() => {
		getWeather(coordinates, APIkey)
			.then((data) => {
				const filteredData = filterWeatherData(data);
				//console.log(filteredData); //debugging statement
				setWeatherData(filteredData);
			})
			.catch(console.error);
	}, []);

	const handleToggleSwitch = () => {
		console.log("Inside App.jsx handleToggleSwitch");
		if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
		if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
	};

	const handleOnAddItem = (values) => {
		//e.preventDefault();
		console.log(values);
		//console.log(`Inside On add Item func\n${e}\n${e.target}`);
	}


	return (
		<>
			<CurrentTemperatureUnitContext.Provider
				value={{ currentTemperatureUnit, handleToggleSwitch }}
			>
				<div className="page">
					<div className="page_content">
						<Header
							onAddButtonClick={addButtonClick}
							weatherInfo={weatherData}
						/>
						<Switch>
							{/*HOME ROUTE */}
							{/*<Route path="/" element={<Main data={weatherData} handleCardClick={cardClick} />} />*/}
							<Route exact path="/">
								<Main
									data={weatherData}
									handleCardClick={cardClick}
								/>
							</Route>

							{/*PROFILE ROUTE */}
							<Route path="/profile">
								<p>PROFILE ROUTE - Debugging</p>
							</Route>
						</Switch>
					</div>

					<Footer />
					
					
					<AddItemModal 
						onModalCloseButtonClick={closeActiveModal}
						activeModal={activeModal} 
						onAddItem={handleOnAddItem}
					/>
					
					<ItemModal
						activeModal={activeModal}
						card={selectedCard}
						onModalCloseButtonClick={closeActiveModal}
					/>
				</div>
			</CurrentTemperatureUnitContext.Provider>
		</>
	);
}

export default App;
