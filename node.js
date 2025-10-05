let quantity = 1;
 const pricePerItem = 49.99;

 const quantityEl = document.getElementById("quantity");
 const increaseBtn = document.getElementById("increase");
 const decreaseBtn = document.getElementById("decrease");
 const addToCartBtn = document.getElementById("addToCartBtn");
 const cartPopup = document.getElementById("cartPopup");
 const cartQuantity = document.getElementById("cartQuantity");
 const cartTotal = document.getElementById("cartTotal");

 increaseBtn.addEventListener("click", () => {
   quantity++;
   quantityEl.textContent = quantity;
 });

 decreaseBtn.addEventListener("click", () => {
   if (quantity > 1) {
     quantity--;
     quantityEl.textContent = quantity;
   }
 });

 addToCartBtn.addEventListener("click", () => {
   cartQuantity.textContent = quantity;
   cartTotal.textContent = `$${(quantity * pricePerItem).toFixed(2)}`;
   cartPopup.style.display = "block";
 });

 function closeCart() {
   cartPopup.style.display = "none";
 }