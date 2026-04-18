/* =============== I18N =============== */
const I18N = {
  en: {
    'nav.work':'Work','nav.app':'App','nav.social':'Photo','nav.video':'Video','nav.article':'Article','nav.contact':'Contact',
    'kv.status':'Open to work',
    'kv.tag':'Web & Social Media Creator',
    'kv.name':'Kenshin',
    'kv.intro':'Based in Melbourne. Originally from Tokyo.\nI help people grow their business through web and social media contents.',
    'work.title':'Work','work.sub':'I create custom websites for you.\nOr you can buy these templates, and I\'ll customize them to match your style.','work.cta':'See all',
    'app.title':'App','app.name':'Phrame — an app for making your own English phrase notes.','app.desc':'Save phrases you want to remember, add a quick note, and come back to them whenever.','app.cta':'About the app',
    'social.title':'Social','social.sub':'Photos I\'ve taken before.\nI also take on photography work.','social.cta':'Follow on Instagram',
    'video.title':'Social','video.name':'Kenshin | 兼臣','video.desc':'Videos about daily life.','video.cta':'Watch on YouTube',
    'article.title':'Social','article.name':'Kenshin | 兼臣','article.desc':'Notes on my project, language, and everyday things in Japanese.','article.cta':'Read on note',
    'contact.label':'06','contact.heading.sub':'/ Contact','contact.sub':'Available for work. Feel free to reach out.','contact.name':'Name','contact.email':'Email','contact.msg':'Message','contact.send':'Send message',
  },
  jp: {
    'nav.work':'Work','nav.app':'App','nav.social':'Photo','nav.video':'Video','nav.article':'Article','nav.contact':'Contact',
    'kv.status':'ご依頼受付中',
    'kv.tag':'Web & SNSクリエイター',
    'kv.name':'Kenshin',
    'kv.intro':'メルボルン在住。東京出身。\nWebとSNSコンテンツでビジネスの成長をサポートしています。',
    'work.title':'仕事','work.sub':'オリジナルのウェブサイトを制作します。\nまたは以下のテンプレートを購入いただき、あなたのスタイルに合わせてカスタマイズもできます。','work.cta':'すべて見る',
    'app.title':'アプリ','app.name':'Phrame — 自分だけの英語フレーズ帳を作るアプリ。','app.desc':'覚えたいフレーズを保存して、メモを添えて、いつでも見返せる「英語フレーズ学習特化」のアプリです。','app.cta':'アプリついて',
    'social.title':'ソーシャル','social.sub':'これまでに撮った写真を投稿。\n撮影のお仕事もお受けしています。','social.cta':'Instagramを見る',
    'video.title':'ソーシャル','video.name':'Kenshin | 兼臣','video.desc':'自分のアイデアや思考、海外での生活など、Vlogスタイルで動画を投稿。','video.cta':'YouTubeを見る',
    'article.title':'ソーシャル','article.name':'Kenshin | 兼臣','article.desc':'プロジェクト、アイデア、英語、日々のことについてのブログ記事を投稿。','article.cta':'noteを読む',
    'contact.label':'06','contact.heading.sub':'/ お問い合わせ','contact.sub':'お仕事のご依頼はこちらからどうぞ。','contact.name':'お名前','contact.email':'メール','contact.msg':'メッセージ','contact.send':'メッセージを送る',
  },
  es: {
    'nav.work':'Obra','nav.app':'App','nav.social':'Foto','nav.video':'Video','nav.article':'Artículo','nav.contact':'Contacto',
    'kv.status':'Disponible para proyectos',
    'kv.tag':'Creador de Web y Redes Sociales',
    'kv.name':'Kenshin',
    'kv.intro':'Vivo en Melbourne. De Tokio.\nAyudo a hacer crecer negocios a través de contenido web y redes sociales.',
    'work.title':'Obra','work.sub':'Creo sitios web personalizados para ti.\nTambién puedes comprar estas plantillas y las personalizo a tu estilo.','work.cta':'Ver todos',
    'app.title':'App','app.name':'Phrame — una app para crear tus propias notas de frases en inglés.','app.desc':'Guarda frases que quieras recordar, añade una nota rápida y vuelve a ellas cuando quieras.','app.cta':'Sobre la app',
    'social.title':'Social','social.sub':'Fotos que he tomado.\nTambién acepto trabajos de fotografía.','social.cta':'Seguir en Instagram',
    'video.title':'Social','video.name':'Kenshin | 兼臣','video.desc':'Vídeos sobre la vida cotidiana.','video.cta':'Ver en YouTube',
    'article.title':'Social','article.name':'Kenshin | 兼臣','article.desc':'Notas sobre mi proyecto, idiomas y cosas cotidianas en japonés.','article.cta':'Leer en note',
    'contact.label':'06','contact.heading.sub':'/ Contacto','contact.sub':'Disponible para proyectos. No dudes en escribirme.','contact.name':'Nombre','contact.email':'Email','contact.msg':'Mensaje','contact.send':'Enviar mensaje',
  }
};
function setLang(l){
  window.__lang = l;
  try { localStorage.setItem('portfolio_lang', l); } catch(_){}
  document.documentElement.lang = l==='jp'?'ja':(l==='es'?'es':'en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n'),v=I18N[l][k]; if(v!=null) { if(v.includes('\n')) el.innerHTML=v.replace(/\n/g,'<br>'); else el.textContent=v; }
  });
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed', b.dataset.lang===l ? 'true':'false'));
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang((function(){ try { return localStorage.getItem('portfolio_lang'); } catch(_){} return null; })() || 'en');

