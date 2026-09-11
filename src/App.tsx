import { useEffect, useState } from "react";
import type { ITechnology } from "./Types/technologiestype";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import TechnologyCard from "./Componets/TechnologyCard";
import YourStack from "./Componets/YourStack";

const App = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [stack, setStack] = useState<ITechnology[]>([]);
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

  const handleAddToStack = (technology: ITechnology) => {
    const isAlreadyAdded = stack.some((item) => item.id === technology.id);

    if (isAlreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  stack={stack}
                  onAddToStack={handleAddToStack}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <YourStack stack={stack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
