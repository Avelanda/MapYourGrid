
// Edit these two constants only (place your anon key here)
const SUPABASE_URL = 'https://momhpgtitabhlpsxcqxh.supabase.co' ; // <-- your supabase url
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbWhwZ3RpdGFiaGxwc3hjcXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MzUxODMsImV4cCI6MjA3NTMxMTE4M30.IUj10ikNkwip_iZsGxR8vUWNgRtK9aaiTovpTeKvm4c';                         // <-- your anon key


(async () => {
  // small utilities
  function el(id) { return document.getElementById(id); }
  function escapeHtml(s){ return (s||'').toString().replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]); }
  function parseCoords(coordStr){
    const parts = coordStr.split(',').map(s => s.trim());
    const lat = parseFloat(parts[0]), lon = parseFloat(parts[1]);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) throw new Error('invalid coords');
    return {lat, lon};
  }

  // DOM references
  const loadingEl = el('gfl-loading');
  const listEl = el('gfl-list');
  const refreshBtn = el('gfl-refresh');
  const addForm = el('gfl-add-form');
  const addMsg = el('gfl-add-msg');

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    loadingEl.textContent = 'Supabase URL or key not set. Edit the top of gfl.js to add them.';
    return;
  }

  // central fetch wrapper with clear error output
  async function supabaseFetch(path, options = {}) {
    // allow full path if calling with /rest/v1/ already
    const base = SUPABASE_URL.replace(/\/+$/,'') + '/rest/v1/';
    const url = path.startsWith('http') ? path : (base + path);
    const headers = Object.assign({
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }, options.headers || {});
    const res = await fetch(url, Object.assign({credentials: 'omit', headers}, options));
    if (!res.ok) {
      // attempt to read body for diagnostic
      const text = await res.text().catch(()=>'<no body>');
      const err = new Error(`Supabase error ${res.status}: ${text}`);
      err.status = res.status;
      err.body = text;
      throw err;
    }
    // parse json if any
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  // build a safe query for the list
  function buildListPath() {
    // using %2A for * to be safe
    return `good-first-lines?archived=eq.false&completed=eq.false&select=%2A`;
  }

  function createCard(item) {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.dataset.id = item.id || '';

    // title + coords
    card.innerHTML = `
      <div class="country-title"><strong>${escapeHtml(item.country || '')}</strong></div>
      <div class="country-coords">${escapeHtml(item.coordinates || (item.lat && item.lon ? item.lat + ', ' + item.lon : ''))}</div>
    `;
    // details toggle
    const toggle = document.createElement('button');
    toggle.className = 'gfl-toggle';
    toggle.type = 'button';
    toggle.textContent = 'Details';
    card.appendChild(toggle);

    const panel = document.createElement('div');
    panel.className = 'gfl-panel';
    panel.style.display = 'none';

    // editor buttons
    const btnRow = document.createElement('div');
    btnRow.className = 'gfl-btn-row';

    const josmBtn = document.createElement('button');
    josmBtn.className = 'gfl-btn gfl-btn-josm';
    josmBtn.type = 'button';
    josmBtn.textContent = 'JOSM';

    const idLink = document.createElement('a');
    idLink.className = 'gfl-btn gfl-btn-id';
    idLink.target = '_blank';
    idLink.rel = 'noopener';
    idLink.textContent = 'iD';

    btnRow.appendChild(josmBtn);
    btnRow.appendChild(idLink);
    panel.appendChild(btnRow);

    // details textarea
    const detailsArea = document.createElement('textarea');
    detailsArea.className = 'gfl-details-area';
    detailsArea.rows = 3;
    detailsArea.maxLength = 512;
    detailsArea.value = item.region_details || '';
    panel.appendChild(detailsArea);

    // status row
    const statusRow = document.createElement('div');
    statusRow.className = 'gfl-status-row';
    const attemptLabel = document.createElement('label');
    const attemptBox = document.createElement('input');
    attemptBox.type = 'checkbox';
    attemptBox.checked = !!item.attempted;
    attemptLabel.appendChild(attemptBox);
    attemptLabel.appendChild(document.createTextNode(' Attempted mapping'));
    statusRow.appendChild(attemptLabel);

    const completeBtn = document.createElement('button');
    completeBtn.className = 'gfl-complete-btn';
    completeBtn.type = 'button';
    completeBtn.textContent = item.completed ? 'Completed' : 'Mark as completed';
    completeBtn.disabled = !!item.completed;
    statusRow.appendChild(completeBtn);

    panel.appendChild(statusRow);

    // save row
    const saveRow = document.createElement('div');
    saveRow.className = 'gfl-save-row';
    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = 'Save changes';
    const saveMsg = document.createElement('span');
    saveMsg.className = 'gfl-msg';
    saveRow.appendChild(saveBtn);
    saveRow.appendChild(saveMsg);
    panel.appendChild(saveRow);

    card.appendChild(panel);

    // compute lat/lon for urls
    const lat = item.lat !== null && item.lat !== undefined ? item.lat : (item.coordinates ? parseFloat(item.coordinates.split(',')[0]) : null);
    const lon = item.lon !== null && item.lon !== undefined ? item.lon : (item.coordinates ? parseFloat(item.coordinates.split(',')[1]) : null);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      idLink.href = '#';
      josmBtn.disabled = true;
    } else {
      idLink.href = `https://www.openstreetmap.org/edit#map=18/${lat}/${lon}`;
      josmBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const url = `http://127.0.0.1:8111/zoom?left=${lon}&right=${lon}&top=${lat}&bottom=${lat}`;
        fetch(url).catch(() => {
          alert('Could not contact JOSM remote control at http://127.0.0.1:8111. Make sure JOSM is running and RemoteControl is enabled.');
        });
      });
    }

    toggle.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    // Save changes
    saveBtn.addEventListener('click', async () => {
      saveMsg.textContent = 'Saving...';
      try {
        await supabaseFetch(`good-first-lines?id=eq.${encodeURIComponent(item.id)}`, {
          method: 'PATCH',
          body: JSON.stringify({ region_details: detailsArea.value })
        });
        saveMsg.textContent = 'Saved';
        setTimeout(()=>saveMsg.textContent = '', 1800);
      } catch (err) {
        saveMsg.textContent = 'Error saving';
        console.error(err);
      }
    });

    // Attempted toggle
    attemptBox.addEventListener('change', async () => {
      try {
        await supabaseFetch(`good-first-lines?id=eq.${encodeURIComponent(item.id)}`, {
          method: 'PATCH',
          body: JSON.stringify({
            attempted: attemptBox.checked,
            attempted_at: attemptBox.checked ? new Date().toISOString() : null
          })
        });
      } catch (err) {
        console.error(err);
        alert('Failed to update attempted status (see console)');
        attemptBox.checked = !attemptBox.checked;
      }
    });

    // Completed action: mark completed & archived (so it disappears)
    completeBtn.addEventListener('click', async () => {
      if (!confirm('Mark this good first line as COMPLETED? It will be archived and removed from the main list.')) return;
      try {
        await supabaseFetch(`good-first-lines?id=eq.${encodeURIComponent(item.id)}`, {
          method: 'PATCH',
          body: JSON.stringify({ completed: true, completed_at: new Date().toISOString(), archived: true })
        });
        card.remove();
      } catch (err) {
        console.error(err);
        alert('Failed to mark as completed (see console)');
      }
    });

    return card;
  }

  // load list from supabase
  async function loadList() {
    loadingEl.style.display = '';
    listEl.querySelectorAll('.country-card').forEach(n => n.remove());
    try {
      const items = await supabaseFetch(buildListPath());
      loadingEl.style.display = 'none';
      if (!items || items.length === 0) {
        listEl.appendChild(Object.assign(document.createElement('div'), { textContent: 'No items found.' }));
        return;
      }
      items.forEach(it => listEl.appendChild(createCard(it)));
    } catch (err) {
      loadingEl.textContent = 'Failed to load list. See console for details.';
      console.error('Failed to load: ', err);
      // If server returned JSON with hint message, show it: (err.body is available)
      if (err.body) console.error('Server body:', err.body);
    }
  }

  // Add form handling
  addForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    addMsg.textContent = 'Adding...';
    const coords = document.getElementById('gfl-coords').value.trim();
    const country = document.getElementById('gfl-country').value.trim();
    const region = document.getElementById('gfl-region').value.trim();
    let lat, lon;
    try {
      ({lat, lon} = parseCoords(coords));
    } catch (e) {
      addMsg.textContent = 'Invalid coordinates format.';
      return;
    }

    const payload = {
      coordinates: `${lat}, ${lon}`,
      lat: lat,
      lon: lon,
      country: country,
      region_details: region || null,
      attempted: false,
      completed: false,
      archived: false,
      created_at: new Date().toISOString()
    };

    try {
      await supabaseFetch('good-first-lines', { method: 'POST', body: JSON.stringify(payload) });
      addMsg.textContent = 'Added.';
      addForm.reset();
      await loadList();
      setTimeout(()=> addMsg.textContent = '', 1500);
    } catch (err) {
      console.error('Add failed:', err);
      addMsg.textContent = 'Failed to add (see console).';
    }
  });

  refreshBtn.addEventListener('click', loadList);

  // initial load
  await loadList();
})();
