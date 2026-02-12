"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetRooms } from "@/hooks/useGet";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Clock, Edit, LoaderIcon, Settings, TrashIcon } from "lucide-react";

import { useState } from "react";
import Loading from "../Loading";
import { useDeleteRoom } from "@/hooks/useDelete";
import { toast } from "sonner";
import { EditRoom } from "../editeRoom";

type Room = {
  name: string;
  price: number;
  isBusy: boolean;
  id: string;
};

export function RoomsTable() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useGetRooms<Room>();
  const { deleteRoom, load } = useDeleteRoom();

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (room: Room) => {
    try {
      deleteRoom(room.id);
      toast.success(`${room.name} muvoffaqiyatli o'chrildi`);
    } catch (error) {}

    console.log(room);
  };

  function handleEdit(room: Room) {
    console.log(room.name);
    setModal(true);
  }

  return (
    <>
      <EditRoom setModal={setModal} modal={modal} />
      <Table className="w-10/12 mx-auto mt-5">
        <TableCaption>Xonalar ro'yxati</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Xona nomi:</TableHead>
            <TableHead>Holati:</TableHead>
            <TableHead>Narxi:</TableHead>
            <TableHead className="text-right">Sozlamalar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((room, i) => (
            <TableRow key={i + 1}>
              <TableCell className="font-medium">{room.name}</TableCell>
              <TableCell>
                {room.isBusy ? (
                  <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20 select-none">
                    Band
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20 select-none">
                    Bo'sh
                  </span>
                )}
              </TableCell>
              <TableCell>{room.price.toFixed(3)}</TableCell>
              <TableCell
                className="flex justify-end"
                onClick={() => setOpen(true)}
              >
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Settings size={20} className="cursor-pointer" />
                    </MenubarTrigger>
                    <MenubarContent className="absolute bottom-0 right-0">
                      <MenubarGroup>
                        <MenubarItem>
                          <Clock />
                          Sesiya boshlash
                        </MenubarItem>
                        <MenubarItem onClick={() => handleEdit(room)}>
                          <Edit />
                          Tahrirlash
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem
                          variant="destructive"
                          onClick={() => handleDelete(room)}
                        >
                          {load ? (
                            <span className="flex items-center gap-2">
                              <LoaderIcon className="animate-spin text-red-500" />
                              O'chrilmoqda
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <TrashIcon className="text-red-400" /> O'chrish
                            </span>
                          )}
                        </MenubarItem>
                      </MenubarGroup>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
