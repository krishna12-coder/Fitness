// Viva Fitness - small UX niceties
(function() {
  // Click tracking (simple)
  function track(label){
    try {
      const key = 'viva_clicks';
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      data[label] = (data[label] || 0) + 1;
      localStorage.setItem(key, JSON.stringify(data));
      console.log('[Viva] Click ->', label, 'count=', data[label]);
    } catch(_) {}
  }

  // Attach to referral cards
  document.querySelectorAll('a.ref-card[data-label]').forEach(a => {
    a.addEventListener('click', () => track(a.dataset.label));
  });

  // Smooth-scroll for on-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
})();