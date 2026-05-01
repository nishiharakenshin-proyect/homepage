/* ============================================================
   Portfolio — Shared JS
   i18n, navigation, and utilities for sub-pages
   ============================================================ */

/* ---------- I18N ---------- */
const I18N = {
  en: {
    'nav.work':'Work','nav.app':'App','nav.social':'Photo','nav.video':'Video','nav.article':'Article','nav.contact':'Contact',
    'back':'Back',
    /* Work page */
    'work.title':'Templates',
    'work.sub':'Browse website templates. Pick one and I\'ll customize it to match your brand.\nOr request a fully custom site from scratch.',
    'work.filter.all':'All','work.filter.cafe':'Cafe','work.filter.restaurant':'Restaurant','work.filter.shop':'Shop','work.filter.salon':'Salon','work.filter.outdoor':'Outdoor','work.filter.bakery':'Bakery','work.filter.bar':'Bar',
    'work.available':'Available','work.sold':'Sold','work.demo':'View demo',
    /* Flow */
    'work.flow.s1.title':'Inquire','work.flow.s1.desc':'Fill out the form below. Choose a template or request a custom build.',
    'work.flow.s2.title':'Hearing','work.flow.s2.desc':'We\'ll discuss your brand, content, images, and any custom requirements.',
    'work.flow.s3.title':'Build','work.flow.s3.desc':'I\'ll build and customize your site. You\'ll get a preview link to review.',
    'work.flow.s4.title':'Deliver','work.flow.s4.desc':'Final adjustments, then your site goes live.',
    /* Notes */
    'work.notes.title':'Please note',
    'work.notes.ai':'Some images on these demo sites are AI-generated.',
    'work.notes.photo':'Photography is available as a separate service (currently Melbourne only). Additional fees apply.',
    'work.notes.currency':'All prices are listed in Australian Dollars (AUD).',
    'work.notes.price':'The listed price covers template customization. Domain, hosting, and other ongoing site maintenance costs are billed separately on a monthly basis.',
    'work.notes.detail':'Details such as branding, pages, and functionality will be discussed after your initial inquiry.',
    /* Inquiry form */
    'work.inquiry.title':'Inquiries',
    'work.inquiry.sub2':'Select a template or request a custom site.',
    'work.inquiry.select':'Select type','work.inquiry.opt.custom':'Custom site from scratch',
    'work.inquiry.images':'Images',
    'work.inquiry.img.own':'I\'ll prepare my own','work.inquiry.img.photo':'Request photography',
    'work.inquiry.img.existing':'Use my existing images','work.inquiry.img.ai':'AI-adjusted images','work.inquiry.img.none':'No images needed',
    'work.inquiry.timeline':'Timeline',
    'work.inquiry.tl.urgent':'Urgent','work.inquiry.tl.1m':'Within 1 month','work.inquiry.tl.flex':'Flexible',
    'work.inquiry.name':'Name','work.inquiry.email':'Email','work.inquiry.msg':'Message','work.inquiry.send':'Send inquiry',
    /* App page */
    'app.hero.tag':'AI Phrase Search App',
    'app.hero.name':'Phramo',
    'app.hero.desc':'Instantly search and save the phrases you want to remember,\nthen review them anytime — an app built for learning English phrases.',
    'app.coming':'Coming soon...',
    'app.coming.short':'Coming soon',
    'app.web.small':'Try it now',
    'app.web.big':'WEB version',
    'app.section.how':'How it works',
    'app.how1.title':'Search a phrase','app.how1.desc':'Type what you want to say in English. No need to write "translate to English" — just search naturally.',
    'app.how2.title':'AI answers instantly','app.how2.desc':'AI returns native-level expressions, example sentences, formality levels, and context — all in one view.',
    'app.how3.title':'Auto-saved','app.how3.desc':'Every phrase you search is automatically saved. No extra steps — your phrasebook grows on its own.',
    'app.how4.title':'Your phrasebook','app.how4.desc':'Organize by category, review anytime, and quiz yourself. A personal phrasebook that only gets better.',
    'app.section.features':'Features',
    'app.feat1.title':'AI-Powered Answers','app.feat1.desc':'Get native-level expressions, example sentences, and usage context — powered by AI, delivered in seconds.',
    'app.feat2.title':'15 Languages','app.feat2.desc':'Search in Japanese, Spanish, Chinese, Korean, and 11 more languages. AI responds in your native language.',
    'app.feat3.title':'Formality Meter','app.feat3.desc':'See whether a phrase is casual, neutral, or formal — so you always use the right tone.',
    'app.feat4.title':'Smart Quiz','app.feat4.desc':'Test yourself with spaced-repetition quizzes built from your own saved phrases. Learn what matters to you.',
    'app.feat5.title':'Diary Correction','app.feat5.desc':'Write a short diary entry in English. AI corrects your grammar and suggests more natural expressions.',
    'app.feat6.title':'Categories','app.feat6.desc':'Organize saved phrases into custom categories — travel, work, daily life, or anything you want.',
    'app.section.compare':'Why Phramo?',
    'app.compare.sub':'How Phramo is different from what you already use.',
    'app.compare1.title':'No extra typing','app.compare1.desc':'No need to write "translate __ to English" every time. Just search your phrase — done. No digging through old chat threads either.',
    'app.compare2.title':'Your real phrases','app.compare2.desc':'Learn phrases you actually want to use, not a fixed curriculum. Your phrasebook reflects your life, not someone else\'s lesson plan.',
    'app.compare3.title':'AI does the work','app.compare3.desc':'No manual flashcard creation. Search a phrase and AI generates everything — expressions, examples, formality. Quiz-ready automatically.',
    'app.cta.line1':'Search. Save.','app.cta.line2':'Your phrasebook.','app.cta.desc':'Free to download. No sign-up required.\nSupports 15 languages.',
    /* Contact (shared) */
    'contact.label':'06','contact.heading.sub':'/ Contact',
    'contact.sub':'Available for work. Feel free to reach out.',
    'contact.name':'Name','contact.email':'Email','contact.msg':'Message','contact.send':'Send message',
  },
  jp: {
    'nav.work':'Work','nav.app':'App','nav.social':'Photo','nav.video':'Video','nav.article':'Article','nav.contact':'Contact',
    'back':'戻る',
    /* Work page */
    'work.title':'Templates',
    'work.sub':'ウェブサイトのテンプレートをご覧ください。お選びいただければ、あなたのブランドに合わせてカスタマイズします。\nゼロからのオリジナル制作もお受けしています。',
    'work.filter.all':'All','work.filter.cafe':'Cafe','work.filter.restaurant':'Restaurant','work.filter.shop':'Shop','work.filter.salon':'Salon','work.filter.outdoor':'Outdoor','work.filter.bakery':'Bakery','work.filter.bar':'Bar',
    'work.available':'Available','work.sold':'Sold','work.demo':'View demo',
    /* Flow */
    'work.flow.s1.title':'Inquire','work.flow.s1.desc':'下のフォームからご連絡ください。テンプレートの選択またはオリジナル制作をお選びいただけます。',
    'work.flow.s2.title':'Hearing','work.flow.s2.desc':'ブランド、コンテンツ、画像、ご要望などを詳しくお伺いします。',
    'work.flow.s3.title':'Build','work.flow.s3.desc':'サイトを制作・カスタマイズします。プレビューリンクで確認いただけます。',
    'work.flow.s4.title':'Deliver','work.flow.s4.desc':'最終調整後、サイトを公開します。',
    /* Notes */
    'work.notes.title':'Please note',
    'work.notes.ai':'デモサイトの画像にはAIで生成したものも含まれています。',
    'work.notes.photo':'撮影は別途サービスとして承ります（現在メルボルン限定）。追加費用がかかります。',
    'work.notes.currency':'表示価格はすべてオーストラリアドル（AUD）です。',
    'work.notes.price':'表示価格はテンプレートカスタマイズの基本料金です。ドメインやサーバーなど、サイトを維持・管理するために別途月額費用がかかります。',
    'work.notes.detail':'ブランディング、ページ構成、機能などの詳細はお問い合わせ後にご相談させていただきます。',
    /* Inquiry form */
    'work.inquiry.title':'Inquiries',
    'work.inquiry.sub2':'テンプレートを選ぶか、オリジナルサイトをご依頼ください。',
    'work.inquiry.select':'選択タイプ','work.inquiry.opt.custom':'オリジナルサイト制作',
    'work.inquiry.images':'画像について',
    'work.inquiry.img.own':'自分で用意する','work.inquiry.img.photo':'撮影を依頼する',
    'work.inquiry.img.existing':'既存の画像を使う','work.inquiry.img.ai':'AI画像で調整','work.inquiry.img.none':'画像は不要',
    'work.inquiry.timeline':'ご希望の納期',
    'work.inquiry.tl.urgent':'急ぎ','work.inquiry.tl.1m':'1ヶ月以内','work.inquiry.tl.flex':'特になし',
    'work.inquiry.name':'お名前','work.inquiry.email':'メール','work.inquiry.msg':'メッセージ','work.inquiry.send':'お問い合わせを送信',
    /* App page */
    'app.hero.tag':'AI Phrase Search App',
    'app.hero.name':'Phramo',
    'app.hero.desc':'覚えたいフレーズをすぐに検索・保存して、\nいつでも見返せる「英語フレーズ学習特化」のアプリです。',
    'app.coming':'Coming soon...',
    'app.coming.short':'近日公開',
    'app.web.small':'今すぐ試す',
    'app.web.big':'WEB 版',
    'app.section.how':'How it works',
    'app.how1.title':'フレーズを検索','app.how1.desc':'英語で言いたいことをそのまま入力。「〜を英語で」と書く必要はありません。',
    'app.how2.title':'AIが即回答','app.how2.desc':'ネイティブ表現、例文、フォーマリティ、使い方 — AIがまとめて即座に返します。',
    'app.how3.title':'自動保存','app.how3.desc':'検索したフレーズは自動的に保存。余計な操作なしで、フレーズ帳が勝手に育ちます。',
    'app.how4.title':'自分だけのフレーズ帳','app.how4.desc':'カテゴリで整理、いつでも復習、クイズで定着。使えば使うほど良くなるフレーズ帳。',
    'app.section.features':'Features',
    'app.feat1.title':'AI回答','app.feat1.desc':'ネイティブ表現、例文、使い方をAIが数秒で返します。',
    'app.feat2.title':'15言語対応','app.feat2.desc':'日本語、スペイン語、中国語、韓国語など15言語で検索可能。AIがあなたの母語で回答。',
    'app.feat3.title':'フォーマリティ','app.feat3.desc':'カジュアル・普通・フォーマル — フレーズの丁寧さが一目でわかります。',
    'app.feat4.title':'スマートクイズ','app.feat4.desc':'保存したフレーズから自動生成されるクイズ。間隔反復で効率的に定着。',
    'app.feat5.title':'日記添削','app.feat5.desc':'英語で短い日記を書くと、AIが文法を修正し、より自然な表現を提案します。',
    'app.feat6.title':'カテゴリ管理','app.feat6.desc':'旅行、仕事、日常など、自分だけのカテゴリでフレーズを整理。',
    'app.section.compare':'Why Phramo?',
    'app.compare.sub':'今使っているツールとの違い。',
    'app.compare1.title':'余計な入力は不要','app.compare1.desc':'毎回「〜を英語で翻訳して」と入力する手間なし。フレーズを検索するだけ。過去のチャットを探す必要もありません。',
    'app.compare2.title':'自分のフレーズで学ぶ','app.compare2.desc':'決められたカリキュラムではなく、自分が本当に使いたいフレーズで学習。あなたの生活に合ったフレーズ帳。',
    'app.compare3.title':'AIが全部やってくれる','app.compare3.desc':'フラッシュカードを手動で作る必要なし。検索するだけでAIが表現・例文・フォーマリティを生成。すぐにクイズにも対応。',
    'app.cta.line1':'Search. Save.','app.cta.line2':'Your phrasebook.','app.cta.desc':'無料ダウンロード。アカウント登録不要。\n15言語対応。',
    /* Contact */
    'contact.label':'06','contact.heading.sub':'/ お問い合わせ',
    'contact.sub':'お仕事のご依頼、お気軽にどうぞ。',
    'contact.name':'お名前','contact.email':'メール','contact.msg':'メッセージ','contact.send':'メッセージを送る',
  },
  es: {
    'nav.work':'Obra','nav.app':'App','nav.social':'Foto','nav.video':'Video','nav.article':'Artículo','nav.contact':'Contacto',
    'back':'Volver',
    /* Work page */
    'work.title':'Templates',
    'work.sub':'Explora las plantillas de sitios web. Elige una y la personalizo para tu marca.\nTambién puedes pedir un sitio completamente a medida.',
    'work.filter.all':'Todos','work.filter.cafe':'Café','work.filter.restaurant':'Restaurante','work.filter.shop':'Tienda','work.filter.salon':'Salón','work.filter.outdoor':'Outdoor','work.filter.bakery':'Panadería','work.filter.bar':'Bar',
    'work.available':'Disponible','work.sold':'Vendido','work.demo':'Ver demo',
    /* Flow */
    'work.flow.s1.title':'Consultar','work.flow.s1.desc':'Completa el formulario. Elige una plantilla o solicita un sitio a medida.',
    'work.flow.s2.title':'Reunión','work.flow.s2.desc':'Hablaremos sobre tu marca, contenido, imágenes y requisitos.',
    'work.flow.s3.title':'Desarrollo','work.flow.s3.desc':'Construyo y personalizo tu sitio. Recibirás un enlace de vista previa.',
    'work.flow.s4.title':'Entrega','work.flow.s4.desc':'Ajustes finales y tu sitio sale en vivo.',
    /* Notes */
    'work.notes.title':'Ten en cuenta',
    'work.notes.ai':'Algunas imágenes de estos sitios demo son generadas por IA.',
    'work.notes.photo':'La fotografía está disponible como servicio adicional (actualmente solo en Melbourne). Tiene costo aparte.',
    'work.notes.currency':'Todos los precios están en dólares australianos (AUD).',
    'work.notes.price':'El precio indicado cubre la personalización de la plantilla. El dominio, hosting y otros costos de mantenimiento del sitio se cobran por separado de forma mensual.',
    'work.notes.detail':'Detalles como branding, páginas y funcionalidad se discutirán después de tu consulta inicial.',
    /* Inquiry form */
    'work.inquiry.title':'Inquiries',
    'work.inquiry.sub2':'Selecciona una plantilla o solicita un sitio a medida.',
    'work.inquiry.select':'Tipo de selección','work.inquiry.opt.custom':'Sitio a medida desde cero',
    'work.inquiry.images':'Imágenes',
    'work.inquiry.img.own':'Preparo las mías','work.inquiry.img.photo':'Solicitar fotografía',
    'work.inquiry.img.existing':'Usar mis imágenes existentes','work.inquiry.img.ai':'Imágenes ajustadas con IA','work.inquiry.img.none':'No necesito imágenes',
    'work.inquiry.timeline':'Plazo',
    'work.inquiry.tl.urgent':'Urgente','work.inquiry.tl.1m':'Dentro de 1 mes','work.inquiry.tl.flex':'Flexible',
    'work.inquiry.name':'Nombre','work.inquiry.email':'Email','work.inquiry.msg':'Mensaje','work.inquiry.send':'Enviar consulta',
    /* App page */
    'app.hero.tag':'AI Phrase Search App',
    'app.hero.name':'Phramo',
    'app.hero.desc':'Busca y guarda al instante las frases que quieras recordar,\ny repásalas cuando quieras — una app especializada en aprender frases en inglés.',
    'app.coming':'Coming soon...',
    'app.coming.short':'Próximamente',
    'app.web.small':'Pruébala ya',
    'app.web.big':'WEB version',
    'app.section.how':'How it works',
    'app.how1.title':'Busca una frase','app.how1.desc':'Escribe lo que quieres decir en inglés. Sin necesidad de escribir "traduce al inglés" — solo busca.',
    'app.how2.title':'La IA responde al instante','app.how2.desc':'La IA devuelve expresiones nativas, oraciones de ejemplo, niveles de formalidad y contexto — todo en una vista.',
    'app.how3.title':'Guardado automático','app.how3.desc':'Cada frase que buscas se guarda automáticamente. Sin pasos extra — tu cuaderno crece solo.',
    'app.how4.title':'Tu cuaderno de frases','app.how4.desc':'Organiza por categoría, repasa cuando quieras y ponte a prueba. Un cuaderno personal que solo mejora.',
    'app.section.features':'Features',
    'app.feat1.title':'Respuestas con IA','app.feat1.desc':'Obtén expresiones nativas, oraciones de ejemplo y contexto de uso — con IA, en segundos.',
    'app.feat2.title':'15 idiomas','app.feat2.desc':'Busca en japonés, español, chino, coreano y 11 idiomas más. La IA responde en tu idioma nativo.',
    'app.feat3.title':'Medidor de formalidad','app.feat3.desc':'Mira si una frase es casual, neutra o formal — para usar siempre el tono correcto.',
    'app.feat4.title':'Quiz inteligente','app.feat4.desc':'Ponte a prueba con quizzes de repetición espaciada creados a partir de tus frases guardadas.',
    'app.feat5.title':'Corrección de Diario','app.feat5.desc':'Escribe una entrada corta en inglés. La IA corrige tu gramática y sugiere expresiones más naturales.',
    'app.feat6.title':'Categorías','app.feat6.desc':'Organiza tus frases en categorías personalizadas — viajes, trabajo, vida diaria, o lo que quieras.',
    'app.section.compare':'Why Phramo?',
    'app.compare.sub':'En qué se diferencia Phramo de lo que ya usas.',
    'app.compare1.title':'Sin escritura extra','app.compare1.desc':'No hace falta escribir "traduce __ al inglés" cada vez. Solo busca tu frase — listo. Tampoco necesitas buscar en chats viejos.',
    'app.compare2.title':'Tus frases reales','app.compare2.desc':'Aprende frases que realmente quieres usar, no un plan de estudios fijo. Tu cuaderno refleja tu vida.',
    'app.compare3.title':'La IA hace el trabajo','app.compare3.desc':'Sin crear tarjetas manualmente. Busca una frase y la IA genera todo — expresiones, ejemplos, formalidad. Listo para quiz automáticamente.',
    'app.cta.line1':'Busca. Guarda.','app.cta.line2':'Tu cuaderno de frases.','app.cta.desc':'Descarga gratis. Sin registro.\nSoporta 15 idiomas.',
    /* Contact */
    'contact.label':'06','contact.heading.sub':'/ Contacto',
    'contact.sub':'Disponible para proyectos. No dudes en escribirme.',
    'contact.name':'Nombre','contact.email':'Email','contact.msg':'Mensaje','contact.send':'Enviar mensaje',
  }
};

