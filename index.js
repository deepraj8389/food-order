
// Global variables
let cart = [];
let currentSection = 'home';
let walletBalance = 500;
let orders = [];

// Restaurant and menu data
const restaurants = {
    'kashi-chaat': {
        name: 'Kashi Chaat Bhandar',
        cuisine: 'Street Food',
        rating: 4.5,
        deliveryTime: '25-30 min',
        location: 'Godowlia',
        menu: [
            {
                id: 1,
                name: 'Aloo Tikki Chaat',
                description: 'Crispy potato patties with tangy chutneys and yogurt',
                price: 60,
                image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
                category: 'Chaat',
                isVeg: true
            },
            {
                id: 2,
                name: 'Pani Puri',
                description: 'Traditional water-filled crispy puris with spiced water',
                price: 40,
                image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
                category: 'Chaat',
                isVeg: true
            },
            {
                id: 3,
                name: 'Bhel Puri',
                description: 'Puffed rice mixed with vegetables and tangy sauces',
                price: 50,
                image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
                category: 'Chaat',
                isVeg: true
            }
        ]
    },
    'thali-house': {
        name: 'Banarasi Thali House',
        cuisine: 'North Indian',
        rating: 4.2,
        deliveryTime: '35-40 min',
        location: 'Assi Ghat',
        menu: [
            {
                id: 4,
                name: 'Banarasi Thali',
                description: 'Complete meal with dal, sabzi, roti, rice, and dessert',
                price: 180,
                image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
                category: 'Main Course',
                isVeg: true
            },
            {
                id: 5,
                name: 'Dal Baati Churma',
                description: 'Traditional Rajasthani dish with lentils and wheat balls',
                price: 160,
                image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
                category: 'Main Course',
                isVeg: true
            },
            {
                id: 6,
                name: 'Paneer Butter Masala',
                description: 'Creamy tomato-based curry with cottage cheese',
                price: 140,
                image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
                category: 'Main Course',
                isVeg: true
            }
        ]
    },
    'ganga-sweets': {
        name: 'Ganga Sweets',
        cuisine: 'Sweets',
        rating: 4.7,
        deliveryTime: '20-25 min',
        location: 'Cantonment',
        menu: [
            {
                id: 7,
                name: 'Rasgulla',
                description: 'Soft cottage cheese balls in sugar syrup',
                price: 120,
                image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
                category: 'Sweets',
                isVeg: true
            },
            {
                id: 8,
                name: 'Gulab Jamun',
                description: 'Deep-fried milk solids in flavored sugar syrup',
                price: 100,
                image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
                category: 'Sweets',
                isVeg: true
            },
            {
                id: 9,
                name: 'Kachori',
                description: 'Crispy fried pastry with spiced filling',
                price: 80,
                image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
                category: 'Snacks',
                isVeg: true
            }
        ]
    },
    'dosa-corner': {
        name: 'Dosa Corner',
        cuisine: 'South Indian',
        rating: 4.3,
        deliveryTime: '30-35 min',
        location: 'BHU',
        menu: [
            {
                id: 10,
                name: 'Masala Dosa',
                description: 'Crispy crepe with spiced potato filling',
                price: 80,
                image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
                category: 'South Indian',
                isVeg: true
            },
            {
                id: 11,
                name: 'Idli Sambhar',
                description: 'Steamed rice cakes with lentil curry',
                price: 60,
                image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
                category: 'South Indian',
                isVeg: true
            },
            {
                id: 12,
                name: 'Uttapam',
                description: 'Thick pancake with vegetables',
                price: 70,
                image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
                category: 'South Indian',
                isVeg: true
            }
        ]
    },
    'chai-more': {
        name: 'Chai & More',
        cuisine: 'Beverages',
        rating: 4.1,
        deliveryTime: '15-20 min',
        location: 'Sarnath',
        menu: [
            {
                id: 13,
                name: 'Masala Chai',
                description: 'Traditional spiced tea with milk and sugar',
                price: 25,
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop',
                category: 'Beverages',
                isVeg: true
            },
            {
                id: 14,
                name: 'Lassi',
                description: 'Traditional yogurt-based drink',
                price: 40,
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop',
                category: 'Beverages',
                isVeg: true
            },
            {
                id: 15,
                name: 'Fresh Lime Soda',
                description: 'Refreshing lime drink with soda',
                price: 35,
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop',
                category: 'Beverages',
                isVeg: true
            }
        ]
    },
    'pizza-paradise': {
        name: 'Pizza Paradise',
        cuisine: 'Italian',
        rating: 4.4,
        deliveryTime: '25-30 min',
        location: 'Cantonment',
        menu: [
            {
                id: 16,
                name: 'Margherita Pizza',
                description: 'Classic pizza with tomato sauce, mozzarella and basil',
                price: 220,
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
                category: 'Pizza',
                isVeg: true
            },
            {
                id: 17,
                name: 'Pepperoni Pizza',
                description: 'Pizza topped with pepperoni and cheese',
                price: 280,
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
                category: 'Pizza',
                isVeg: false
            },
            {
                id: 18,
                name: 'Veggie Supreme',
                description: 'Loaded with fresh vegetables and cheese',
                price: 260,
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
                category: 'Pizza',
                isVeg: true
            }
        ]
    },
    'dragon-wok': {
        name: 'Dragon Wok',
        cuisine: 'Chinese',
        rating: 4.0,
        deliveryTime: '30-35 min',
        location: 'Godowlia',
        menu: [
            {
                id: 19,
                name: 'Veg Hakka Noodles',
                description: 'Stir-fried noodles with vegetables and sauces',
                price: 120,
                image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop',
                category: 'Chinese',
                isVeg: true
            },
            {
                id: 20,
                name: 'Chicken Manchurian',
                description: 'Deep-fried chicken in spicy Manchurian sauce',
                price: 180,
                image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop',
                category: 'Chinese',
                isVeg: false
            },
            {
                id: 21,
                name: 'Veg Fried Rice',
                description: 'Wok-tossed rice with mixed vegetables',
                price: 100,
                image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop',
                category: 'Chinese',
                isVeg: true
            }
        ]
    },
    'biryani-house': {
        name: 'Biryani House',
        cuisine: 'Biryani',
        rating: 4.6,
        deliveryTime: '40-45 min',
        location: 'Assi Ghat',
        menu: [
            {
                id: 22,
                name: 'Chicken Biryani',
                description: 'Aromatic basmati rice with tender chicken pieces',
                price: 220,
                image: 'https://images.unsplash.com/photo-1563379091339-03246963d25a?w=300&h=200&fit=crop',
                category: 'Biryani',
                isVeg: false
            },
            {
                id: 23,
                name: 'Veg Biryani',
                description: 'Fragrant rice with mixed vegetables and spices',
                price: 180,
                image: 'https://images.unsplash.com/photo-1563379091339-03246963d25a?w=300&h=200&fit=crop',
                category: 'Biryani',
                isVeg: true
            },
            {
                id: 24,
                name: 'Mutton Biryani',
                description: 'Premium biryani with succulent mutton pieces',
                price: 280,
                image: 'https://images.unsplash.com/photo-1563379091339-03246963d25a?w=300&h=200&fit=crop',
                category: 'Biryani',
                isVeg: false
            }
        ]
    }
};

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('menu-modal');
const modalContent = document.getElementById('menu-content');
const closeModal = document.querySelector('.close');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const locationSelect = document.getElementById('location-select');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateCartCount();
    updateWalletDisplay();
    loadFromLocalStorage();
});

