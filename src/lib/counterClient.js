const proxyUrl = 'https://docs-counter-proxy.weathered-dew-2d87.workers.dev';

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

// Get count without incrementing - use Worker to avoid CSP issues
export function getPageViewCount(pageSlug) {
  return callCounter('get_page_view', { page_slug: pageSlug });
}

export function getDownloadCount(file) {
  return callCounter('get_download_count', { file });
}