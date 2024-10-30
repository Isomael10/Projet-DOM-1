let quantities = [1, 1, 1]; 
const prices = [430790, 180900, 700000]
const totalPriceElement = document.getElementById("total-price");
const cartCountElement = document.getElementById("cart-count");

function updateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < quantities.length; i++) {
    totalPrice += prices[i] * quantities[i];
  }
  totalPriceElement.textContent = totalPrice.toLocaleString();
}

function increaseQuantity(index) {
  quantities[index]++;
  document.getElementById(`quantity-${index}`).textContent = quantities[index];
  updateTotalPrice();
}

function decreaseQuantity(index) {
  if (quantities[index] > 1) {
    quantities[index]--;
    document.getElementById(`quantity-${index}`).textContent = quantities[index];
    updateTotalPrice();
  }
}

function deleteItem(index) {
  const item = document.getElementById(`item-${index}`);
  if (item) {
    item.remove();
    quantities[index] = 0; 
    updateTotalPrice();
    updateCartCount();
  }
}

function toggleLike(index) {
  const likeButton = document.querySelector(`#item-${index} .like-button`);
  if (likeButton) {
    likeButton.classList.toggle("liked");
  }
}

function updateCartCount() {
  const itemCount = document.querySelectorAll(".cart-item").length;
  cartCountElement.textContent = itemCount;
}

// Initial setup
updateTotalPrice();
updateCartCount();
