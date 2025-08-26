document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-menu-overlay';
  mobileOverlay.innerHTML = `
    <div class="mobile-menu-content">
      <div style="display:flex;justify-content:space-between;align-items:center"><h3 style="margin:0;color:#fff">i-Pro Solutions</h3><button class="mobile-menu-close" id="mobile-close">✕</button></div>
      <ul class="mobile-nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="business-setup.html">Business Setup</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="legal-resources.html">Legal Resources</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  `;
  document.body.appendChild(mobileOverlay);
  mobileToggle.addEventListener('click', () => mobileOverlay.classList.add('open'));
  document.addEventListener('click', (e) => { if(e.target && e.target.id==='mobile-close') mobileOverlay.classList.remove('open'); });
  const obs = new IntersectionObserver((entries)=>{ entries.forEach(ent=>{ if(ent.isIntersecting) ent.target.classList.add('show'); }); },{threshold:0.15});
  document.querySelectorAll('.glitter-card, .card, .section, .hero-content').forEach(el=>obs.observe(el));
  document.querySelectorAll('.counter').forEach(el=>{
    const target = +el.dataset.target;
    let current=0;
    const step = Math.max(1, Math.floor(target/80));
    const id = setInterval(()=>{ current+=step; if(current>=target){ el.textContent=target; clearInterval(id);} else el.textContent=current; },12);
  });
});