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


//send mail
function sendMail(){
	var params = {
		name:document.getElementById("name").value,
		email:document.getElementById("email").value,
		message:document.getElementById("message").value,
	};
	
	const serviceID = "service_v43ygrk";
	const templateID= "template_5hfhq15";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) =>{
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("message").value = "";
				
				console.log(res);
				alert("your message send successfully");
			})
			.catch((err) => console.log(err));

	}
