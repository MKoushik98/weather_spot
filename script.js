//  This is for main contain/body fatching using Api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	document.getElementById("cityName").innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			document.getElementById("sptemp").innerHTML = response.max_temp + "<sup>o</sup>" + "<span>C</span>"
			document.getElementById("sphumo").innerHTML = response.humidity
			document.getElementById("spwind").innerHTML = response.wind_speed + " <span>KM/H</span>"
			

			document.getElementById("temp").innerHTML = response.temp
			document.getElementById("min_temp").innerHTML = response.min_temp
			document.getElementById("max_temp").innerHTML = response.max_temp
			document.getElementById("humidity").innerHTML = response.humidity
			document.getElementById("sunrise").innerHTML = response.sunrise
			document.getElementById("sunset").innerHTML = response.sunset
			document.getElementById("wind_degrees").innerHTML = response.wind_degrees
			document.getElementById("feels_like").innerHTML = response.feels_like
			document.getElementById("wind_speed").innerHTML = response.wind_speed


		})
}
let a = document.getElementById("submit")
let b = document.getElementById("city")
a.addEventListener("click", (e) => {
	e.preventDefault();

	getweather(b.value)
})
getweather("Arambagh")




//This for footer rendering using Api fetch

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const restweather = (city1) => {
	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options1)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			document.getElementById("cloud_pct1").innerHTML=response.cloud_pct
			document.getElementById("max_temp1").innerHTML=response.max_temp
			document.getElementById("min_temp1").innerHTML=response.min_temp
			document.getElementById("sunrise1").innerHTML=response.sunrise
			document.getElementById("sunset1").innerHTML=response.sunset
			document.getElementById("humidity1").innerHTML=response.humidity


		})
}
restweather("Delhi")



const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const restweather1 = (city2) => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options2)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			document.getElementById("cloud_pct2").innerHTML=response.cloud_pct
			document.getElementById("max_temp2").innerHTML=response.max_temp
			document.getElementById("min_temp2").innerHTML=response.min_temp
			document.getElementById("sunrise2").innerHTML=response.sunrise
			document.getElementById("sunset2").innerHTML=response.sunset
			document.getElementById("humidity2").innerHTML=response.humidity


		})
}
restweather1("Mumbai")



const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const restweather3 = (city3) => {
	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options3)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			document.getElementById("cloud_pct3").innerHTML=response.cloud_pct
			document.getElementById("max_temp3").innerHTML=response.max_temp
			document.getElementById("min_temp3").innerHTML=response.min_temp
			document.getElementById("sunrise3").innerHTML=response.sunrise
			document.getElementById("sunset3").innerHTML=response.sunset
			document.getElementById("humidity3").innerHTML=response.humidity


		})
}
restweather3("Kolkata")




const options4 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const restweather4 = (city4) => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options4)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			document.getElementById("cloud_pct4").innerHTML=response.cloud_pct
			document.getElementById("max_temp4").innerHTML=response.max_temp
			document.getElementById("min_temp4").innerHTML=response.min_temp
			document.getElementById("sunrise4").innerHTML=response.sunrise
			document.getElementById("sunset4").innerHTML=response.sunset
			document.getElementById("humidity4").innerHTML=response.humidity


		})
}
restweather4("Chennai")




const options5 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64f37fd921msh28d78ba4765015cp1641cejsn29c020409886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const restweather5 = (city5) => {
	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Darjeeling', options5)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			document.getElementById("cloud_pct5").innerHTML=response.cloud_pct
			document.getElementById("max_temp5").innerHTML=response.max_temp
			document.getElementById("min_temp5").innerHTML=response.min_temp
			document.getElementById("sunrise5").innerHTML=response.sunrise
			document.getElementById("sunset5").innerHTML=response.sunset
			document.getElementById("humidity5").innerHTML=response.humidity


		})
}
restweather5("Darjeeling")






