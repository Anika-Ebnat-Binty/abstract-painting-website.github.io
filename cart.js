let cart = [];

// Function to add items to the cart
function addToCart(imageSrc) {
    cart.push(imageSrc); // Save the correct image path
    updateCart();
    // Redirect to Cart page after adding item
    window.location.href = 'cart.html';
}

// Save the cart to localStorage (so it persists when navigating between pages)
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage (when the page is loaded)
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
};
