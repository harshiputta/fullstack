const products = [
{
id:1,
name:"Laptop",
price:50000,
image:"https://picsum.photos/300?1"
},
{
id:2,
name:"Phone",
price:25000,
image:"https://picsum.photos/300?2"
},
{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/300?3"
},
{
id:4,
name:"Smart Watch",
price:5000,
image:"https://picsum.photos/300?4"
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(){

const productDiv =
document.getElementById("products");

productDiv.innerHTML = "";

products.forEach(product => {

productDiv.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button onclick="showDetails(${product.id})">
Details
</button>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
`;

});
}

function showDetails(id){

const product =
products.find(p => p.id === id);

alert(
`Product: ${product.name}
Price: ₹${product.price}`
);

}

function addToCart(id){

const product =
products.find(p => p.id === id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();
}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item => {

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<span>${item.name}</span>
<span>₹${item.price}</span>
</div>
`;

});

document.getElementById("cartCount")
.innerText = cart.length;

document.getElementById("total")
.innerText = total;
}

function placeOrder(){

if(cart.length === 0){
alert("Cart Empty");
return;
}

alert("Order Placed Successfully!");

cart = [];

localStorage.removeItem("cart");

updateCart();
}

displayProducts();
updateCart();
