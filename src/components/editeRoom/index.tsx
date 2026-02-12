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
import React, { SetStateAction } from "react";

type Props = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function EditRoom({ setModal, modal }: Props) {
  //   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //     const form = e.target as HTMLFormElement;
  //     const formData = new FormData(form);
  //     const name = formData.get("name");
  //     const price = formData.get("price");
  //     console.log(name);
  //   }

  return (
    <Dialog open={modal}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Xonani tahrirlash</DialogTitle>
            <DialogDescription>
              Xonani nomi yoki narxini o'zgartrishingiz mumkin
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Nomi</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Xona nimini tahrirlang"
              />
            </Field>
            <Field>
              <Label htmlFor="price-1">Narxi</Label>
              <Input
                id="price-1"
                name="price"
                placeholder="Narxni tahrirlang"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setModal(false)}>
                Bekor qlish
              </Button>
            </DialogClose>
            <Button
              type="submit"
              variant={"gradiand"}
              onClick={() => alert("Hali edit tayyor emas")}
            >
              Yangilash
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
