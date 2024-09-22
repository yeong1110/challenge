export default function mimiClock(){
	const clockBox = document.querySelector('#mimiClock');
	const now = new Date();
	const today = {
		year : now.getFullYear(),
		month : String(now.getMonth()).padStart(2,0),
		date : String(now.getDate()).padStart(2,0),
	}
	const clock = {
		times : String(now.getHours()).padStart(2,0),
		minutes : String(now.getMinutes()).padStart(2,0),
		seconds : String(now.getSeconds()).padStart(2,0),
	}
	clockBox.innerHTML = `
	<div class="today">${today.year}.${today.month}.${today.date}</div>
	<div class="time">
		<div class="rel">
			<span class="ab">${clock.times}</span>
		</div> : 
		<div class="rel">
			<span class="ab">${clock.minutes}</span>
		</div> : 
		<div class="rel">
			<span class="time-left">${clock.seconds}</span>
		</div>
	</div>
	`
	// const targetNode = document.querySelectorAll(".ab");
	// const observerOptions = {
	// 	childList: true,
	// 	attributes: true,

	// 	// false를 지정하거나 아예 생략하여 부모 노드의 변경만 감지
	// 	subtree: true,
	// };

	// const observer = new MutationObserver(callback);
	// targetNode.forEach(target=>{
	// 	observer.observe(target, observerOptions);
	// })
}