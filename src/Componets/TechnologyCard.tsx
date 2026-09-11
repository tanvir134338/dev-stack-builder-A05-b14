import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../Types/technologiestype";

interface TechnologyCardProps {
  technology: ITechnology;
  stack: ITechnology[];
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  stack,
  onAddToStack,
}: TechnologyCardProps) => {
  const isAdded = stack.some((item) => item.id === technology.id);

  const badgeColors: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-500",
    Versatile: "bg-green-50 text-green-500",
    Fast: "bg-orange-50 text-orange-500",
    "SSR / Edge": "bg-purple-50 text-purple-500",
    Standard: "bg-green-50 text-green-500",
    "Top SQL": "bg-blue-50 text-blue-500",
    Cache: "bg-red-50 text-red-500",
    Ubiquitous: "bg-yellow-50 text-yellow-600",
    Essential: "bg-blue-50 text-blue-500",
    Robust: "bg-blue-50 text-blue-500",
    Modern: "bg-cyan-50 text-cyan-500",
    Containers: "bg-blue-50 text-blue-500",
  };

  return (
    <div
      className={`rounded-xl p-px ${
        isAdded
          ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500"
          : "bg-gray-200"
      }`}
    >
      <div className="rounded-[11px] p-4 bg-white shadow-sm">
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain"
          />

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              badgeColors[technology.badge]
            }`}
          >
            {technology.badge}
          </span>
        </div>

        <h3 className="text-lg font-semibold mt-4">
          {technology.name}
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-5">
          {technology.description}
        </p>

        <div className="flex items-center justify-between mt-4 text-xs font-semibold text-[#475569] ">
          <span className="px-2 py-1 rounded-md bg-gray-100">
            {technology.category}
          </span>

          <span className="text-gray-500">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 text-black font-semibold">
            <FaStar className="text-sm text-[#FBBF24]"  />
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`w-full mt-4 py-2 rounded-lg text-sm cursor-pointer ${
            isAdded
              ? "bg-linear-to-r from-orange-400 via-pink-400 to-violet-400 text-black cursor-not-allowed font-semibold"
              : "bg-gray-900 text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;