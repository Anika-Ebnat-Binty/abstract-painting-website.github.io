// Cart array to store items
let cart = [];

// Function to add items to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(productName + " added to cart!");
}

// Function to display cart items and total price
window.onload = function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (cartItemsContainer && cart.length > 0) {
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });
        totalPriceElement.textContent = "Total: $" + total;
    } else if (cartItemsContainer) {
        cartItemsContainer.textContent = "Your cart is empty.";
    }
}

// Dummy checkout function
function checkout() {
    alert('Proceeding to checkout...');
}
