/* ============================================================
   Work Page — Template Marketplace Scripts
   ============================================================ */

/* ===== Template data ===== */
/* [file, displayName, genre, price, available] */
const templates = [
  ['melbourne-cafe_1.html',               'Cafe 01',      'cafe',        500, true],
  ['melbourne-cafe_2.html',               'Cafe 02',      'cafe',        500, true],
  ['melbourne-cafe_3.html',               'Cafe 03',      'cafe',        500, true],
  ['melbourne-donuts_1.html',             'Donuts 01',    'bakery',     1000, true],
  ['melbourne-donuts_2.html',             'Donuts 02',    'bakery',     1000, true],
  ['melbourne-restaurant_1_stake.html',   'Steakhouse',   'restaurant', 1000, true],
  ['melbourne-restaurant_2_italian.html', 'Italian',      'restaurant',  500, true],
  ['melbourne-restaurant_3_japanese.html','Japanese',      'restaurant',  500, true],
  ['melbourne-restaurant_4_mexican.html', 'Mexican',      'restaurant', 1000, true],
  ['melbourne-shopify_1_clothing.html',   'Clothing',     'shop',       1000, true],
  ['melbourne-shopify_2_sunglasses.html', 'Sunglasses',   'shop',       1000, true],
  ['melbourne-furniturestore_1.html',     'Furniture',    'shop',       1000, true],
  ['melbourne-hairsalon_1.html',          'Hair Salon',   'salon',      1000, true],
  ['melbourne-outdoor_1.html',            'Outdoor',      'outdoor',    1000, true],
];

const genres = ['all','cafe','restaurant','shop','bakery','salon','outdoor','bar'];
const genreI18nMap = {
  all:'work.filter.all', cafe:'work.filter.cafe', restaurant:'work.filter.restaurant',
  shop:'work.filter.shop', bakery:'work.filter.bakery', salon:'work.filter.salon',
  outdoor:'work.filter.outdoor', bar:'work.filter.bar'
};

/* Build filter chips */
const filtersEl = document.getElementById('filters');
genres.forEach(g => {
  const btn = document.createElement('button');
  btn.dataset.genre = g;
  btn.setAttribute('data-i18n', genreI18nMap[g]);
  btn.textContent = I18N.en[genreI18nMap[g]];
  if(g==='all') btn.classList.add('active');
  btn.addEventListener('click', () => filterBy(g));
  filtersEl.appendChild(btn);
});

let activeGenre = 'all';
function filterBy(genre){
  activeGenre = genre;
  filtersEl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.genre===genre));
  document.querySelectorAll('.tpl-card').forEach(card => {
    card.classList.toggle('hide', genre!=='all' && card.dataset.genre!==genre);
  });
}

/* Build template grid */
const grid = document.getElementById('tplGrid');
const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

templates.forEach((t, i) => {
  const [file, name, genre, price, avail] = t;
  const num = String(i+1).padStart(2,'0');
  const card = document.createElement('article');
  card.className = 'tpl-card';
  card.dataset.genre = genre;
  card.dataset.index = i;
  const thumb = 'img/thumbs/' + file.replace(/\.html$/,'') + '.jpg';
  card.innerHTML = `
    <div class="preview-wrap" onclick="selectTemplate(${i})">
      <img src="${esc(thumb)}" alt="${esc(name)}" loading="lazy" decoding="async" width="720" height="450">
    </div>
    <div class="card-body">
      <span class="num">No ${num} / ${String(templates.length).padStart(2,'0')}</span>
      <h3>${esc(name)}</h3>
      <span class="genre-tag" data-i18n="work.filter.${genre}">${genre}</span>
      <div class="avail">
        <span class="dot${avail?'':' sold'}"></span>
        <span data-i18n="${avail?'work.available':'work.sold'}">${avail?'Available':'Sold'}</span>
        <span style="margin-left:auto;font-family:var(--m);font-size:9px;letter-spacing:.12em;color:color-mix(in srgb, var(--dark) 40%, transparent)">1/1</span>
      </div>
    </div>
    <a href="${esc(file)}" target="_blank" rel="noopener" class="demo-btn" onclick="event.stopPropagation()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      <span data-i18n="work.demo">View demo</span>
    </a>`;
  grid.appendChild(card);
});


/* Click card → scroll to inquiry section. Pre-fill template name in message. */
function selectTemplate(idx){
  const msg = document.querySelector('#contactForm [name="message"]');
  if (msg) {
    const label = `No ${String(idx+1).padStart(2,'0')} — ${templates[idx][1]}`;
    if (!msg.value.includes(label)) {
      msg.value = (msg.value ? msg.value + '\n' : '') + `Template: ${label}`;
    }
  }
  document.getElementById('inquiry').scrollIntoView({behavior:'smooth', block:'start'});
}

/* URL param: ?template=3 → auto-select */
(function(){
  const p = new URLSearchParams(window.location.search);
  const ti = p.get('template');
  if(ti !== null){
    const idx = parseInt(ti,10);
    if(!isNaN(idx) && idx >= 0 && idx < templates.length){
      selectTemplate(idx);
    }
  }
})();
