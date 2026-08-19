const proxyUrl = 'https://docs-counter-proxy.weathered-dew-2d87.workers.dev';
const supabaseUrl = 'https://tedcnrtzdznipuljtvke.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZGNucnR6ZHpuaXB1bGp0dmtlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzEyOTQ1MCwiZXhwIjoyMTAyNzA1NDUwfQ.UIoq7WPSyWRNwPpmFH1dfMtx4L1jbItGyeuEbxU9TSE';

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

// Get count without incrementing - direct Supabase query
export function getPageViewCount(pageSlug) {
  return fetch(`${supabaseUrl}/rest/v1/page_views?slug=eq.${encodeURIComponent(pageSlug)}&select=count`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
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
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
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