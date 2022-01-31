const cart_count = document.getElementById("lblCartCount");

let cart = 0;

if (localStorage.getItem("cart")) {
  cart = localStorage.getItem("cart");
  cart_count.innerHTML = parseInt(cart);
} else {
  localStorage.setItem("cart", 0);
}

const addToCartButton = document.getElementById("add-to-cart-button");

addToCartButton.onclick = () => {
  let totalCart = parseInt(cart) + parseInt(qty.innerHTML);
  console.log(cart, "qty", parseInt(qty.innerHTML));
  localStorage.setItem("cart", totalCart);
  cart = totalCart;
  cart_count.innerHTML = parseInt(cart);
};
