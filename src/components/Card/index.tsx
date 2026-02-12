import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RoomCard() {
  return (
    <Card className="max-w-80 py-0 pb-5 px-4 relative bg-linear-to-r from-[#111623e3] to-[#1a1c29b6]">
      <div />
      <img src="/room.png" alt="room img" className="rounded-md" />
      <CardHeader className="text-white absolute top-5 translate-y-1/2">
        <CardAction>
          <h1 className="font-black">1-Xona</h1>
          <Badge>Featured</Badge>
        </CardAction>
      </CardHeader>
      {/* <CardFooter className="absolute mt-10 bottom-0 left-0 w-full border-t">
        <Button className="w-full">View Event</Button>
      </CardFooter> */}
    </Card>
  );
}
