# Archived Lines
These are lines that have been completed by mappers.

<div id="archive-container">
  <div id="archive-loading">Loading archived lines...</div>
</div>

<script>
// Supabase configuration
const SUPABASE_URL = 'https://momhpgtitabhlpsxcqxh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbWhwZ3RpdGFiaGxwc3hjcXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MzUxODMsImV4cCI6MjA3NTMxMTE4M30.IUj10ikNkwip_iZsGxR8vUWNgRtK9aaiTovpTeKvm4c';

// Country code mapping for flags
const countryFlags = {
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
  'usa': 'US', 'united states': 'US', 'america': 'US', 'us': 'US',
  'canada': 'CA', 'mexico': 'MX', 'brazil': 'BR', 'argentina': 'AR',
  'chile': 'CL', 'colombia': 'CO', 'peru': 'PE', 'venezuela': 'VE',
  'ecuador': 'EC', 'bolivia': 'BO', 'paraguay': 'PY', 'uruguay': 'UY',
  'costa rica': 'CR', 'panama': 'PA', 'guatemala': 'GT', 'honduras': 'HN',
  'el salvador': 'SV', 'nicaragua': 'NI', 'belize': 'BZ',
  'cuba': 'CU', 'jamaica': 'JM', 'haiti': 'HT', 'dominican republic': 'DO',
  'puerto rico': 'PR', 'trinidad and tobago': 'TT', 'bahamas': 'BS',
  'barbados': 'BB', 'guyana': 'GY', 'suriname': 'SR', 'french guiana': 'GF',
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
  'australia': 'AU', 'new zealand': 'NZ', 'papua new guinea': 'PG',
  'fiji': 'FJ', 'solomon islands': 'SB', 'vanuatu': 'VU', 'samoa': 'WS',
  'tonga': 'TO', 'kiribati': 'KI', 'micronesia': 'FM', 'palau': 'PW',
  'marshall islands': 'MH', 'nauru': 'NR', 'tuvalu': 'TV'
};

function getCountryFlag(country) {
  const code = countryFlags[country.toLowerCase()] || 'UN';
  return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}

async function loadArchivedLines() {
  const container = document.getElementById('archive-container');
  
  try {
    const { data, error } = await supabase
      .from('lines')
      .select('*')
      .eq('status', 'completed')
      .order('completed_at', { ascending: false });

    if (error) throw error;

    if (data.length === 0) {
      container.innerHTML = '<p>No archived lines yet.</p>';
      return;
    }

    let html = '<div class="archive-grid">';
    
    data.forEach(line => {
      html += `
        <div class="archive-card">
          <img src="${getCountryFlag(line.country)}" alt="${line.country}" class="country-flag off-glb">
          <strong>${line.country}</strong>
          <div class="coordinates">${line.coordinates}</div>
          ${line.details ? `<div class="details">${line.details}</div>` : ''}
          <div class="archived-date">Completed: ${new Date(line.completed_at).toLocaleDateString()}</div>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
  } catch (error) {
    console.error('Error loading archived lines:', error);
    container.innerHTML = '<p class="error">Error loading archived lines.</p>';
  }
}

// Load Supabase library and initialize
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  script.onload = () => {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    loadArchivedLines();
  };
  script.onerror = () => {
    document.getElementById('archive-container').innerHTML = '<p class="error">Error loading required libraries. Please refresh the page.</p>';
  };
  document.head.appendChild(script);
})();
</script>