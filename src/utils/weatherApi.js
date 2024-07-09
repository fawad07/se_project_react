export const getWeather = ({ latitude, longitude }, APIkey) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
	).then((res) => {
		if (res.ok) {
			return res.json();
		} //end if
		else {
			return Promise.reject(`Error: ${res.status}`);
		} //end else
	});
};

export const filterWeatherData = (data) => {
	const result = {};
	result.city = data.name;
	result.temp = { F: data.main.temp };
	result.type = getWeatherType( result.temp.F);
	return result;
};

const getWeatherType = (weatherTemp) => {
	if (weatherTemp > 86) {
		return "Hot";
	} //end if
	else if (weatherTemp >= 66 && weatherTemp < 86) {
		return "Warm";
	} //end else if
	else {
		return "Cold";
	} //end else if
}; //end func
