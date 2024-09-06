$(document).ready(function(){
    $(".btn").click(function(){
        $(this).text($(this).text()=='Know More'?'Know Less':'Know More')
    })
})



$(document).ready(function(){
    $(".btn1").click(function(){
        $(this).text($(this).text()=='Read More'?'Read Less':'Read More')
    })
})

$(".btn").on('click',function(){
    $('#txt').toggleClass('hide show')
})

$(".btn1").on('click',function(){
    $('#txt1').toggleClass('hide show')
})


var productItem = [{
			productName: "Wireless Headphone",
			price: "900/-",
			photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb89o2cPy8mpJCuqBA8cQpfwQ--31H69mUSQ&s"
},
{
			productName: "Wireless Headphone",
			price: "1000/-",
			photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb89o2cPy8mpJCuqBA8cQpfwQ--31H69mUSQ&s"
},
{
			productName: "Wireless Headphone",
			price: "700/-",
			photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb89o2cPy8mpJCuqBA8cQpfwQ--31H69mUSQ&s"
}];



function showProduct() {
	const productInfo = document.querySelector(".productInfo");
    productInfo.innerHTML = "";

	productItem.forEach((item,key) =>{
		productInfo.innerHTML += `<div class="productCard">
					<img src="${item.photo}">
					<h3>${item.productName}</h3>
					<h4>${item.price}</h4>
					<button onclick="addToCart(${key})">Add to Cart</button>
				</div>`;
			
		
	});
}


$('#cartPage').click(function(){
    $(".cart").css({'visibility':'visible'})
})


let cart = {
	items: [],
};

const renderCartItems = () => {
	const cartDiv = document.querySelector(".cartInfo");
	cartDiv.innerHTML = "";
	  cart.items.forEach((item,key) => {
		cartDiv.innerHTML += `
			  <div class="cartList">
			  <img src="${item.photo}">
			  <h3>${item.productName}</h3>
			  <h4>${item.price}</h4>
			  <button onclick='removeFromCart(${key})'>Remove</button>
		  </div>
			  `;
	  });
};

const addToCart=(key)=>{
  if(cart.items[key]==null){
	cart.items[key]=JSON.parse(JSON.stringify(productItem[key]))
  }
  renderCartItems();
}

const removeFromCart=(key)=>{
	cart.items[key]=cart.items.filter((item)=>item.key !== key);
	delete cart.items[key];
	renderCartItems();
}




renderCartItems();
showProduct();





