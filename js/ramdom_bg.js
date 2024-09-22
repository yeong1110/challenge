export default function mimiBgRandom(){
	const body = document.querySelector('body');
	const bgs = [
		'https://cdn.pixabay.com/photo/2022/07/11/06/14/wild-bird-7314255_1280.jpg',
		'https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg',
		'https://cdn.pixabay.com/photo/2017/10/20/09/10/travel-2870521_1280.jpg'
	]
	const random = Math.floor(Math.random() *bgs.length );
	body.style.backgroundImage = `url(${bgs[random]})`;
	// console.log(random)
}