/* =============== Menu =============== */
const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
function toggleMenu(force){
  const open = force!==undefined ? force : !menuBtn.classList.contains('open');
  menuBtn.classList.toggle('open', open);
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  nav.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden':'';
}
menuBtn.addEventListener('click',()=>toggleMenu());

/* App video: only fetch & play when the section is visible. */
(function(){
  const v = document.getElementById('appVideo'); if (!v) return;
  let loaded = false;
  const load = () => {
    if (loaded) return; loaded = true;
    const s = document.createElement('source');
    s.src = v.dataset.src; s.type = 'video/mp4';
    v.appendChild(s); v.load();
  };
  if (!('IntersectionObserver' in window)){ load(); v.play().catch(()=>{}); return; }
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){ load(); v.play().catch(()=>{}); }
      else v.pause();
    }
  }, {threshold: 0.15, rootMargin: '200px 0px'});
  io.observe(v);
})();
nav.querySelectorAll('[data-close]').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));

/* =============== Build Web marquee (10 cards) =============== */
/* Each entry: [file, display name, description] */
const sites = [
  ['melbourne-cafe_1.html',                 'Cafe 01',      'Melbourne cafe'],
  ['melbourne-cafe_2.html',                 'Cafe 02',      'Melbourne cafe'],
  ['melbourne-cafe_3.html',                 'Cafe 03',      'Melbourne cafe'],
  ['melbourne-donuts_1.html',               'Donuts 01',    'Donut shop'],
  ['melbourne-donuts_2.html',               'Donuts 02',    'Donut shop'],
  ['melbourne-restaurant_1_stake.html',     'Steakhouse',   'Restaurant'],
  ['melbourne-restaurant_2_italian.html',   'Italian',      'Restaurant'],
  ['melbourne-restaurant_3_japanese.html',  'Japanese',     'Restaurant'],
  ['melbourne-restaurant_4_mexican.html',   'Mexican',      'Restaurant'],
  ['melbourne-shopify_1_clothing.html',     'Clothing',     'Shopify store'],
  ['melbourne-shopify_2_sunglasses.html',   'Sunglasses',   'Shopify store'],
  ['melbourne-furniturestore_1.html',       'Furniture',    'Furniture store'],
  ['melbourne-hairsalon_1.html',            'Hair Salon',   'Hair salon'],
  ['melbourne-outdoor_1.html',              'Outdoor',      'Outdoor brand'],
];
const track = document.getElementById('webTrack');
const marquee = track.parentElement;
const loop = [...sites, ...sites];
const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
track.innerHTML = loop.map((s,i)=>`
  <article class="wcard">
    <div class="ph">
      <iframe class="preview" src="${esc(s[0])}" loading="lazy" scrolling="no" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="meta">
      <span class="num">№ ${String((i%sites.length)+1).padStart(2,'0')} / ${String(sites.length).padStart(2,'0')}</span>
      <h3>${esc(s[1])}</h3>
      <p>${esc(s[2])}</p>
    </div>
  </article>`).join('');

