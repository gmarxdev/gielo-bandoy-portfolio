import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, runTransaction, onValue } from "firebase/database";

const SESSION_KEY = "gmrb_visited_this_session";

/**
 * Global visit counter backed by Firebase Realtime Database.
 * - New browser session  → atomically increments `portfolio/visits` in Firebase.
 * - Same session (refresh) → reads from sessionStorage cache (no DB write).
 * - Real-time listener    → stays in sync if count changes elsewhere.
 */
export const useVisitorCount = (): { count: number; loading: boolean } => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const visitsRef = ref(db, "portfolio/visits");
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

    // Increment once per browser session
    if (!alreadyCounted) {
      runTransaction(visitsRef, (current) => (current ?? 0) + 1)
        .then(() => {
          sessionStorage.setItem(SESSION_KEY, "1");
        })
        .catch(console.error);
    }

    // Real-time listener — always shows the live count
    const unsub = onValue(visitsRef, (snapshot) => {
      const value: number = snapshot.val() ?? 0;
      setCount(value);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { count, loading };
};
