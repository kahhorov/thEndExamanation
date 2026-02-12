import { RoomsModal } from "@/components/RoomsModal";
import { RoomsTable } from "@/components/roomsTabe";

function Rooms() {
  return (
    <div className="h-full">
      <div className="flex justify-end">
        <RoomsModal />
      </div>
      <RoomsTable />
    </div>
  );
}

export default Rooms;
