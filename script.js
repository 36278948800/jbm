(function(){
  const phone='5511920191106';
  const base='Olá! Vim pelo site da JBM e gostaria de solicitar um orçamento de móveis escolares.';
  function waUrl(product){
    const msg=product?`Olá! Vim pelo site da JBM e gostaria de solicitar um orçamento de ${product}.`:base;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
  window.dataLayer=window.dataLayer||[];
  function track(event, params={}){ window.dataLayer.push({event,...params}); }
  document.querySelectorAll('.js-wa').forEach(el=>{
    el.href=waUrl(el.dataset.product);
    el.target='_blank'; el.rel='noopener';
    el.addEventListener('click',()=>track('click_whatsapp',{source:el.dataset.source||'unknown',product:el.dataset.product||null}));
  });
  document.querySelectorAll('.js-track').forEach(el=>el.addEventListener('click',()=>track(el.dataset.event||'custom_click')));

  const toggle=document.querySelector('.menu-toggle');
  const mobileMenu=document.querySelector('.mobile-menu');
  if(toggle&&mobileMenu){
    toggle.addEventListener('click',()=>{
      const open=mobileMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.textContent=open?'×':'☰';
    });
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
  }

  let s50=false,s90=false;
  window.addEventListener('scroll',()=>{
    const h=document.documentElement.scrollHeight-window.innerHeight;
    if(!h) return; const p=(window.scrollY/h)*100;
    if(p>=50&&!s50){s50=true;track('scroll_50')}
    if(p>=90&&!s90){s90=true;track('scroll_90')}
  },{passive:true});
})();
