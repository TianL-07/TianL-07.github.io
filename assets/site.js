(() => {
  const controls = document.querySelector('.archive-controls');
  if (!controls) return;
  controls.hidden = false;
  const search = document.querySelector('#search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const entries = [...document.querySelectorAll('.entry')];
  let selected = 'all';
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  if(buttons.some(b => b.dataset.filter === params.get('category'))) selected = params.get('category');
  function update() {
    const query = search.value.trim().toLocaleLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);
    let count = 0;
    for (const entry of entries) {
      entry.hidden = !(selected === 'all' || entry.dataset.category === selected) || !terms.every(term => entry.dataset.search.includes(term));
      if (!entry.hidden) count++;
    }
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === selected));
    document.querySelector('.results-count').textContent = `${count} ${count === 1 ? 'entry' : 'entries'}${query ? ` matching “${search.value.trim()}”` : ''}`;
    document.querySelector('.search-empty').hidden = count !== 0;
    const url = new URL(location.href);
    query ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
    selected !== 'all' ? url.searchParams.set('category', selected) : url.searchParams.delete('category');
    history.replaceState(null, '', url);
  }
  search.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => { selected = button.dataset.filter; update(); }));
  document.querySelector('#reset-search').addEventListener('click', () => { selected = 'all'; search.value = ''; update(); search.focus(); });
  update();
})();