function setLang(l){
  window.__lang = l;
  try { localStorage.setItem('portfolio_lang', l); } catch(_){}
  document.documentElement.lang = l==='jp'?'ja':(l==='es'?'es':'en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n'), v = I18N[l][k];
    if(v!=null){
      if(v.includes('\n')) el.innerHTML = v.replace(/\n/g,'<br>');
      else el.textContent = v;
    }
  });
  document.querySelectorAll('.lang button').forEach(b=>
    b.setAttribute('aria-pressed', b.dataset.lang===l ? 'true':'false')
  );
  /* Swap app video by language */
  const appV = document.getElementById('appVideo');
  if (appV){
    const file = l==='es' ? 'phramo-es.mp4' : 'phramo-ja.mp4';
    const src = appV.querySelector('source');
    if (src && !src.src.endsWith(file)){
      const wasPlaying = !appV.paused;
      src.src = file;
      appV.load();
      if (wasPlaying || appV.autoplay) appV.play().catch(()=>{});
    }
  }
  // Fire custom event so page-specific JS can react
  document.dispatchEvent(new CustomEvent('langchange', {detail:{lang:l}}));
}

/* ---------- Menu ---------- */
function initNav(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(!menuBtn || !nav) return;

  function toggleMenu(force){
    const open = force!==undefined ? force : !menuBtn.classList.contains('open');
    menuBtn.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    nav.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden':'';
  }
  menuBtn.addEventListener('click',()=>toggleMenu());
  nav.querySelectorAll('[data-close]').forEach(a=>
    a.addEventListener('click',()=>toggleMenu(false))
  );
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang button').forEach(b=>
    b.addEventListener('click',()=>setLang(b.dataset.lang))
  );
  initNav();
  setLang((function(){ try { return localStorage.getItem('portfolio_lang'); } catch(_){} return null; })() || 'en');
});
