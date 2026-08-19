const proxyUrl = 'https://docs-counter-proxy.weathered-dew-2d87.workers.dev';
const supabaseUrl = 'https://tedcnrtzdznipuljtvke.supabase.co';
const supabaseAnonKey = 'sb_publishable_T5VoG4fAkJmNCqS--9zOPg_R_tYvP_t';

async function callCounter(fn, args, keepalive = false) {
  const res = await fetch(proxyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fn, args }),
    keepalive,
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error('Counter request failed:', res.status, errorText);
    throw new Error(`counter request failed: ${res.status} - ${errorText}`);
  }
  return res.json();
}

export function incrementPageView(pageSlug) {
  return callCounter('increment_page_view', { page_slug: pageSlug });
}

export function incrementDownload(file) {
  return callCounter('increment_download', { file }, true);
}

// Get count without incrementing - direct Supabase query with anon key
export function getPageViewCount(pageSlug) {
  return fetch(`${supabaseUrl}/rest/v1/page_views?slug=eq.${encodeURIComponent(pageSlug)}&select=count`, {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
  })
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      return data[0].count;
    }
    return null;
  })
  .catch(() => null);
}

export function getDownloadCount(file) {
  return fetch(`${supabaseUrl}/rest/v1/file_downloads?file_id=eq.${encodeURIComponent(file)}&select=count`, {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
  })
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      return data[0].count;
    }
    return null;
  })
  .catch(() => null);
}