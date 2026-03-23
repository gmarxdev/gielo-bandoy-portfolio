import { useEffect, useState } from "react";

const SESSION_KEY = "gmrb_visited_this_session";
// Unique namespace for your portfolio on counterapi.dev (free, no signup)
const COUNTER_URL = "https://api.counterapi.dev/v1/gmarxdev-portfolio/visits";

/**
 * Returns the global visit count powered by counterapi.dev.
 * Increments once per browser session (refresh-safe).
 * Falls back to localStorage if the API is unreachable.
 */
export const useVisitorCount = (): { count: number; loading: boolean } => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

    const fetchCount = async () => {
      try {
        // Increment once per session; otherwise just read
        const url = alreadyCounted ? COUNTER_URL : `${COUNTER_URL}/up`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        const globalCount: number = data.count ?? data.value ?? 0;

        // Mark this session as counted
        if (!alreadyCounted) {
          sessionStorage.setItem(SESSION_KEY, "1");
        }

        // Also cache locally as fallback
        localStorage.setItem("gmrb_visit_count_cache", String(globalCount));
        setCount(globalCount);
      } catch {
        // Fallback: use locally cached count if API is unreachable
        const cached = parseInt(
          localStorage.getItem("gmrb_visit_count_cache") ?? "0",
          10
        );
        setCount(cached);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { count, loading };
};
