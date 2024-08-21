import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
	currentTemperature: "F ",
	handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
