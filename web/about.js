console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('form sumbitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

// function getCompliment(iamge){
// 	alert('Leave Compliment')
// }
let imgNew = document.querySelector("#img1");
imgNew.addEventListener('mouseover', () => {
	alert('Amazing') // Leave Compliment
})
imgNew.addEventListener('mouseout',() => {
	console.log('good')
})

// create functionality to remove alert message once user mouse is not over image


// function complimentPic(){
// 	evt.preventDefault()
// 	getElementById('img1')
// 	alert('Leave Compliment')
// }
// let imgNew = document.querySelector("img1");
//console.log(imgNew)
//imgNew.addEventListener('mouseover', complimentPic)


// //imgNew.addEventListener('mouseover', complimentPic);