import { Gamepad2, PanelLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
function Navbar({ setIsOpen, isOpen }: Props) {
  return (
    <nav className="flex gap-4 items-center">
      <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
        <PanelLeft className="font-light text-gray-600" />
      </Button>
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
      </Avatar>
    </nav>
  );
}

export default Navbar;
