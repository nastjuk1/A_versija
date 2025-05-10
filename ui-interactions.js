document.addEventListener("DOMContentLoaded", function () {
  // Filtrs
  const toggleBtn = document.querySelector(".filter-toggle-btn");
  const filterPanel = document.querySelector(".filter-panel");
  const closeFilter = document.querySelector(".close-filter");

  if (toggleBtn && closeFilter && filterPanel) {
    toggleBtn.addEventListener("click", () => filterPanel.classList.add("active"));
    closeFilter.addEventListener("click", () => filterPanel.classList.remove("active"));
  }

  // Products
  const applyFiltersBtn = document.getElementById("apply-filters");
  const categorySelect = document.getElementById("category");
  const sortSelect = document.getElementById("sort");
  const productGrid = document.querySelector(".product-grid");
  const originalProducts = Array.from(document.querySelectorAll(".product-grid > .product")).map(p => p.cloneNode(true));

  if (applyFiltersBtn && categorySelect && sortSelect && originalProducts.length && productGrid) {
    applyFiltersBtn.addEventListener("click", () => {
      const category = categorySelect.value;
      const sort = sortSelect.value;

      let filtered = originalProducts.filter(p => category === "all" || p.dataset.category === category);

      if (sort === "low-high") {
        filtered.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
      } else if (sort === "high-low") {
        filtered.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
      }

      productGrid.innerHTML = "";
      filtered.forEach(p => productGrid.appendChild(p));
    });
  }

  // Sliders
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let current = 0;

  if (slides.length && prevBtn && nextBtn) {
    slides[current].classList.add('active');

    const showSlide = (index) => {
      slides.forEach(s => s.className = 'slide');
      slides[index].classList.add('slide', 'active');
      current = index;
    };

    prevBtn.addEventListener('click', () => showSlide((current - 1 + slides.length) % slides.length));
    nextBtn.addEventListener('click', () => showSlide((current + 1) % slides.length));
  }

  // Meklēšana
  const searchInput = document.querySelector('.search-bar');
  const resultsContainer = document.getElementById('search-results');

  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      resultsContainer.innerHTML = '';

      if (query.length === 0) {
        resultsContainer.classList.remove('visible');
        setTimeout(() => resultsContainer.classList.add('hidden'), 300);
        return;
      }

      const filteredProducts = originalProducts.filter(product =>
        (product.querySelector('.product-name')?.textContent || '').toLowerCase().includes(query) ||
        (product.querySelector('.product-type')?.textContent || '').toLowerCase().includes(query)
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
          <img src="${product.querySelector('img')?.src}" alt="${product.querySelector('.product-name')?.textContent}">
          <div>
            <div><strong>${product.querySelector('.product-name')?.textContent}</strong></div>
            <div>${product.querySelector('.product-type')?.textContent}</div>
            <div>${product.querySelector('.product-price')?.textContent}</div>
          </div>
        `;
        const link = product.querySelector('a')?.href;
        if (link) {
          item.addEventListener('click', () => {
            window.location.href = link;
          });
        }
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
  }

  // Metriki
  document.addEventListener('click', function (event) {
    var element = event.target;
    var description = element.innerText || element.alt || element.title || element.id || 'unknown';

    //Google Analytics
    gtag('event', 'click', {
      'event_category': 'User Interaction',
      'event_label': description,
      'value': 1
    });
  });

  setTimeout(function () {
    gtag('event', 'engaged_10s', {
      'event_category': 'Timing',
      'event_label': 'User stayed 10 seconds'
    });
  }, 10000);
});
