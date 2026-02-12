export function RoomCard() {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Background Image with heavy blur */}
      <img
        src="/room.png"
        alt="Gaming Room"
        className="absolute inset-0 w-full h-full object-cover filter blur-3xl scale-110"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card content */}
      <div className="relative p-6 flex flex-col justify-end h-64">
        <h2 className="text-white text-2xl font-bold">VIP Room</h2>
        <span className="inline-block mt-2 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
          Available
        </span>
        <p className="text-white mt-4 text-lg">€12 / hour</p>

        <div className="flex mt-4 space-x-2">
          <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
            Edit
          </button>
          <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">
            Delete
          </button>
          <button className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-500">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
