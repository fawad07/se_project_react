import { useState, useEffect } from "react";
//import {  Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function App() {
	const [weatherData, setWeatherData] = useState({
		type: "",
		temp: { F: 999, C: 999 },
		city: "",
	});
	const [activeModal, setActiveModal] = useState("");
	const [selectedCard, setSelectedCard] = useState({});
	const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

	console.log(
		`Inside App Component, CurrentTempUnit: ${currentTemperatureUnit}`
	); //debugging

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
				console.log(filteredData); //debugging statement
				setWeatherData(filteredData);
			})
			.catch(console.error);
	}, []);

	const handleToggleSwitch = () => {
		console.log("Inside App.jsx handleToggleSwitch");
		if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
		if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
	};

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
					<ModalWithForm
						titleText="New Garment"
						buttonText="Add Garment"
						activeModal={activeModal}
						onModalCloseButtonClick={closeActiveModal}
						isOpen={activeModal === "Add-Garment"}
					>
						<label htmlFor="name" className="modal__label">
							Name
							<input
								type="text"
								className="modal__input"
								id="name"
								placeholder="Name"
							/>
						</label>
						<label htmlFor="imageURL" className="modal__label">
							Image
							<input
								type="url"
								className="modal__input"
								id="imageURL"
								placeholder="image url"
							/>
						</label>
						<fieldset className="modal__radio-btns">
							<legend className="modal__legend">
								Select Weather Type:
							</legend>
							<label
								htmlFor="hot"
								className="modal__label modal__label_type_radio"
							>
								<input
									type="radio"
									className="modal__radio-input"
									id="hot"
									name="radio"
								/>
								Hot
							</label>
							<label
								htmlFor="warm"
								className="modal__label modal__label_type_radio"
							>
								<input
									type="radio"
									className="modal__radio-input"
									id="warm"
									name="radio"
								/>
								Warm
							</label>
							<label
								htmlFor="cold"
								className="modal__label modal__label_type_radio"
							>
								<input
									type="radio"
									className="modal__radio-input"
									id="cold"
									name="radio"
								/>
								Cold
							</label>
						</fieldset>
					</ModalWithForm>
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