/* Auto-scroll + manual swipe/drag/wheel. Seamless loop via duplicated track. */
(function(){
  const SPEED = 28;           // px per second (auto)
  const RESUME_MS = 1600;     // pause duration after manual input
  let half = 0, paused = false, resumeAt = 0, last = performance.now();

  const measure = () => { half = track.scrollWidth / 2; };
  measure();
  window.addEventListener('resize', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  const wrap = () => {
    if (half <= 0) return;
    if (marquee.scrollLeft >= half) marquee.scrollLeft -= half;
    else if (marquee.scrollLeft < 0) marquee.scrollLeft += half;
  };

  const tick = (now) => {
    const dt = Math.min(50, now - last); last = now;
    if (!paused && now >= resumeAt){
      marquee.scrollLeft += SPEED * dt / 1000;
    }
    wrap();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const nudge = () => { resumeAt = performance.now() + RESUME_MS; };
  marquee.addEventListener('wheel', nudge, {passive:true});
  marquee.addEventListener('scroll', () => { wrap(); }, {passive:true});
  marquee.addEventListener('touchstart', () => { paused = true; }, {passive:true});
  marquee.addEventListener('touchend',   () => { paused = false; nudge(); }, {passive:true});

  // Pointer drag (desktop)
  let down=false, sx=0, sl=0;
  marquee.addEventListener('pointerdown', e=>{
    if (e.pointerType==='touch') return;
    down=true; paused=true; sx=e.clientX; sl=marquee.scrollLeft;
    marquee.classList.add('dragging');
    try { marquee.setPointerCapture(e.pointerId); } catch(_){}
  });
  marquee.addEventListener('pointermove', e=>{
    if (!down) return;
    marquee.scrollLeft = sl - (e.clientX - sx);
  });
  const endDrag = e=>{
    if (!down) return;
    down=false; paused=false; nudge();
    marquee.classList.remove('dragging');
    try { marquee.releasePointerCapture(e.pointerId); } catch(_){}
  };
  marquee.addEventListener('pointerup', endDrag);
  marquee.addEventListener('pointercancel', endDrag);
  marquee.addEventListener('pointerleave', endDrag);
})();

/* =============== Photo wall — fixed assignment ===============
   Three columns, each scrolls horizontally with its own speed/direction.
   Order is fixed (set once below). Edit the arrays to re-arrange.
============================================================== */
const COL1 = [
  "img/DSCF5989.jpg","img/DSCF5446.jpg","img/DSCF5416.jpg","img/DSCF5367.jpg",
  "img/DSCF5447.jpg","img/DSCF9406.jpg","img/DSCF9496.jpg"
];
const COL2 = [
  "img/DSCF5991.jpg","img/DSCF5445.jpg","img/DSCF5418.jpg","img/DSCF5073.jpg",
  "img/DSCF9233.jpg","img/DSCF9510.jpg","img/DSCF5988.jpg"
];
const COL3 = [
  "img/DSCF5990.jpg","img/DSCF5444.jpg","img/DSCF5409.jpg","img/DSCF5421.jpg",
  "img/DSCF5987.jpg","img/DSCF5442.jpg"
];
function fill(id, list){
  const el = document.getElementById(id);
  const tiles = list.map(src => `<div class="tile"><img src="${src}" alt="" width="280" height="370" loading="lazy" decoding="async"></div>`).join('');
  el.innerHTML = tiles + tiles; /* duplicate for seamless loop */
}
fill('run1', COL1); fill('run2', COL2); fill('run3', COL3);

/* Pre-decode photo wall images before the section is visible,
   then pause/unpause the CSS animation based on visibility. */
(function(){
  const sec = document.getElementById('social'); if (!sec || !('IntersectionObserver' in window)) return;
  let preloaded = false;

  function preloadImages(){
    if (preloaded) return; preloaded = true;
    sec.querySelectorAll('.tile img').forEach(img => {
      if (img.decode) img.decode().catch(()=>{});
    });
  }

  /* Start preloading when ~600px away */
  const preIo = new IntersectionObserver(([e]) => {
    if (e.isIntersecting){ preloadImages(); preIo.disconnect(); }
  }, {threshold: 0, rootMargin: '600px 0px'});
  preIo.observe(sec);

  /* Pause/unpause animation */
  const io = new IntersectionObserver(([e]) => {
    sec.classList.toggle('paused', !e.isIntersecting);
  }, {threshold: 0, rootMargin: '200px 0px'});
  io.observe(sec);
  sec.classList.add('paused');
})();

/* Unload Work iframes when far from the viewport, restore when approaching.
   Keeps ~30 live embeds from painting & running scripts continuously. */
(function(){
  if (!('IntersectionObserver' in window)) return;
  const frames = document.querySelectorAll('#work iframe.preview');
  frames.forEach(f => { f.dataset.src = f.getAttribute('src'); });
  const io = new IntersectionObserver((entries) => {
    for (const e of entries){
      const f = e.target;
      if (e.isIntersecting){
        if (!f.src || f.src.endsWith('about:blank')) f.src = f.dataset.src;
      } else {
        if (f.src && !f.src.endsWith('about:blank')) f.src = 'about:blank';
      }
    }
  }, {root: null, rootMargin: '300px 400px', threshold: 0});
  frames.forEach(f => io.observe(f));
})();
