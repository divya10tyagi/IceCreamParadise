// Function to add ice cream to the cart
function addToCart(name, image) {
    // Get the existing cart from localStorage, or create an empty array if no cart exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    const iceCream = { name: name, image: image };
    cart.push(iceCream);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation pop-up
    alert(`${name} has been added to your cart!`);

    // Update the cart status on the page
    updateCartStatus();
}

// Function to update the cart status (e.g., Cart: 3 item(s))
function updateCartStatus() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartStatus = document.getElementById('cart-status');

    if (cart.length > 0) {
        cartStatus.textContent = `Cart: ${cart.length} item(s)`;
    } else {
        cartStatus.textContent = "Cart is empty";
    }
}

// Call the updateCartStatus function on page load to display current cart status
window.onload = function() {
    updateCartStatus();
};