// Supabase configuration - REPLACE WITH YOUR ACTUAL VALUES
const SUPABASE_URL = 'https://momhpgtitabhlpsxcqxh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbWhwZ3RpdGFiaGxwc3hjcXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MzUxODMsImV4cCI6MjA3NTMxMTE4M30.IUj10ikNkwip_iZsGxR8vUWNgRtK9aaiTovpTeKvm4c'; // Replace this!

// Supabase client will be initialized after library loads
let supabase;

// Country code mapping for flags
const countryFlags = {
  // Europe
  'spain': 'ES', 'france': 'FR', 'germany': 'DE', 'italy': 'IT', 'portugal': 'PT',
  'united kingdom': 'GB', 'uk': 'GB', 'great britain': 'GB', 'england': 'GB',
  'scotland': 'GB', 'wales': 'GB', 'northern ireland': 'GB', 'ireland': 'IE',
  'netherlands': 'NL', 'holland': 'NL', 'belgium': 'BE', 'switzerland': 'CH',
  'austria': 'AT', 'poland': 'PL', 'czech republic': 'CZ', 'czechia': 'CZ',
  'slovakia': 'SK', 'hungary': 'HU', 'romania': 'RO', 'bulgaria': 'BG',
  'greece': 'GR', 'croatia': 'HR', 'serbia': 'RS', 'slovenia': 'SI',
  'bosnia and herzegovina': 'BA', 'bosnia': 'BA', 'montenegro': 'ME',
  'albania': 'AL', 'north macedonia': 'MK', 'macedonia': 'MK', 'kosovo': 'XK',
  'sweden': 'SE', 'norway': 'NO', 'denmark': 'DK', 'finland': 'FI', 'iceland': 'IS',
  'estonia': 'EE', 'latvia': 'LV', 'lithuania': 'LT',
  'ukraine': 'UA', 'belarus': 'BY', 'moldova': 'MD', 'russia': 'RU',
  'turkey': 'TR', 'cyprus': 'CY', 'malta': 'MT', 'luxembourg': 'LU',
  'liechtenstein': 'LI', 'monaco': 'MC', 'andorra': 'AD', 'san marino': 'SM',
  'vatican city': 'VA', 'vatican': 'VA',
  
  // Americas
  'usa': 'US', 'united states': 'US', 'america': 'US', 'us': 'US',
  'canada': 'CA', 'mexico': 'MX', 'brazil': 'BR', 'argentina': 'AR',
  'chile': 'CL', 'colombia': 'CO', 'peru': 'PE', 'venezuela': 'VE',
  'ecuador': 'EC', 'bolivia': 'BO', 'paraguay': 'PY', 'uruguay': 'UY',
  'costa rica': 'CR', 'panama': 'PA', 'guatemala': 'GT', 'honduras': 'HN',
  'el salvador': 'SV', 'nicaragua': 'NI', 'belize': 'BZ',
  'cuba': 'CU', 'jamaica': 'JM', 'haiti': 'HT', 'dominican republic': 'DO',
  'puerto rico': 'PR', 'trinidad and tobago': 'TT', 'bahamas': 'BS',
  'barbados': 'BB', 'guyana': 'GY', 'suriname': 'SR', 'french guiana': 'GF',
  
  // Asia
  'china': 'CN', 'china (prc)': 'CN', 'japan': 'JP', 'south korea': 'KR', 'korea': 'KR',
  'north korea': 'KP', 'india': 'IN', 'pakistan': 'PK', 'bangladesh': 'BD',
  'sri lanka': 'LK', 'nepal': 'NP', 'bhutan': 'BT', 'maldives': 'MV',
  'afghanistan': 'AF', 'iran': 'IR', 'iraq': 'IQ', 'saudi arabia': 'SA',
  'yemen': 'YE', 'oman': 'OM', 'uae': 'AE', 'united arab emirates': 'AE',
  'qatar': 'QA', 'kuwait': 'KW', 'bahrain': 'BH', 'jordan': 'JO',
  'lebanon': 'LB', 'syria': 'SY', 'israel': 'IL', 'palestine': 'PS',
  'thailand': 'TH', 'vietnam': 'VN', 'myanmar': 'MM', 'burma': 'MM',
  'cambodia': 'KH', 'laos': 'LA', 'malaysia': 'MY', 'singapore': 'SG',
  'indonesia': 'ID', 'philippines': 'PH', 'brunei': 'BN', 'timor-leste': 'TL',
  'east timor': 'TL', 'mongolia': 'MN', 'kazakhstan': 'KZ', 'uzbekistan': 'UZ',
  'turkmenistan': 'TM', 'kyrgyzstan': 'KG', 'tajikistan': 'TJ',
  'armenia': 'AM', 'azerbaijan': 'AZ', 'georgia': 'GE',
  
  // Africa
  'south africa': 'ZA', 'egypt': 'EG', 'morocco': 'MA', 'algeria': 'DZ',
  'tunisia': 'TN', 'libya': 'LY', 'sudan': 'SD', 'south sudan': 'SS',
  'ethiopia': 'ET', 'kenya': 'KE', 'tanzania': 'TZ', 'uganda': 'UG',
  'rwanda': 'RW', 'burundi': 'BI', 'somalia': 'SO', 'djibouti': 'DJ',
  'eritrea': 'ER', 'nigeria': 'NG', 'ghana': 'GH', 'ivory coast': 'CI',
  "cote d'ivoire": 'CI', 'senegal': 'SN', 'mali': 'ML', 'niger': 'NE',
  'burkina faso': 'BF', 'guinea': 'GN', 'sierra leone': 'SL', 'liberia': 'LR',
  'benin': 'BJ', 'togo': 'TG', 'cameroon': 'CM', 'chad': 'TD',
  'central african republic': 'CF', 'congo': 'CG', 'dr congo': 'CD',
  'democratic republic of congo': 'CD', 'gabon': 'GA', 'equatorial guinea': 'GQ',
  'angola': 'AO', 'zambia': 'ZM', 'zimbabwe': 'ZW', 'mozambique': 'MZ',
  'malawi': 'MW', 'madagascar': 'MG', 'mauritius': 'MU', 'seychelles': 'SC',
  'botswana': 'BW', 'namibia': 'NA', 'lesotho': 'LS', 'eswatini': 'SZ',
  'swaziland': 'SZ',
  
  // Oceania
  'australia': 'AU', 'new zealand': 'NZ', 'papua new guinea': 'PG',
  'fiji': 'FJ', 'solomon islands': 'SB', 'vanuatu': 'VU', 'samoa': 'WS',
  'tonga': 'TO', 'kiribati': 'KI', 'micronesia': 'FM', 'palau': 'PW',
  'marshall islands': 'MH', 'nauru': 'NR', 'tuvalu': 'TV'
};

