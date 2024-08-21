//import { useState } from "react";
import React from "react";
import { useContext } from "react";

import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
	/*
	const [currentTemperatureUnit, setToggleSwitch] = useState("C");

	const handleChange = (e) => {
		console.log(e);
		if (currentTemperatureUnit === "C") setToggleSwitch("F");
		if (currentTemperatureUnit === "F") setToggleSwitch("C");
	};
*/

	const { currentTemperatureUnit, handleToggleSwitch } = useContext(
		CurrentTemperatureUnitContext
	);
	console.log(
		`inside Toggle swich component, currentTemperatureUnit: ${currentTemperatureUnit}`
	);
	return (
		<label className="toggle__switch">
			<input
				type="checkbox"
				className="switch__box"
				onChange={handleToggleSwitch}
			></input>
			<span
				className={
					currentTemperatureUnit === "F"
						? "switch__slider switch__slider-F"
						: "switch__slider switch__slider-C"
				}
			></span>
			<p
				className={`switch__temp-F ${
					currentTemperatureUnit === "F" && "switch__active"
				}`}
			>
				F
			</p>
			<p
				className={`switch__temp-C ${
					currentTemperatureUnit === "C" && "switch__active"
				}`}
			>
				C
			</p>
		</label>
	);
}

export default ToggleSwitch;