// Event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Category filtering
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', filterByCategory);
    });
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    locationSelect.addEventListener('change', handleLocationFilter);
    
    // Modal close
    closeModal.addEventListener('click', closeMenuModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeMenuModal();
        }
    });
    
    // Login form
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Navigation handling
function handleNavigation(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href').substring(1);
    showSection(target);
    
    // Close mobile menu if open
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Show specific section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show hero section for home
    if (sectionName === 'home') {
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.categories').style.display = 'block';
        document.querySelector('.restaurants').style.display = 'block';
    } else {
        // Show specific section
        const section = document.getElementById(sectionName);
        if (section) {
            section.style.display = 'block';
            
            // Load cart items if cart section
            if (sectionName === 'cart') {
                loadCartItems();
            }
            if (sectionName === 'orders') {
    loadOrders(); // ✅ Load orders when user navigates to 'My Orders'
}

        }
    }
    
    currentSection = sectionName;
}

// Category filtering
function filterByCategory(event) {
    const category = event.currentTarget.getAttribute('data-category');
    
    // Toggle active state
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Filter restaurants
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
        const cuisine = card.getAttribute('data-cuisine');
        if (category === 'all' || cuisine.includes(category.replace('-', ' '))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('h3').textContent.toLowerCase();
        const cuisine = card.querySelector('.cuisine').textContent.toLowerCase();
        
        if (restaurantName.includes(searchTerm) || cuisine.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Location filtering
function handleLocationFilter() {
    const selectedLocation = locationSelect.value;
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    if (selectedLocation === 'All Varanasi') {
        restaurantCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        restaurantCards.forEach(card => {
            const location = card.querySelector('.location').textContent;
            if (location.includes(selectedLocation)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// View restaurant menu
function viewMenu(restaurantId) {
    const restaurant = restaurants[restaurantId];
    if (!restaurant) return;
    
    let menuHTML = `
        <h2>${restaurant.name}</h2>
        <p class="cuisine">${restaurant.cuisine} • ${restaurant.location}</p>
        <div class="restaurant-details mb-2">
            <span class="rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
            <span class="delivery-time">${restaurant.deliveryTime}</span>
        </div>
        <hr style="margin: 20px 0;">
        <h3>Menu Items</h3>
        <div class="menu-items">
    `;
    
    restaurant.menu.forEach(item => {
        menuHTML += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-info">
                    <h4>${item.name} ${item.isVeg ? '<span style="color: green;">🌿</span>' : '<span style="color: red;">🍖</span>'}</h4>
                    <p>${item.description}</p>
                    <div class="menu-item-price">₹${item.price}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${restaurantId}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
    
    menuHTML += '</div>';
    modalContent.innerHTML = menuHTML;
    modal.style.display = 'block';
}

// Close menu modal
function closeMenuModal() {
    modal.style.display = 'none';
}

// Add item to cart
function addToCart(itemId, restaurantId) {
    const restaurant = restaurants[restaurantId];
    const item = restaurant.menu.find(menuItem => menuItem.id === itemId);
    
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            restaurantName: restaurant.name,
            quantity: 1,
            image: item.image
        });
    }
    
    updateCartCount();
    saveToLocalStorage();
    
    // Show success message
    showNotification('Item added to cart!', 'success');
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Load cart items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
        cartTotalElement.textContent = '0';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.restaurantName}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">₹${itemTotal}</div>
                <button onclick="removeFromCart(${index})" style="background: #dc2626; color: white; border: none; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    Remove
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotalElement.textContent = total;
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    loadCartItems();
    saveToLocalStorage();
    showNotification('Item removed from cart!', 'info');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'wallet') {
        if (walletBalance < orderTotal) {
            showNotification('Insufficient wallet balance!', 'error');
            return;
        }
        
        // Deduct from wallet
        walletBalance -= orderTotal;
        updateWalletDisplay();
        addTransaction('Order Payment', -orderTotal);
    }
    const newOrder = {
    items: [...cart],
    total: orderTotal,
    date: new Date().toLocaleString(),
    status: 'Delivered'
};
orders.unshift(newOrder); // latest on top
saveToLocalStorage();

    showNotification(`Order placed successfully! Total: ₹${orderTotal}`, 'success');
    
    // Clear cart
    cart = [];
    updateCartCount();
    loadCartItems();
    saveToLocalStorage();
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
        showSection('home');
    }, 2000);
}

// Wallet functions
function addMoney() {
    const amount = prompt('Enter amount to add:');
    if (amount && !isNaN(amount) && amount > 0) {
        walletBalance += parseInt(amount);
        updateWalletDisplay();
        addTransaction('Added Money', parseInt(amount));
        showNotification(`₹${amount} added to wallet!`, 'success');
    }
}

function quickAdd(amount) {
    walletBalance += amount;
    updateWalletDisplay();
    addTransaction('Added Money', amount);
    showNotification(`₹${amount} added to wallet!`, 'success');
}

function showTransactions() {
    const transactionHistory = document.getElementById('transaction-history');
    transactionHistory.style.display = transactionHistory.style.display === 'none' ? 'block' : 'none';
}

function updateWalletDisplay() {
    const walletDisplayElements = document.querySelectorAll('#wallet-balance, #wallet-display');
    walletDisplayElements.forEach(element => {
        if (element) element.textContent = walletBalance;
    });
}

function addTransaction(type, amount) {
    const transactionsList = document.getElementById('transactions-list');
    const date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    const transactionClass = amount > 0 ? 'credit' : 'debit';
    const sign = amount > 0 ? '+' : '';
    
    const transactionHTML = `
        <div class="transaction-item">
            <div class="transaction-info">
                <h5>${type}</h5>
                <p>${date}</p>
            </div>
            <div class="transaction-amount ${transactionClass}">${sign}₹${Math.abs(amount)}</div>
        </div>
    `;
    
    transactionsList.insertAdjacentHTML('afterbegin', transactionHTML);
}

// Login/Signup functions
function switchTab(tab) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabButtons[0].classList.add('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabButtons[1].classList.add('active');
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simple validation (in real app, this would be handled by backend)
    if (email && password) {
        showNotification('Login successful! Welcome back!', 'success');
        setTimeout(() => {
            showSection('home');
        }, 1500);
    } else {
        showNotification('Please fill in all fields!', 'error');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const phone = inputs[2].value;
    const password = inputs[3].value;
    const confirmPassword = inputs[4].value;
    
    if (!name || !email || !phone || !password || !confirmPassword) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    showNotification('Account created successfully! Welcome to Varanasi Eats!', 'success');
    setTimeout(() => {
        showSection('home');
    }, 1500);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    
    const colors = {
        success: '#16a34a',
        error: '#dc2626',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Local storage functions
function saveToLocalStorage() {
    localStorage.setItem('varanasi-eats-cart', JSON.stringify(cart));
     localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('varanasi-eats-wallet', walletBalance.toString());
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('varanasi-eats-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    
    const savedWallet = localStorage.getItem('varanasi-eats-wallet');
    if (savedWallet) {
        walletBalance = parseInt(savedWallet);
        updateWalletDisplay();
    }
     const storedCart = localStorage.getItem('cart');
    const storedOrders = localStorage.getItem('orders'); // ✅ Add this line

    if (storedCart) cart = JSON.parse(storedCart);
    if (storedOrders) orders = JSON.parse(storedOrders); // ✅ Add this line
}

// Initialize default view
showSection('home');

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for better UX
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Error handling
window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered successfully');
            })
            .catch(function(registrationError) {
                console.log('ServiceWorker registration failed');
            });
    });
}

function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="text-center">No orders yet.</p>';
        return;
    }

    let ordersHTML = '';
    orders.forEach((order, index) => {
        let itemsHTML = order.items.map(item => `
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 12px;">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
                <div style="flex: 1;">
                    <strong>${item.name}</strong><br>
                    Quantity: ${item.quantity} &nbsp;|&nbsp; ₹${item.price * item.quantity}
                </div>
            </div>
        `).join('');

        ordersHTML += `
            <div class="order-card" style="
                background: white;
                padding: 1.8rem;
                margin-bottom: 2rem;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                transition: 0.3s;
                border-left: 6px solid #16a34a;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h3 style="margin: 0; color: #333;">Order #${index + 1}</h3>
                    <span style="
                        padding: 6px 12px;
                        background: #d1fae5;
                        color: #065f46;
                        font-size: 0.9rem;
                        border-radius: 20px;
                        font-weight: 600;
                    ">${order.status}</span>
                </div>
                ${itemsHTML}
                <hr style="margin: 1rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; color: #555;">
                    <span><strong>Total:</strong> ₹${order.total}</span>
                    <span><strong>Date:</strong> ${order.date}</span>
                </div>
            </div>
        `;
    });

    ordersList.innerHTML = ordersHTML;
}
