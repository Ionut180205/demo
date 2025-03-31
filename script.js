// Array of all products with their details
const products = [
    // Sofas (1-4)
    { id: 1, name: 'Luxury Sofa', price: 1299, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 2, name: 'Modern Sofa', price: 999, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 3, name: 'Classic Sofa', price: 1199, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 4, name: 'Sectional Sofa', price: 1599, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    
    // Tables (5-8)
    { id: 5, name: 'Dining Table', price: 899, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 6, name: 'Coffee Table', price: 599, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 7, name: 'Side Table', price: 399, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 8, name: 'Console Table', price: 699, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    
    // Beds (9-12)
    { id: 9, name: 'King Size Bed', price: 1999, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 10, name: 'Queen Size Bed', price: 1799, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 11, name: 'Double Bed', price: 1499, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 12, name: 'Single Bed', price: 999, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    
    // Chairs (13-16)
    { id: 13, name: 'Dining Chair', price: 299, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 14, name: 'Armchair', price: 499, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 15, name: 'Accent Chair', price: 399, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] },
    { id: 16, name: 'Office Chair', price: 599, images: ['images/BlueFlamedTaurus2.jpg', 'images/BlueFlamedTaurus2.jpg'] }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Functions
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.toggle('active');
        // Update cart display when opening the modal
        if (cartModal.classList.contains('active')) {
            updateCartDisplay();
        }
    }
}

function addToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const button = event.target;
    const productId = parseInt(button.getAttribute('data-id'));
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            total += product.price * item.quantity;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${product.name}</div>
                        <div class="cart-item-price">$${product.price}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        cart = cart.filter(item => item.id !== productId);
    } else {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Here you would typically integrate with a payment processor
    alert('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
    updateCartCount();
    localStorage.setItem('cart', JSON.stringify(cart));
    toggleCart();
}

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', () => {
    // Update cart display and count
    updateCartDisplay();
    updateCartCount();

    // Add click handlers to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add click handler for cart icon
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleCart();
        });
    }

    // Add click handler for close cart button
    const closeCartBtn = document.querySelector('.close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleCart();
        });
    }

    // Add click handler for continue shopping button
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleCart();
        });
    }

    // Add click handler for checkout button
    const checkoutBtn = document.querySelector('.checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (nav && window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else if (nav) {
        nav.classList.remove('scrolled');
    }
}); 