const proxyUrl = 'https://docs-counter-proxy.weathered-dew-2d87.workers.dev';

async function callCounter(fn, args, keepalive = false) {
  const res = await fetch(proxyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fn, args }),
    keepalive,
  });
  if (!res.ok) throw new Error(`counter request failed: ${res.status}`);
  return res.json();
}

export function incrementPageView(pageSlug) {
  return callCounter('increment_page_view', { page_slug: pageSlug });
}

export function incrementDownload(file) {
  return callCounter('increment_download', { file }, true);
}