import { Spinner } from "../ui/spinner";

function Loading() {
  return (
    <div className="w-full h-80 flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default Loading;
