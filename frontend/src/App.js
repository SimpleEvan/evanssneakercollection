import "./App.css";
import Sneaker from "./components/sneaker/Sneaker";
import Filter from "./components/filter/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [sneakercollection, setSneakers] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeSneakers, setActiveSneakers] = useState(0);

  useEffect(() => {
    fetchSneakers();
  }, []);

  const fetchSneakers = async () => {
    const response = await fetch("https://azure.function.webhook");
    const sneakers = await response.json();
    setSneakers(sneakers.results);
    setFilter(sneakers.results);
  };

  return (
    <div className="App">
      <motion.div animate={{ y: 20 }} className="title">
        <h1>Welcome to Evan's Sneaker Collection</h1>
      </motion.div>
      <Filter
        sneakercollection={sneakercollection}
        setFilter={setFilter}
        activeSneakers={activeSneakers}
        setActiveSneakers={setActiveSneakers}
      />
      <div className="sneaker-collection">
        <AnimatePresence>
          {filter.map((sneaker) => (
            <Sneaker key={sneaker.id} sneaker={sneaker} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
