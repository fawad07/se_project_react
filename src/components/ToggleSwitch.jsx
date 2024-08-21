import { useState } from "react";
import React from "react";

import "./ToggleSwitch.css";

function ToggleSwitch() {
	console.log("Toggle");

	const [currentTemperatureUnit, setToggleSwitch] = useState("C");

	const handleChange = (e) => {
		console.log(e);
		if (currentTemperatureUnit === "C") setToggleSwitch("F");
		if (currentTemperatureUnit === "F") setToggleSwitch("C");
	};

	return (
		<label className="toggle__switch">
			<input
				type="checkbox"
				className="switch__box"
				onChange={handleChange}
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
