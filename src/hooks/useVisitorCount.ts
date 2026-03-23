import { useEffect, useState } from "react";

const SESSION_KEY = "gmrb_visit_count_session";
const LOCAL_CACHE_KEY = "gmrb_visit_count_cache";
// Unique namespace for your portfolio on counterapi.dev (free, no signup)
const COUNTER_UP_URL = "https://api.counterapi.dev/v1/gmarxdev-portfolio/visits/up";

/**
 * Returns the global visit count powered by counterapi.dev.
 * - New browser session  → calls /up (increments + returns count), caches in sessionStorage.
 * - Same session (refresh) → reads cached count from sessionStorage (no extra API call).
 * - API unreachable       → falls back to last known count in localStorage.
 */
export const useVisitorCount = (): { count: number; loading: boolean } => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cachedSession = sessionStorage.getItem(SESSION_KEY);

    if (cachedSession !== null) {
      // Same session — use the count we already received from the API
      setCount(parseInt(cachedSession, 10) || 0);
      setLoading(false);
      return;
    }

    // New session — increment the global counter
    fetch(COUNTER_UP_URL)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        const globalCount: number = data.count ?? data.value ?? 0;
        // Cache in sessionStorage (for refreshes) and localStorage (offline fallback)
        sessionStorage.setItem(SESSION_KEY, String(globalCount));
        localStorage.setItem(LOCAL_CACHE_KEY, String(globalCount));
        setCount(globalCount);
      })
      .catch(() => {
        // Fallback: use the last known count cached locally
        const fallback = parseInt(localStorage.getItem(LOCAL_CACHE_KEY) ?? "0", 10);
        setCount(fallback);
      })
      .finally(() => setLoading(false));
  }, []);

  return { count, loading };
};
