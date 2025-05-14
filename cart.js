function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function updateCheckoutButtonState() {
  const checkoutButton = document.querySelector('.checkout-btn');
  if (!checkoutButton) return;

  const cart = getCart();
  checkoutButton.disabled = cart.length === 0;
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  let cart = getCart();
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  saveCart(cart);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cart = getCart();
  const cartCountEl = document.querySelector('.cart-count');
  const cartItemsList = document.querySelector('.cart-items');
  const totalPriceEl = document.getElementById('total-price');
  

  if (cartCountEl) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalCount;
    cartCountEl.classList.toggle("hidden", totalCount === 0);
  }

  if (cartItemsList) {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <img src="${item.img}" class="cart-item-img" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-type">${item.type || ''}</div>
        </div>
        <div class="cart-item-meta">
          <div class="cart-item-price">€${(item.price * item.quantity).toFixed(2)} (${item.quantity} gab.)</div>
          <div class="quantity-buttons">
            <button class="quantity-btn" onclick="changeQuantity('${item.name}', -1)">−</button>
            <button class="quantity-btn" onclick="changeQuantity('${item.name}', 1)">+</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
      total += item.price * item.quantity;
    });

    if (totalPriceEl) {
      totalPriceEl.textContent = total.toFixed(2);
    }

    if (cart.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.className = 'empty-cart-message';
      emptyMessage.innerHTML = `<p style="text-align:center; padding: 20px; color:#888;">Jūsu grozs ir tukšs.</p>`;
      cartItemsList.appendChild(emptyMessage);
    }
  }
  updateCheckoutButtonState();
}

function changeQuantity(productName, amount) {
  let cart = getCart();
  const itemIndex = cart.findIndex(p => p.name === productName);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += amount;

  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart(cart);
  updateCartDisplay();

  if (document.querySelector('.cart-page')) {
    renderCartPageItems();
  }
}

function removeItem(productName) {
  let cart = getCart();
  cart = cart.filter(item => item.name !== productName);
  saveCart(cart);
  location.reload();
}


function addToCartFromElement(productElement) {
  const productImage = productElement.querySelector('.product-img');
  const productImageSrc = productImage?.src;
  const productName = productElement.querySelector('.product-name, .product-title')?.textContent.trim();
  const productType = productElement.querySelector('.product-type, .product-subtitle')?.textContent.trim() || '';
  const productPrice = parseFloat(productElement.querySelector('.product-price')?.textContent.replace(/[^\d.]/g, ''));

  addToCart({ name: productName, type: productType, price: productPrice, img: productImageSrc });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();

  const addToCartButtons = document.querySelectorAll(".cart-icon, .add-to-cart-btn");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productElement = button.closest(".product, .product-detail-info");
      if (!productElement) return;
      addToCartFromElement(productElement);
    });
  });

  if (document.querySelector('.cart-page')) {
    renderCartPageItems();
  }
});

function renderCartPageItems() {
  const cart = getCart();
  const cartItemsList = document.querySelector('.cart-items-list');
  let total = 0;

  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const html = `
      <div class="cart-page-item">
        <img src="${item.img}" class="cart-item-img" alt="Product">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-type">${item.type || ''}</div>
          <div class="cart-item-price">€${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <div class="cart-quantity">
          <button class="quantity-btn" onclick="changeQuantity('${item.name}', -1)">−</button>
          <input type="number" value="${item.quantity}" readonly>
          <button class="quantity-btn" onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>
      </div>
    `;
    cartItemsList.insertAdjacentHTML('beforeend', html);
    total += item.price * item.quantity;
  });

  const summarySubtotal = document.querySelector(".summary-line span:last-child");
  const summaryTotal = document.querySelector(".summary-line.total span:last-child");

  if (summarySubtotal) summarySubtotal.textContent = '€' + total.toFixed(2);
  if (summaryTotal) summaryTotal.textContent = '€' + (total + 2.50).toFixed(2);
}

// Checkout
document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkoutForm');
  const loading = document.getElementById('loading');
  const thankYou = document.getElementById('thankYou');

  if (checkoutForm) { 
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      checkoutForm.classList.add('hidden');
      loading?.classList.remove('hidden');

      setTimeout(() => {
        loading?.classList.add('hidden');
        thankYou?.classList.remove('hidden');

        localStorage.removeItem('cart');
        const cartCountEl = document.querySelector('.cart-count');
        if (cartCountEl) cartCountEl.textContent = '0';
      }, 2000);
    });
  }

  function validateForm() {
    let valid = true;

    const nameInput = document.getElementById('userName');
    const errorName = document.getElementById('errorName');
    const name = nameInput?.value.trim();
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      if (errorName) errorName.textContent = 'Vārdam jāsākas ar lielo burtu, tikai latīņu burti un vismaz 3 burti.';
      nameInput?.classList.add('invalid');
      valid = false;
    } else {
      if (errorName) errorName.textContent = '';
      nameInput?.classList.remove('invalid');
    }

    const emailInput = document.getElementById('userEmail');
    const errorEmail = document.getElementById('errorEmail');
    const email = emailInput?.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (errorEmail) errorEmail.textContent = 'Lūdzu ievadi derīgu e-pastu.';
      emailInput?.classList.add('invalid');
      valid = false;
    } else {
      if (errorEmail) errorEmail.textContent = '';
      emailInput?.classList.remove('invalid');
    }

    const addrInput = document.getElementById('userAddress');
    const errorAddr = document.getElementById('errorAddress');
    const addr = addrInput?.value.trim();
    if (addr.length < 5) {
      if (errorAddr) errorAddr.textContent = 'Adresei jābūt vismaz 5 rakstzīmēm.';
      addrInput?.classList.add('invalid');
      valid = false;
    } else {
      if (errorAddr) errorAddr.textContent = '';
      addrInput?.classList.remove('invalid');
    }

    return valid;
  }
});
