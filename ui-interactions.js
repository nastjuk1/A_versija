// UI: DOMContentLoaded и фильтры
document.addEventListener("DOMContentLoaded", function () {
  // Фильтр
  const toggleBtn = document.querySelector(".filter-toggle-btn");
  const filterPanel = document.querySelector(".filter-panel");
  const closeFilter = document.querySelector(".close-filter");

  if (toggleBtn && closeFilter && filterPanel) {
    toggleBtn.addEventListener("click", () => filterPanel.classList.add("active"));
    closeFilter.addEventListener("click", () => filterPanel.classList.remove("active"));
  }

  // Применение фильтров
  const applyFiltersBtn = document.getElementById("apply-filters");
  const categorySelect = document.getElementById("category");
  const sortSelect = document.getElementById("sort");
  const products = document.querySelectorAll(".product");
  const productGrid = document.querySelector(".product-grid");

  if (applyFiltersBtn && categorySelect && sortSelect && products && productGrid) {
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "loading-spinner";
    loadingSpinner.innerHTML = '<div class="spinner"></div><p>Notiek ielāde...</p>';
    loadingSpinner.style.display = "none";
    productGrid.parentElement.insertBefore(loadingSpinner, productGrid);

    applyFiltersBtn.addEventListener("click", () => {
      const category = categorySelect.value;
      const sort = sortSelect.value;

      loadingSpinner.style.display = "flex";
      productGrid.style.opacity = "0.3";

      setTimeout(() => {
        const filtered = Array.from(products).filter(p => category === "all" || p.dataset.category === category);

        if (sort === "low-high") {
          filtered.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sort === "high-low") {
          filtered.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        }

        productGrid.innerHTML = "";
        filtered.forEach(p => productGrid.appendChild(p));
        loadingSpinner.style.display = "none";
        productGrid.style.opacity = "1";
      }, 500);
    });
  }

  // Слайдер
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let current = 0;

  if (slides.length && prevBtn && nextBtn) {
    slides[current].classList.add('active');
    const showSlide = (next) => {
      slides.forEach(s => s.className = 'slide');
      slides[next].classList.add('slide', 'active');
      current = next;
    };

    prevBtn.addEventListener('click', () => showSlide((current - 1 + slides.length) % slides.length));
    nextBtn.addEventListener('click', () => showSlide((current + 1) % slides.length));
  }
});


const searchInput = document.querySelector('.search-bar');
  const resultsContainer = document.getElementById('search-results');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    if (query.length === 0) {
      resultsContainer.classList.remove('visible');
      setTimeout(() => resultsContainer.classList.add('hidden'), 300);
      return;
    }

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.subtitle.toLowerCase().includes(query)
    );

if (filteredProducts.length === 0) {
  resultsContainer.classList.remove('visible');
  setTimeout(() => resultsContainer.classList.add('hidden'), 300);

  searchInput.classList.add('shake');
  setTimeout(() => searchInput.classList.remove('shake'), 400);

  return;
}

    filteredProducts.forEach(product => {
      const item = document.createElement('div');
      item.classList.add('search-result-item');
      item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <div>
          <div><strong>${product.name}</strong></div>
          <div>${product.subtitle}</div>
          <div>${product.price} €</div>
        </div>
      `;
      item.addEventListener('click', () => {
        window.location.href = `indexproduct1.html?id=${product.id}`;
      });
      resultsContainer.appendChild(item);
    });

    resultsContainer.classList.remove('hidden');
    setTimeout(() => resultsContainer.classList.add('visible'), 10);
  });

  document.addEventListener('click', (e) => {
    if (!document.querySelector('.search-container').contains(e.target)) {
      resultsContainer.classList.remove('visible');
      setTimeout(() => resultsContainer.classList.add('hidden'), 300);
    }
  });

document.addEventListener('click', function(event) {
    var element = event.target;

    var description = element.innerText || element.alt || element.title || element.id || 'unknown';

    // Отправляем событие в Google Analytics
    gtag('event', 'click', {
      'event_category': 'User Interaction',
      'event_label': description,
      'value': 1
    });
});
