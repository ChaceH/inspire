import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

// function temperatureConverter(valNum) {
// 	valNum = parseFloat(valNum);
// 	document.getElementById("weather").innerHTML=((valNum-273.15)*1.8)+32;
//   }

function drawWeather(weather) {
	let template = ""
	template += `
	<div>
		<h6>${Math.round(weather.temp)}°F</h6>
		<h5>${weather.state}, ${weather.country}</h5>
	</div>
	`
	document.getElementById('weather').innerHTML = template
}

export default class WeatherController {
	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(drawWeather)
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}
}
