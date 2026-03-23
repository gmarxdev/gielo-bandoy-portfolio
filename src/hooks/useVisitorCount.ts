import { useEffect, useState } from "react";

const STORAGE_KEY = "gmrb_visit_count";
const SESSION_KEY = "gmrb_visited_this_session";

/**
 * Returns the total number of visits recorded in localStorage.
 * The counter increments once per browser session (not on every refresh).
 */
export const useVisitorCount = (): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Read current stored count (default 0)
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);

    // Only increment once per browser session
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

    if (!alreadyCounted) {
      const newCount = stored + 1;
      localStorage.setItem(STORAGE_KEY, String(newCount));
      sessionStorage.setItem(SESSION_KEY, "1");
      setCount(newCount);
    } else {
      setCount(stored);
    }
  }, []);

  return count;
};
