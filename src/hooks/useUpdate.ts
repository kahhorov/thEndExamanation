import { useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

type UpdateRoom = {
  roomId: string;
  newPrice?: number;
  roomName?: string;
  isBusy?: boolean;
};

function useUpdate() {
  const [loading, setLoading] = useState(false);

  const updateRoom = async ({
    roomId,
    newPrice,
    roomName,
    isBusy,
  }: UpdateRoom) => {
    setLoading(true);
    try {
      const roomRef = doc(db, "rooms", roomId);

      const updates: { [key: string]: any } = {};
      if (newPrice !== undefined) updates.price = newPrice;
      if (roomName !== undefined) updates.name = roomName;
      if (isBusy !== undefined) updates.isBusy = isBusy;

      await updateDoc(roomRef, updates);

      toast.success("Xona ma'lumotlari yangilandi!");
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Xona yangilashda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return { updateRoom, loading };
}

export default useUpdate;
