function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear previous items

    // Loop through the cart and display each item
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <h4>${item.name}</h4>
        `;
        cartContainer.appendChild(itemElement);
    });

    // If the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Call displayCartItems on page load to show items in the cart
window.onload = function() {
    displayCartItems();
};