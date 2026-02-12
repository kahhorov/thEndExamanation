"use client";

import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const useDeleteRoom = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteRoom = async (roomId: string) => {
    setLoad(true);
    setError(null);

    try {
      await deleteDoc(doc(db, "rooms", roomId));
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("No'malum error"));
      }
    } finally {
      setLoad(false);
    }
  };

  return {
    deleteRoom,
    load,
    error,
  };
};
