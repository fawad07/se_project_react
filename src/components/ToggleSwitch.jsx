import React from "react";

import "./ToggleSwitch.css";

const toggleSwitch = () => {
	return (
		<label className="toggle_switch">
			<input type="checkbox" className="switch_box"></input>
		</label>
	);
};

export default toggleSwitch;
