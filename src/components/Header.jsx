import React from "react";
import { Link } from "react-router-dom";

//Header.jsx
import headerLogo from "../assets/images/logo.svg";
import headerAvatar from "../assets/images/avatar.png";
import ToggleSwitch from "./ToggleSwitch";
import "./Header.css";

function Header({ onAddButtonClick, weatherInfo }) {
	const currentDate = new Date().toLocaleString("default", {
		month: "long",
		day: "numeric",
	});
	// console.log(currentDate);                              //debugging statement

	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={headerLogo} alt="App logo" />
			</Link>
			<p className="header__date-location">
				{" "}
				{currentDate} / {weatherInfo.city}
			</p>
			<div className="header__grid-container">
				<ToggleSwitch>Toggle Switch</ToggleSwitch>
				<button
					type="button"
					className="header__add-close-btn"
					onClick={onAddButtonClick}
				>
					+ Add clothes
				</button>

				<div className="header__user-container">
					<Link className="header__username header__link" to="/profile">
						Place holder
						<img
						src={headerAvatar}
						alt="user name"
						className="header__avatar"
					/>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
