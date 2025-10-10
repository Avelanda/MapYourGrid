const fs = require('fs').promises;
const https = require('https');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY');
  process.exit(1);
}

function supabaseFetch(path, method = 'GET', body=null) {
  const url = `${SUPABASE_URL.replace(/\/$/,'')}/rest/v1/${path}`;
  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: 'Bearer ' + SUPABASE_KEY,
    'Content-Type': 'application/json'
  };
  const opts = new URL(url);
  opts.method = method;
  opts.headers = headers;
  return new Promise((resolve, reject) => {
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error(`HTTP ${res.statusCode} - ${data}`));
        }
        try { resolve(JSON.parse(data)); } catch(e) { resolve(data); }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

(async () => {
  try {
    const rows = await supabaseFetch('good_first_lines?completed=eq.true&archived=eq.false&select=*');
    if (!rows || rows.length === 0) {
      console.log('No completed (unarchived) rows found.');
      return;
    }

    const header = `<!-- Auto-generated archive. Appended by GitHub Action on ${new Date().toISOString()} -->\n\n`;
    let md = header;
    for (const r of rows) {
      md += `### ${r.country} — ${r.coordinates}\n\n`;
      if (r.region_details) md += `${r.region_details}\n\n`;
      md += `- Added: ${r.created_at || 'unknown'}\n`;
      md += `- Completed: ${r.completed_at || new Date().toISOString()}\n\n---\n\n`;
    }

    const archivePath = 'docs/gfl-archive.md';
    let existing = '';
    try { existing = await fs.readFile(archivePath, 'utf8'); } catch (e) { existing = ''; }
    await fs.writeFile(archivePath, existing + '\n' + md, 'utf8');
    console.log('Appended archive file.');

    const ids = rows.map(r => r.id);
    const idList = ids.map(id => `${id}`).join(',');
    await supabaseFetch(`good_first_lines?id=in.(${idList})`, 'PATCH', { archived: true });
    console.log('Marked rows archived in DB.');

    const { execSync } = require('child_process');
    execSync('git config user.email "' + process.env.GITHUB_EMAIL + '"');
    execSync('git config user.name "' + process.env.GITHUB_NAME + '"');
    execSync('git add ' + archivePath);
    execSync('git commit -m "Archive completed Good First Lines (' + new Date().toISOString() + ')" || echo "no changes"');
    execSync('git push origin HEAD');
    console.log('Committed and pushed archive file.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
NODE
          node .github/scripts/archive-gfl.js
