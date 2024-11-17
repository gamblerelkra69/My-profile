const menuBtn = document.querySelector('.menu');
const tab = document.querySelector('.tab');
const exitBtn = document.querySelector('.exit');

menuBtn.addEventListener('click',()=>{
		tab.style.left='0px';
})
exitBtn.addEventListener('click',()=>{
		tab.style.left='-300px';
})