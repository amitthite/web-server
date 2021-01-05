const request = require('request')

const forecast2 = (address, callback) => {
const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  qs: {q: address, lat: '0', lon: '0', id: '2172797', lang: 'null'},
  headers: {
    'x-rapidapi-key': '33e1262b54msh8bed7a0bdd7284cp11f524jsn6e593457f5a1',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    useQueryString: true
  }
}

request(options, (error, {body} ) => {
		if (error) {
			callback('Unable to connect to location services!', undefined)
		} else if (body === 404) {
			callback(`Unable to find location. Try another search.${body.test.message}`, undefined)
		} else {
			console.log('amit log : forecast2.js body --> ' + body)
			bodyString = JSON.parse(body)
			bodyString.main.temp = bodyString.main.temp - 273
			bodyString.main.feels_like = bodyString.main.feels_like - 273
			callback(undefined, 'AMIT IS Gr8 :  It is currently ' + bodyString.main.temp + ' degress out. It feels like ' + bodyString.main.feels_like + ' degrees.')
		}
	}
)
}
module.exports = forecast2