function getCountryFlag(country) {
  const code = countryFlags[country.toLowerCase()] || 'UN';
  return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}

function createJOSMUrl(lat, lon) {
  // Use a small buffer around the point for zoom
  const buffer = 0.001;
  return `http://localhost:8111/zoom?left=${lon - buffer}&right=${lon + buffer}&top=${lat + buffer}&bottom=${lat - buffer}`;
}

function createiDUrl(lat, lon) {
  return `https://www.openstreetmap.org/edit#map=18/${lat}/${lon}`;
}

async function loadLines() {
  const container = document.getElementById('gfl-container');
  
  try {
    const { data, error } = await supabase
      .from('lines')
      .select('*')
      .neq('status', 'completed')
      .order('created_at', { ascending: true });

    if (error) throw error;

    if (data.length === 0) {
      container.innerHTML = '<p>No good first lines available at the moment. Add one below!</p>';
      return;
    }

    let html = '<div class="gfl-grid">';
    
    data.forEach(line => {
      const [lat, lon] = line.coordinates.split(',').map(c => c.trim());
      const josmUrl = createJOSMUrl(parseFloat(lat), parseFloat(lon));
      const idUrl = createiDUrl(lat, lon);
      
      html += `
        <div class="country-card gfl-card" data-id="${line.id}">
          <div class="gfl-header" onclick="toggleDropdown('${line.id}')">
            <img src="${getCountryFlag(line.country)}" alt="${line.country}" class="country-flag off-glb">
            <h3>${line.country}</h3>
            <div class="coordinates">${line.coordinates}</div>
            ${line.status === 'attempted' ? '<span class="attempted-badge">Attempted</span>' : ''}
            <span class="dropdown-arrow">▼</span>
          </div>
          
          <div id="dropdown-${line.id}" class="gfl-dropdown">
            ${line.details ? `<p class="details"><strong>Details: </strong>${line.details}</p>` : ''}
            
            <div class="editor-buttons">
              <a href="${josmUrl}" target="_blank" class="editor-btn josm-btn" title="Open in JOSM">
                <img src="/images/josm_logo.jpg" alt="JOSM" class="editor-logo off-glb">
                JOSM
              </a>
              <a href="${idUrl}" target="_blank" class="editor-btn id-btn" title="Open in iD Editor">
                <img src="/images/starter-kit/osm-logo.svg" alt="iD" class="editor-logo off-glb">
                iD Editor
              </a>
            </div>
            
            <div class="status-buttons">
              <label class="checkbox-label">
                <input type="checkbox" id="attempted-${line.id}" 
                  ${line.status === 'attempted' ? 'checked' : ''} 
                  onchange="updateStatus('${line.id}', 'attempted', this.checked)">
                Attempted mapping
              </label>
              
              <button class="complete-btn" onclick="markCompleted('${line.id}')">
                ✓ Completed line mapping
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
  } catch (error) {
    console.error('Error loading lines:', error);
    container.innerHTML = '<p class="error">Error loading good first lines. Please try again later.</p>';
  }
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(`dropdown-${id}`);
  const arrow = event.currentTarget.querySelector('.dropdown-arrow');
  
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    arrow.textContent = '▼';
  } else {
    dropdown.style.display = 'block';
    arrow.textContent = '▲';
  }
}

async function updateStatus(id, statusType, isChecked) {
  try {
    const newStatus = isChecked ? 'attempted' : 'available';
    
    const { error } = await supabase
      .from('lines')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) throw error;
    
    // Update badge visibility
    const card = document.querySelector(`[data-id="${id}"]`);
    const badge = card.querySelector('.attempted-badge');
    
    if (isChecked && !badge) {
      const header = card.querySelector('.gfl-header');
      const arrow = header.querySelector('.dropdown-arrow');
      arrow.insertAdjacentHTML('beforebegin', '<span class="attempted-badge">Attempted</span>');
    } else if (!isChecked && badge) {
      badge.remove();
    }
    
  } catch (error) {
    console.error('Error updating status:', error);
    alert('Error updating status. Please try again.');
  }
}

async function markCompleted(id) {
  if (!confirm('Mark this line as completed? It will be archived and removed from the active list.')) {
    return;
  }
  
  try {
    const { error } = await supabase
      .from('lines')
      .update({ status: 'completed' })
      .eq('id', id);

    if (error) throw error;
    
    // Remove card from display
    const card = document.querySelector(`[data-id="${id}"]`);
    card.style.opacity = '0';
    setTimeout(() => {
      card.remove();
      
      // Check if no more lines
      const container = document.getElementById('gfl-container');
      if (container.querySelectorAll('.gfl-card').length === 0) {
        container.innerHTML = '<p>No good first lines available at the moment. Add one below!</p>';
      }
    }, 300);
    
    alert('Line marked as completed! It will be archived by the next scheduled update.');
    
  } catch (error) {
    console.error('Error marking completed:', error);
    alert('Error marking line as completed. Please try again.');
  }
}

// Add new line
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-gfl').addEventListener('click', async () => {
    // Check if Supabase is initialized
    if (!supabase) {
      document.getElementById('form-message').innerHTML = '<span class="error">Still loading... Please wait a moment.</span>';
      return;
    }
    
    const coordinates = document.getElementById('add-coordinates').value.trim();
    const country = document.getElementById('add-country').value.trim();
    const details = document.getElementById('add-details').value.trim();
    const messageDiv = document.getElementById('form-message');
    
    // Validation
    if (!coordinates || !country) {
      messageDiv.innerHTML = '<span class="error">Please fill in all required fields.</span>';
      return;
    }
    
    // Validate coordinate format
    const coordPattern = /^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$/;
    if (!coordPattern.test(coordinates)) {
      messageDiv.innerHTML = '<span class="error">Invalid coordinate format. Use: latitude,longitude (e.g., 43.22443,12.82870)</span>';
      return;
    }
    
    const [lat, lon] = coordinates.split(',').map(c => parseFloat(c.trim()));
    
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      messageDiv.innerHTML = '<span class="error">Invalid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180.</span>';
      return;
    }
    
    try {
      const { error } = await supabase
        .from('lines')
        .insert([{
          coordinates: coordinates,
          country: country,
          details: details || null,
          status: 'available',
          lat: lat,
          lon: lon
        }]);

      if (error) throw error;
      
      messageDiv.innerHTML = '<span class="success">Good first line added successfully!</span>';
      
      // Clear form
      document.getElementById('add-coordinates').value = '';
      document.getElementById('add-country').value = '';
      document.getElementById('add-details').value = '';
      
      // Reload lines
      setTimeout(() => {
        messageDiv.innerHTML = '';
        loadLines();
      }, 2000);
      
    } catch (error) {
      console.error('Error adding line:', error);
      messageDiv.innerHTML = `<span class="error">Error adding line: ${error.message}</span>`;
    }
  });
});



// Load Supabase library and initialize
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  script.onload = () => {
    // Initialize Supabase client after library loads
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Now load the data
    loadLines();
  };
  script.onerror = () => {
    document.getElementById('gfl-container').innerHTML = '<p class="error">Error loading required libraries. Please refresh the page.</p>';
  };
  document.head.appendChild(script);
})();
