// Load the cart from localStorage and display the images on the cart page
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    const buyNowButton = document.querySelector('button[onclick="buyNow()"]'); // Select Buy Now button
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        if (cart.length === 0) {
            // If cart is empty
            document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
            buyNowButton.textContent = 'Nothing to buy';
            buyNowButton.disabled = true;
            buyNowButton.style.cursor = 'not-allowed';
            buyNowButton.style.backgroundColor = '#ccc';
        } else {
            displayCartItems(cart); // Display the cart items if not empty
        }
    } else {
        document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
        buyNowButton.textContent = 'Nothing to buy';
        buyNowButton.disabled = true;
        buyNowButton.style.cursor = 'not-allowed';
        buyNowButton.style.backgroundColor = '#ccc';
    }
};

// Function to display the cart items (images) with remove buttons
function displayCartItems(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing content

    cart.forEach((imageSrc, index) => {
        if (imageSrc) {
            const itemContainer = document.createElement('div');
            itemContainer.style.display = 'flex';
            itemContainer.style.alignItems = 'center';
            itemContainer.style.marginBottom = '10px';

            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = "Painting";
            imgElement.style.width = '200px';
            imgElement.style.marginRight = '10px';

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.padding = '5px 10px';
            removeButton.style.backgroundColor = '#ff4d4d';
            removeButton.style.color = 'white';
            removeButton.style.border = 'none';
            removeButton.style.cursor = 'pointer';
            removeButton.onclick = function() {
                removeFromCart(index);
            };

            itemContainer.appendChild(imgElement);
            itemContainer.appendChild(removeButton);
            cartItemsContainer.appendChild(itemContainer);
        }
    });
}

// Function to remove an item from the cart based on its index
function removeFromCart(index) {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        let cart = JSON.parse(savedCart);
        cart.splice(index, 1);  // Remove the item at the specified index
        updateCart(cart);
        displayCartItems(cart); // Update the displayed cart

        // Check if cart is empty and update the Buy Now button
        const buyNowButton = document.querySelector('button[onclick="buyNow()"]');
        if (cart.length === 0) {
            document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
            buyNowButton.textContent = 'Nothing to buy';
            buyNowButton.disabled = true;
            buyNowButton.style.cursor = 'not-allowed';
            buyNowButton.style.backgroundColor = '#ccc';
        }
    }
}

// Function to update the cart in localStorage after an item is removed
function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to redirect to the payment methods page when "Buy Now" is clicked
function buyNow() {
    window.location.href = 'payment-methods.html';  // Redirect to Payment Methods page
}
