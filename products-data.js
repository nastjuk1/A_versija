const products = [
  {
    id: "ziedu-sapnis",
    name: "Ziedu Sapnis",
    subtitle: "Aromātiskā svece",
    price: "14.90",
    description: "Ienirstiet ziedošā pļavā, kur smaržas vijās ar vakara gaismu un katrs sveces liesmiņas mirklis piepilda telpu ar maigu ziedu dvesmu. \"Ziedu Sapnis\" ir ne tikai svece – tā ir noskaņa, kas ienes sirdsmieru, maigumu un dabas tuvumu jūsu mājās. Ideāla romantiskiem vakariem, meditācijai vai vienkārši kā mājīga rotājuma akcents. Roku darbs no dabīga vaska ar izsmalcinātu dizainu – īsts mākslas darbs ikdienai.",
    details: [
      "• Roku darbs ar dabīgiem aromātiem",
      "• Degšanas ilgums: ~40 stundas",
      "• Iesaiņota elegantā dāvanu kastītē"
    ],
    images: [
      "images/product1/ChatGPT_1.png",
      "images/product1/ChatGPT Image 2025. g. 21. apr. 17_20_40.png",
      "images/product1/ChatGPT Image 2025. g. 21. apr. 17_20_45.png"
    ]
  },
 {
    id: "juras-miers",
    name: "Jūras Miers",
    subtitle: "Ziepes",
    price: "7.50",
    description: "Tās nav tikai ziepes – tā ir mazgāšanās pieredze, kas atgādina jūras vēju, dzidru ūdeni un smalku sāļu garšu uz lūpām. Jūras Miers apvieno jūras sāls minerālus ar dabīgām eļļām, sniedzot ādai tik nepieciešamo līdzsvaru un svaiguma sajūtu. Katrs mazgāšanās brīdis kļūst par rituālu, kurā daba attīra gan ķermeni, gan prātu.",
    details: [
      "• Ar jūras minerāliem un ēteriskajām eļļām",
      "• Maigi attīra un baro ādu",
      "• 100% dabīgs sastāvs"
    ],
    images: [
      "images/product2/ChatGPT Image 2025. g. 21. apr. 17_25_41.png",
      "images/product2/ChatGPT Image 2025. g. 21. apr. 17_28_50.png",
      "images/product2/ChatGPT Image 2025. g. 21. apr. 17_29_45.png"
    ]

  },
{
    id: "rita-rasas",
    name: "Rīta Rasas",
    subtitle: "Micelārais ūdens",
    price: "11.20",
    description: "Rīta rasas pieskāriens – svaigs, veldzējošs, gandrīz neredzams, bet jūtams ar katru poru. Šis micelārais ūdens ar maigu augu ekstraktu formulu sniedz jūsu ādai elpu. Tas saudzīgi noņem netīrumus un kosmētiku, atstājot ādu gaišu, gludu un dzīvīgu. Piemērots ikvienai ādai – it īpaši jutīgai un prasīgai.",
    details: [
      "• Nesatur alkoholu un parabēnus",
      "• Piemērots jutīgai ādai",
      "• Ar augu ekstraktiem"
    ],
        images: [
      "images/product3/ChatGPT Image 2025. g. 21. apr. 17_33_36.png",
      "images/product3/ChatGPT Image 2025. g. 21. apr. 17_40_00.png",
      "images/product3/ChatGPT Image 2025. g. 21. apr. 17_32_18.png"
    ]
  },
   {
    id: "siltais-skaviens",
    name: "Siltais Skāviens",
    subtitle: "Lūpu balzams",
    price: "5.60",
    description: "Kā siltas rokas ziemas salā – šis lūpu balzams sniedz maigumu, kas saglabājas visu dienu. Šī sviests, medus un dabīgie vaski veido aizsargbarjeru, kas ne tikai mitrina, bet arī pasargā no vēja, aukstuma un sausuma. Elegants un kompakts, lai vienmēr būtu pie rokas, kad vajadzīgs maigums.",
    details: [
      "• Intensīva mitrināšana un kopšana",
      "• Dabiski vaski un medus",
      "• Kompakts un ērts iepakojums"
    ],
            images: [
      "images/product4/ChatGPT Image 2025. g. 21. apr. 17_50_48.png",
      "images/product4/ChatGPT Image 2025. g. 21. apr. 18_07_04.png",
      "images/product4/ChatGPT Image 2025. g. 21. apr. 18_08_22.png"
    ]
  },
  {
    id: "samtu-darzs",
    name: "Samtu Dārzs",
    subtitle: "Sejas krēms",
    price: "7.80",
    description: "Iedomājieties ziedošu lavandu dārzu, kur katrs elpas vilciens piepilda jūs ar mieru un harmoniju. Samtu Dārzs ir sejas krēms, kas apvieno bagātīgu mitrināšanu ar nomierinošu efektu. Lavandas ekstrakts mazina spriedzi, bet A vitamīns veicina ādas atjaunošanos un veselīgu mirdzumu. Tīrs maigums jūsu sejas ādai, piemērots ikvienai.",
    details: [
      "• Mitrina un nomierina",
      "• Piemērots visiem ādas tipiem",
      "• Dermatoloģiski pārbaudīts"
    ],
            images: [
      "images/product5/ChatGPT Image 2025. g. 21. apr. 18_13_32.png",
      "images/product5/ChatGPT Image 2025. g. 21. apr. 18_17_00.png",
      "images/product5/ChatGPT Image 2025. g. 21. apr. 18_37_39.png"
    ]
  },
  {
    id: "miera-vilnis",
    name: "Miera Vilnis",
    subtitle: "Aromātiskā svece",
    price: "9.40",
    description: "Šī svece ir kā kluss vilnis, kas pārklāj dienas stresu un ienes mieru. Lavanda un piparmētra veido harmonisku aromātu, kas palīdz atslābināties, koncentrēties vai iemigt. Izgatavota no dabīga sojas vaska, tā deg ilgi un vienmērīgi, ienesot telpā gaismu un labsajūtu. Lieliski piemērota vakara rituāliem un pašaprūpei.",
    details: [
      "• Degšanas ilgums: ~30 stundas",
      "• Dabīgs sojas vasks",
      "• Palīdz mazināt stresu"
    ],
            images: [
      "images/product6/ChatGPT Image 2025. g. 21. apr. 18_52_12.png",
      "images/product6/ChatGPT Image 2025. g. 21. apr. 18_53_51.png",
      "images/product6/ChatGPT Image 2025. g. 21. apr. 18_57_30.png"
    ]
  },
  {
    id: "saules-glasts",
    name: "Saules Glāsts",
    subtitle: "Ziepes",
    price: "4.80",
    description: "Sajūta, kad pirmie saules stari apskauj ādu – siltums, prieks un vieglums. Saules Glāsts ziepes apvieno apelsīnu enerģiju ar medus maigumu, piešķirot ādai svaigumu un mirdzumu. Ziedlapiņu pīlings papildina šo pieredzi ar maigu masāžu un attīrīšanu. Patīkami katru rītu un vakaru.",
    details: [
      "• Citrusaugļu un medus aromāts",
      "• Maigs pīlings ar ziedlapiņām",
      "• Piešķir ādai mirdzumu"
    ],
            images: [
      "images/product7/ChatGPT Image 2025. g. 21. apr. 20_15_59.png",
      "images/product7/ChatGPT Image 2025. g. 21. apr. 20_17_10.png",
      "images/product7/ChatGPT Image 2025. g. 21. apr. 20_19_03.png"
    ]
  },
  {
    id: "tiruma-rasa",
    name: "Tīruma Rasa",
    subtitle: "Micelārais ūdens",
    price: "6.90",
    description: "Kā veldzējoša rasa uz pļavas zāles – šis ūdens noņem netīrumus un dekoratīvo kosmētiku, vienlaikus nomierinot ādu ar kumelītēm un alveju. Tas ir kā dabisks glāsts ādai – bez smaržvielām, bez liekām piedevām, tikai ar maigumu un mieru. Eko sertifikāts apliecina: tas ir labs jums un dabai.",
    details: [
      "• Nomierina un mitrina ādu",
      "• Bez smaržvielām",
      "• Eko sertificēts produkts"
    ],
            images: [
      "images/product8/ChatGPT Image 2025. g. 21. apr. 20_22_27.png",
      "images/product8/ChatGPT Image 2025. g. 21. apr. 20_24_07.png",
      "images/product8/ChatGPT Image 2025. g. 21. apr. 20_30_49.png"
    ]
  },
  {
    id: "ogu-skupsts",
    name: "Ogu Skūpsts",
    subtitle: "Lūpu balzams",
    price: "5.40",
    description: "Domājat par vasaru, kad pirkstos krāsojas meža ogas un gaiss ir pilns ar saldu smaržu? Tieši šo sajūtu iemieso Ogu Skūpsts. Avenes, upenes, meža ogas apvienotas barojošā formulā, kas sniedz vieglu toni, spīdumu un veselīgu izskatu. Dabīgs un vegānisks – skūpsts, kas rūpējas.",
    details: [
      "• Ar ogu ekstraktiem",
      "• Piešķir vieglu toni",
      "• Vegānisks sastāvs"
    ],
            images: [
      "images/product9/ChatGPT Image 2025. g. 21. apr. 20_38_56.png",
      "images/product9/ChatGPT Image 2025. g. 21. apr. 20_41_35.png",
      "images/product9/ChatGPT Image 2025. g. 21. apr. 20_43_07.png"
    ]
  },
  {
    id: "rita-saule",
    name: "Rīta Saule",
    subtitle: "Sejas krēms",
    price: "6.50",
    description: "Dienas sākums sākas ar svaigumu. Šis krēms ir kā glāze apelsīnu sulas jūsu ādai – ar C vitamīnu un zaļās tējas ekstraktu tas tonizē, aizsargā un piešķir starojumu. Viegla tekstūra, bez kaitīgām vielām – piemērots visiem, kuri vēlas pamosties ar starojošu ādu.",
    details: [
      "• Ideāli rīta lietošanai",
      "• Bagātināts ar antioksidantiem",
      "• Bez parabēniem un sulfātiem"
    ],
            images: [
      "images/product10/ChatGPT Image 2025. g. 21. apr. 20_45_22.png",
      "images/product10/ChatGPT Image 2025. g. 21. apr. 20_52_09.png",
      "images/product10/ChatGPT Image 2025. g. 21. apr. 20_54_21.png"
    ]
  }
];

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = products.find(p => p.id === productId);

