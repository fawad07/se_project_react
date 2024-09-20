import {checkResponse} from "./api";


export const getWeather = ({ latitude, longitude }, APIkey) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
	).then(checkResponse);
	/*(
		(res) => {
		if (res.ok) {
			return res.json();
		} //end if
		else {
			return Promise.reject(`Error: ${res.status}`);
		} //end else
	});*/
};

export const filterWeatherData = (data) => {
	const result = {};
	result.city = data.name;
	result.temp = {
		F: Math.round(data.main.temp),
		C: Math.round(((data.main.temp - 32) * 5) / 9),
	};
	result.type = getWeatherType(result.temp.F);
	result.weatherCondition = data.weather[0].main.toLowerCase();
	result.isDay = isDay(data.sys, Date.now());

	//console.log(result.temp); //debugging statement
	return result;
};

const isDay = ({ sunrise, sunset }, now) => {
	return sunrise < now / 1000 && now / 1000 < sunset;
};

const getWeatherType = (weatherTemp) => {
	if (weatherTemp > 86) {
		return "hot";
	} //end if
	else if (weatherTemp >= 66 && weatherTemp < 86) {
		return "warm";
	} //end else if
	else {
		return "cold";
	} //end else if
}; //end func
