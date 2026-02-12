"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/firebase/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { Dot, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import z, { number } from "zod";
import { toast } from "sonner";
import { useState } from "react";

const roomSchema = z.object({
  name: z
    .string()
    .min(2, "Xona nomi kamida 2 ta xarifdan iborat bolsin")
    .max(30, "xona nomi maximum 30 ta xarifdan iborat bolsin!"),
  price: z
    .number()
    .min(5, "Xona narxi eng kamida 5000 so'm bolsin")
    .max(150, "Xona narxi maximum 150.000 so'm bolsin!"),
});

type Inputs = z.infer<typeof roomSchema>;

interface FullRoomData extends Inputs {
  isBusy: boolean;
  createdAt: Date;
}

export function RoomsModal() {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(roomSchema),
  });
  const onsubmit = async (data: Inputs) => {
    try {
      const roomData: FullRoomData = {
        ...data,
        isBusy: false,
        createdAt: new Date(),
      };
      await addDoc(collection(db, "rooms"), roomData);
      toast.success("Xona muvoffaqiyatli qo'shildi" + " " + data.name);
      reset({
        name: "",
        price: 0,
      });
      setOpenModal(false);
    } catch (error) {
      console.error("xatolik yuz berdi" + error);
    }
  };

  return (
    <Dialog open={openModal}>
      <DialogTrigger asChild>
        <Button
          variant={"gradiand"}
          className="flex items-center"
          onClick={() => setOpenModal(!openModal)}
        >
          <Plus />
          Xona qo'shish
        </Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit(onsubmit)} id="form">
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Yangi xona qo'shish</DialogTitle>
            <DialogDescription>
              Xona qo'shishda etiborli boling!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Xona nomi</Label>
              <Input
                id="name-1"
                {...register("name", { required: true })}
                placeholder="Xona nomini kriting"
              />
              {errors.name && (
                <p className="flex items-center text-sm text-red-500 animate-pulse">
                  <Dot className="animate-ping" /> {errors.name.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="price-1">Xona narxi</Label>
              <div className="relative flex items-center">
                <Input
                  id="price-1"
                  type="number"
                  className="pr-16"
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="Masalan:(10)"
                />
                <span className="absolute right-3 text-muted-foreground pointer-events-none border-l pl-2">
                  .000
                </span>
              </div>
              {errors.price && (
                <p className="flex items-center text-sm text-red-500 animate-pulse">
                  <Dot className="animate-ping" /> {errors.price.message}
                </p>
              )}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Bekor qlish
              </Button>
            </DialogClose>
            <Button type="submit" form="form" variant={"gradiand"}>
              Yaratish
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
