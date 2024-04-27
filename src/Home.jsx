import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees);

  return (
    <div className="my-24">
      <h1>Coffees Quantity : {coffees.length}</h1>

      <div className="grid grid-cols-2  gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
