import { useEffect, useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function useContentData(contentType, page = 1) {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = useBaseUrl(`/${contentType}`);

  const indexUrl = useMemo(() => `${baseUrl}/index.json`, [baseUrl]);
  const pageUrl = useMemo(() => `${baseUrl}/page-${page}.json`, [baseUrl, page]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        // Fetch index.json for totalPages
        const indexRes = await fetch(indexUrl);
        
        if (!indexRes.ok) {
          if (indexRes.status === 404) {
            // File doesn't exist, set default values
            if (!cancelled) {
              setTotalPages(0);
              setItems([]);
            }
            return;
          }
          throw new Error(`HTTP ${indexRes.status}: ${indexRes.statusText}`);
        }

        const indexText = await indexRes.text();
        const index = JSON.parse(indexText);
        const totalPagesValue = index.totalPages ?? 1;
        if (!cancelled) setTotalPages(totalPagesValue);

        // Only fetch page data if totalPages > 0 and page <= totalPages
        if (totalPagesValue > 0 && page <= totalPagesValue) {
          // Fetch page-X.json for items list
          const pageRes = await fetch(pageUrl);
          
          if (!pageRes.ok) {
            if (pageRes.status === 404) {
              // File doesn't exist, set empty items
              if (!cancelled) setItems([]);
              return;
            }
            throw new Error(`HTTP ${pageRes.status}: ${pageRes.statusText}`);
          }

          const pageText = await pageRes.text();
          const data = JSON.parse(pageText);
          const sortedData = Array.isArray(data) ? data.sort((a, b) => {
            const dateA = new Date(a.lastUpdated || 0);
            const dateB = new Date(b.lastUpdated || 0);
            return dateB.getTime() - dateA.getTime(); // Newest first (descending)
          }) : [];
          if (!cancelled) setItems(sortedData);
        } else {
          // No pages to fetch, set empty items
          if (!cancelled) setItems([]);
        }
      } catch (err) {
        if (!cancelled) setError(err?.message || String(err));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [indexUrl, pageUrl]);

  return { items, totalPages, loading, error };
}