if (product) {
  document.title = `${product.name} – Veikaliņš`;
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-subtitle').textContent = product.subtitle;
  document.getElementById('product-price').textContent = `€${product.price}`;
  document.getElementById('product-description').textContent = product.description;

  const list = document.getElementById('product-details-list');
  list.innerHTML = "";
  product.details.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = detail;
    list.appendChild(li);
  });

  document.getElementById('main-image').src = product.images[0];
  document.getElementById('main-image').alt = product.name;

  const thumbRow = document.getElementById('thumbnail-row');
  thumbRow.innerHTML = "";
  product.images.forEach((img, idx) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `preview ${idx + 1}`;
    thumb.className = `thumbnail${idx === 0 ? ' active-thumb' : ''}`;
    thumb.dataset.src = img;
    thumb.addEventListener('click', () => {
      document.getElementById('main-image').src = img;
      document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');
    });
    thumbRow.appendChild(thumb);
  });
} else {
  document.querySelector('.product-detail-container').innerHTML = "<p>Produkts nav atrasts.</p>";
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {

      const name = document.getElementById("product-title")?.textContent.trim();
      const type = document.getElementById("product-subtitle")?.textContent.trim();
      const priceText = document.getElementById("product-price")?.textContent;
      const img = document.getElementById("main-image")?.src;

      const price = parseFloat(priceText?.replace(/[^\d.]/g, ''));

      if (!name || isNaN(price)) {
        console.error("Neizdevās iegūt informāciju par produktu.");
        return;
      }

      const product = {
        name,
        type,
        price,
        img,
        quantity: 1
      };

      addToCart(product);
    });
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-bar");
  const resultsContainer = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      resultsContainer.innerHTML = "";
      resultsContainer.classList.add("hidden");
      return;
    }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div class="search-result-item">Nekas netika atrasts.</div>`;
      resultsContainer.classList.remove("hidden");
      return;
    }

    resultsContainer.innerHTML = matches
      .map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" />
          <div>
            <div><strong>${p.name}</strong></div>
            <div style="font-size: 0.9em; color: gray;">${p.subtitle}</div>
            <div style="color: #333;">€${p.price}</div>
          </div>
        </div>
      `)
      .join("");

    resultsContainer.classList.remove("hidden");
  });

  // Переход по клику
  document.getElementById("search-results").addEventListener("click", (e) => {
    const item = e.target.closest(".search-result-item");
    if (!item) return;

    const id = item.dataset.id;
    if (id) {
      window.location.href = `indexproduct1.html?id=${id}`;
    }
  });

  // Скрывать, если клик вне
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      resultsContainer.classList.add("hidden");
    }
  });
});

