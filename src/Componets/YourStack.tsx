import type { ITechnology } from "../Types/technologiestype";

interface YourStackProps {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <h2 className="text-lg font-semibold">Your Stack</h2>

      <p className="text-xs text-gray-400 mt-1">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-gray-200 rounded-lg mt-5 p-6 text-center">
          <p className="text-sm text-gray-400">No technologies selected yet.</p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-100 rounded-lg p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8 object-contain"
              />

              <div className="flex-1">
                <h3 className="text-sm font-medium">{technology.name}</h3>

                <p className="text-xs text-gray-400">{technology.category}</p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 hover:text-red-500 cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-2 py-2 text-sm text-red-500 border border-red-200 rounded-lg cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
