import type { ITechnology } from "../Types/technologiestype";
import { GoStarFill } from "react-icons/go";

interface TechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const badgeColors: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-500",
    Versatile: "bg-green-50 text-green-500",
    Fast: "bg-orange-50 text-orange-500",
    "Full-Stack": "bg-purple-50 text-purple-600",
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
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />

        <span
          className={`text-xs px-2 py-1 rounded-full font-semibold ${
            badgeColors[technology.badge]
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <h3 className="text-lg font-semibold mt-4">{technology.name}</h3>

      <p className="text-sm text-[#475569] mt-2 leading-5">
        {technology.description}
      </p>

      <div className="flex items-center justify-between mt-4 text-xs">
        <span className="px-2 py-1 rounded-md bg-[#F1F5F9] text-[#475569] ">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="flex items-center gap-1 text-black font-semibold">
          <GoStarFill className="text-sm text-[#FBBF24]" />
          {technology.rating}
        </span>
      </div>

      <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg text-sm cursor-pointer">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
