
function cartAlert(){
	swal( {
		title: "Yellow Gold Hoop Earrings",
		text: "have added to your cart",
		buttons: false,
		timer: 3000,
		  });		  
}

let carts = document.querySelectorAll('.button');

let products = [
	{
		name : 'Yellow Gold Hoop Earrings',
		price : 8,
		inCart : 0
	}
];


for (let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers();
	// console.log("add to cart");
	})
}

function cartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.basket').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.basket').textContent = 1;
	}
	
}


