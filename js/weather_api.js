const myposition = document.querySelector('#myPosition');
const weatherState = document.querySelector('#weatherState');
const temperature = document.querySelector('#tem');
const weatherIcon = document.querySelector('#weatherIcon');
const toWeather = document.querySelector('#goWeather')
const API_KEY = '1c0bc34d984679ebc4552ddf0e2a8c8f';
export default function mimiWeather(){
	navigator.geolocation.getCurrentPosition(onGeo,onGeoError);
	toWeather.addEventListener('click',goWeather)
}
function onGeo(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
	// console.log(url)
	fetch(url)
	.then( (response) => response.json())
	.then( (data) => {
		const location = data.name;
		let weather, icon;
		const weatherId = data.weather[0].id;

		switch (weatherId) {

			case 200:
			case 201:
			case 202:
			case 210:
			case 211:
			case 212:
			case 221:
			case 230:
			case 231:
			case 232:
				icon = '6'
				weather = '천둥'
				break;
			case 300:
			case 301:
			case 302:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 321:
				icon = '5'
				weather = '이슬비'
				break;
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 511:
			case 520:
			case 521:
			case 522:
			case 531:
				icon = '4'	
				weather = '비'
				break;
			case 600:
			case 601:
			case 602:
			case 611:
			case 612:
			case 615:
			case 616:
			case 620:
			case 621:
			case 622:
				icon = '3'
				weather = '눈'
				break;
			case 701:
			case 711:
			case 721:
			case 731:
			case 741:
			case 751:
			case 761:
			case 762:
			case 771:
			case 781:
				icon = '2'
				weather = '안개'
				break;
			case 800:
				icon = '1'
				weather = '맑음'
				break;
			case 801:
			case 802:
			case 803:
			case 804:
				icon = '0'
				weather = '흐림'
				break;
			default:
				weather = 'error'
		}

		const temp = Math.round(Number(data.main.temp))
		myposition.textContent = location;
		weatherState.textContent = weather;
		temperature.textContent = `${temp}`;
		weatherIcon.style.backgroundImage = `url('../asset/img/${icon}.svg')`
	});

}
function onGeoError(){
	myposition.textContent = '해당 위치를 찾을 수 없습니다'
}
function goWeather(){
	document.querySelector('#weatherBox').classList.toggle('active');
	if(document.querySelector('#todoBox').classList.contains('active')){
		document.querySelector('#todoBox').classList.remove('active');
	}
}