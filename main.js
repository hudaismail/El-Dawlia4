const icon = document.querySelector('.icon')
const scrollBtn = document.querySelector('.scroll-top')

icon.addEventListener('click',()=>{
	document.querySelector('.menu').classList.toggle('show')
})

//first

window.addEventListener('scroll',function(){
	if(document.body.scrollTop>100 || document.documentElement.scrollTop >100){
		scrollBtn.style.display="block"
	}else{
		scrollBtn.style.display="none"
	}
})

//second
	 
scrollBtn.addEventListener('click',()=>{
	document.documentElement.scrollTop=0;
})