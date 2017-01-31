var axios = require("axios");

const API_LINK = "http://api.openweathermap.org/data/2.5/weather?appid=397843cb2d3cbe8f748d85fd572da092&units=metric";

function getTemp (location) {

	var sanitizedLocation = encodeURIComponent(location.trim());

	var requestURL = `${API_LINK}&q=${sanitizedLocation}`;

	return axios.get(requestURL).then(function(res, err){

		if (err) {
			throw new Error(err);
		} else {
			return res.data.main.temp;
		}

	});
}


module.exports = getTemp;

