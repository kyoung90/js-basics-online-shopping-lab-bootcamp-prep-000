var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  var items = "In your cart, you have ";
  
  if (cart.length > 0){
    
    for(var i = 0; i < cart.length; i++){
      if(i !== cart.length -1){
        items += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      else if(cart.length == 1){
        items += `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else{
        items += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
  }
  else{
    return "Your shopping cart is empty."
  }
  
  return items;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
