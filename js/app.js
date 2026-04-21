/* ============================================================
   App Page — Phramo LP Scripts
   ============================================================ */

/* Video: autoplay immediately, no lazy warm-up delay */
(function(){
  const v = document.getElementById('appVideo'); if(!v) return;
  v.muted = true;
  // Force play immediately
  const tryPlay = () => {
    const p = v.play();
    if(p && p.then) p.catch(()=>{});
  };
  if(v.readyState >= 2) tryPlay();
  else v.addEventListener('loadeddata', tryPlay, {once:true});

  // Pause when off-screen to save resources
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(([e])=>{
      if(e.isIntersecting) v.play().catch(()=>{});
      else v.pause();
    }, {threshold:0.1, rootMargin:'100px 0px'});
    io.observe(v);
  }
})();
