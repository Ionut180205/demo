// Array of all products with their details
const products = [
    {
        id: 1,
        name: "Luxury Sofa",
        price: 1299,
        description: "A stunning luxury sofa that combines comfort with elegant design. Perfect for modern living spaces.",
        specifications: [
            "Premium leather upholstery",
            "Solid wood frame",
            "High-density foam cushions",
            "Dimensions: 220cm x 90cm x 85cm",
            "Weight: 85kg",
            "Color: Black"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 2,
        name: "Modern Sofa",
        price: 999,
        description: "Contemporary design meets comfort in this modern sofa. Ideal for urban living spaces.",
        specifications: [
            "Fabric upholstery",
            "Metal and wood frame",
            "Memory foam cushions",
            "Dimensions: 200cm x 85cm x 80cm",
            "Weight: 75kg",
            "Color: Grey"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 3,
        name: "Classic Sofa",
        price: 1199,
        description: "Timeless elegance in this classic sofa design. Perfect for traditional interiors.",
        specifications: [
            "Premium fabric upholstery",
            "Solid wood frame",
            "Spring coil system",
            "Dimensions: 210cm x 95cm x 90cm",
            "Weight: 90kg",
            "Color: Beige"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 4,
        name: "Sectional Sofa",
        price: 1599,
        description: "Versatile and spacious sectional sofa. Perfect for large living rooms.",
        specifications: [
            "Premium leather upholstery",
            "Modular design",
            "Reclining seats",
            "Dimensions: 300cm x 100cm x 90cm",
            "Weight: 150kg",
            "Color: Brown"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 5,
        name: "Contemporary Sofa",
        price: 1399,
        description: "Modern design with clean lines. Perfect for contemporary spaces.",
        specifications: [
            "Premium fabric upholstery",
            "Metal frame",
            "High-density foam",
            "Dimensions: 230cm x 95cm x 85cm",
            "Weight: 95kg",
            "Color: Navy"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 6,
        name: "Luxury Sofa",
        price: 1799,
        description: "Ultimate luxury and comfort in this premium sofa design.",
        specifications: [
            "Italian leather upholstery",
            "Solid wood frame",
            "Premium foam and springs",
            "Dimensions: 240cm x 100cm x 95cm",
            "Weight: 110kg",
            "Color: White"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 7,
        name: "Dining Table",
        price: 899,
        description: "Elegant dining table perfect for family gatherings.",
        specifications: [
            "Solid wood construction",
            "Seats 6-8 people",
            "Extendable design",
            "Dimensions: 180cm x 90cm x 75cm",
            "Weight: 65kg",
            "Color: Natural Wood"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 8,
        name: "Coffee Table",
        price: 699,
        description: "Modern coffee table with storage space.",
        specifications: [
            "Wood and glass construction",
            "Built-in storage",
            "Tempered glass top",
            "Dimensions: 120cm x 60cm x 45cm",
            "Weight: 25kg",
            "Color: Walnut"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 9,
        name: "Side Table",
        price: 499,
        description: "Versatile side table with modern design.",
        specifications: [
            "Metal and wood construction",
            "Adjustable height",
            "Water-resistant top",
            "Dimensions: 50cm x 50cm x 60cm",
            "Weight: 15kg",
            "Color: Black"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 10,
        name: "Console Table",
        price: 799,
        description: "Stylish console table for entryways and living rooms.",
        specifications: [
            "Solid wood construction",
            "Built-in drawers",
            "Mirror back panel",
            "Dimensions: 150cm x 40cm x 85cm",
            "Weight: 35kg",
            "Color: White"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 11,
        name: "King Size Bed",
        price: 1999,
        description: "Luxurious king size bed with premium materials.",
        specifications: [
            "Solid wood frame",
            "Memory foam mattress",
            "Headboard with storage",
            "Dimensions: 200cm x 180cm x 60cm",
            "Weight: 120kg",
            "Color: Dark Wood"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 12,
        name: "Queen Size Bed",
        price: 1799,
        description: "Comfortable queen size bed with elegant design.",
        specifications: [
            "Metal and wood frame",
            "Premium mattress",
            "Storage drawers",
            "Dimensions: 200cm x 160cm x 55cm",
            "Weight: 100kg",
            "Color: Light Wood"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 13,
        name: "Double Bed",
        price: 1499,
        description: "Perfect double bed for smaller bedrooms.",
        specifications: [
            "Wooden frame",
            "Comfort mattress",
            "Simple headboard",
            "Dimensions: 200cm x 140cm x 50cm",
            "Weight: 80kg",
            "Color: White"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 14,
        name: "Single Bed",
        price: 999,
        description: "Compact single bed with modern design.",
        specifications: [
            "Metal frame",
            "Standard mattress",
            "Built-in storage",
            "Dimensions: 200cm x 90cm x 45cm",
            "Weight: 50kg",
            "Color: Grey"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 15,
        name: "Dining Chair",
        price: 299,
        description: "Elegant dining chair with comfortable design.",
        specifications: [
            "Wooden frame",
            "Upholstered seat",
            "Ergonomic design",
            "Dimensions: 45cm x 50cm x 90cm",
            "Weight: 5kg",
            "Color: Black"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 16,
        name: "Armchair",
        price: 499,
        description: "Comfortable armchair with premium materials.",
        specifications: [
            "Solid wood frame",
            "Premium upholstery",
            "Reclining mechanism",
            "Dimensions: 70cm x 80cm x 100cm",
            "Weight: 25kg",
            "Color: Brown"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 17,
        name: "Accent Chair",
        price: 399,
        description: "Stylish accent chair for any room.",
        specifications: [
            "Metal frame",
            "Fabric upholstery",
            "Modern design",
            "Dimensions: 60cm x 70cm x 85cm",
            "Weight: 15kg",
            "Color: Grey"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    },
    {
        id: 18,
        name: "Office Chair",
        price: 599,
        description: "Ergonomic office chair for maximum comfort.",
        specifications: [
            "Mesh backrest",
            "Adjustable height",
            "Rolling casters",
            "Dimensions: 60cm x 60cm x 120cm",
            "Weight: 20kg",
            "Color: Black"
        ],
        images: [
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg",
            "images/BlueFlamedTaurus2.jpg"
        ]
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

function updateQuantityInput(change) {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        const newValue = currentValue + change;
        if (newValue >= 1) {
            quantityInput.value = newValue;
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
    
    alert('Product added to cart!');
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

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.toggle('active');
    }
}

// Product details functionality
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update product information
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    const productSpecs = document.getElementById('productSpecs');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (mainImage) mainImage.src = product.images[0];
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = `$${product.price}`;
    if (productDescription) productDescription.textContent = product.description;
    
    if (productSpecs) {
        productSpecs.innerHTML = product.specifications
            .map(spec => `<li>${spec}</li>`)
            .join('');
    }
    
    // Update thumbnails
    thumbnails.forEach((thumb, index) => {
        if (product.images[index]) {
            thumb.src = product.images[index];
            thumb.addEventListener('click', () => {
                mainImage.src = product.images[index];
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        }
    });
    
    // Add to cart functionality
    if (addToCartBtn) {
        addToCartBtn.setAttribute('data-id', productId);
        addToCartBtn.addEventListener('click', addToCart);
    }
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
    updateCartDisplay();
    updateCartCount();
}); 