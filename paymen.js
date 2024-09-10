// Load the cart from localStorage and display it on the payment page
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        displayCartItems(cart);
    } else {
        document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
    }
};

// Function to display the cart items and calculate the total price
function displayCartItems(cart) {
    let total = 0;
    const cartItemsContainer = document.getElementById('cart-items');

    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${total}`;
}

// Redirect to the payment methods page when "Proceed to Payment" is clicked
function processPayment() {
    window.location.href = 'payment-methods.html';  // Redirect to Payment Methods page
}
