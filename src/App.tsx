import { useEffect, useState } from "react";
import type { ITechnology } from "./Types/technologiestype";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import TechnologyCard from "./Componets/TechnologyCard";

const App = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: ITechnology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  console.log(technologies);

  if (loading) {
    return <h1 className="text-center mt-20">Loading technologies...</h1>;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;