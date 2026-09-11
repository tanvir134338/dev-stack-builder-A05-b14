import { useEffect, useState } from "react";
import type { ITechnology } from "./Types/technologiestype";
import Navbar from "./Componets/Navbar";

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
    <Navbar/>
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">
        Dev Stack Builder
      </h1>

      <p className="text-center mt-5">
        Total Technologies: {technologies.length}
      </p>
    </div>
    </>
  );
};

export default App;