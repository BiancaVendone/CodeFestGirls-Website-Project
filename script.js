
/* Payment page */
function myFunction () {
    alert ("YAY!! Your spot is saved!")

}

/* about page */

const acc = document.getElementsByClassName("accordion");
const i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Booking page */

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  const removeCartItemButtons = document.getElementsByClassName('btn-area')
  for (const i = 0; i < removeCartItemButtons.length; i++) {
      const button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }
  const quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (const i = 0; i < quantityInputs.length; i++) {
      const input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }
  const addToCartButtons = document.getElementsByClassName('cart-item-button')
  for (const i = 0; i < addToCartButtons.length; i++) {
      const button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }
  document.getElementsByClassName('cart-quantity-input')[0].addEventListener('click', purchaseClicked)
}
// var - while - text before .removeChild & (.firstChild) was cartItems
function purchaseClicked() {
  alert('CFG ticket added to your basket')
  const cartItem = document.getElementsByClassName('cartItem')[0]
  while (cartItem.hasChildNodes()) {
      cartItem.removeChild(cartItem.firstChild)
  }
  updateCartTotal()
}
function removeCartItem(event) {
  const buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}
function quantityChanged(event) {
  const input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}
function addToCartClicked(event) {
  const button = event.target
  const cartItem = button.parentElement.parentElement
  const price = cartItem.getElementsByClassName('cart-item-price')[0].innerText
  addItemToCart(price)
  updateCartTotal()
}
function addItemToCart(price) {
  const cartItem = document.createElement('div')
  cartItems.classList.add('cartItem')
  const cartItems = document.getElementsByClassName('cartItem')[0]
  const cartItems = cartItems.getElementsByClassName('cart-item-price')
  for (const i = 0; i < cartItemPrice.length; i++)
  var cartItemContent = `
  <div class="box">
              <img src="IMAGES/CFG logo 5 attempt.png" />
              <div class="content">
                <div class="cart-item"></div>
                <h3 class="cart-item-title">Adult Day Ticket (16+)</h3>
                <h4 class="cart-item-price">Price: £79</h4>
                <input class="cart-quantity-input" type="number" value="1" />
                <button class="btn btn-primary cart-item-button" type="button" >Add To Cart</button>
                <p class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i><span class="btn2">Delete</span></p>
              </div>
            </div>`
cartItem.innerHTML = cartItemContent
  cartItem.append(cartItem)
  cartItem.getElementsByClassName('btn-area')[0].addEventListener('click', removeCartItem)
  cartItem.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName('cart-item')[0]
  const cartItem = cartItemContainer.getElementsByClassName('cart-item')
  const total = 0
  for (const i = 0; i < cartItem.length; i++) {
      const cartItem = cartItem[i]
      const priceElement = cartItem.getElementsByClassName('cart-item-price')[0]
      const quantityElement = cartItem.getElementsByClassName('cart-quantity-input')[0]
      const price = parseFloat(priceElement.innerText.replace('£', ''))
      const quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total
}