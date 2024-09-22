import mimiClock from "./clock.js";
import mimiBgRandom from "./ramdom_bg.js";
import mimiLogin from "./login.js";
import mimiWeather from "./weather_api.js";
import mimitodo from "./todo.js";
window.addEventListener('DOMContentLoaded',()=>{
	mimiClock();
	setInterval(mimiClock,1000);
	mimiBgRandom();
	mimiLogin();
	mimiWeather();
	mimitodo();
})
