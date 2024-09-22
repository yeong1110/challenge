const goLoginBtns = document.querySelectorAll('.goLogin');
const loginBox = document.querySelector('#loginBox');
const localName = localStorage.getItem("loginName");
const loginForm = document.querySelector('#loginForm');
const userChkbox = document.querySelector('#userChk')
export default function mimiLogin(){
	const loginBtn = document.querySelector('#loginBtn');

	loginBtn.addEventListener('click',loginAcc);
	
	goLoginBtns.forEach(el=>{
		el.addEventListener('click',loginFunc);
	})

	if(localName){
		loginForm.remove();
		loginBox.querySelector('h2').textContent = `안녕하세요 ${localName}님`;
		userChkbox.innerHTML = `Hello ${localName}!`;
	}
}
function loginAcc(e){
	e.preventDefault();
	const userName = document.querySelector('#userName').value;
	// const userPw = document.querySelector('#userPw').value;
	localStorage.setItem("loginName", userName);
	console.log(userName, userPw, localName)
	if(localName){
		loginForm.remove();
		loginBox.querySelector('h2').textContent = `안녕하세요 ${localName}님`
	}
}
function loginFunc(e){
	loginBox.classList.add('animate');
	loginBox.classList.remove('hidden');
	e.target.classList.add('hidden');
}