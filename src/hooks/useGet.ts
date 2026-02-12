"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export function useGetRooms<T>() {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const ref = collection(db, "rooms");
        const snap = await getDocs(ref);

        const rooms = snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as T),
        }));
        setData(rooms);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("No'malum error"));
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, [data]);

  return { data, loading, error };
}
