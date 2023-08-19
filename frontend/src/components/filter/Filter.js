import "./Filter.css";
import { useEffect } from "react";

function Filter({
  activeSneakers,
  setActiveSneakers,
  setFilter,
  sneakercollection,
}) {
  useEffect(() => {
    if (activeSneakers === 0) {
      setFilter(sneakercollection);
      return;
    }
    const filteredSneakers = sneakercollection.filter((sneaker) =>
      sneaker.genre_ids.includes(activeSneakers)
    );
    setFilter(filteredSneakers);
  }, [activeSneakers, setFilter, sneakercollection]);

  return (
    <div className="filter-sneakers">
      <button
        className={activeSneakers === 0 ? "active" : ""}
        onClick={() => setActiveSneakers(0)}
      >
        All
      </button>
      <button
        className={activeSneakers === 35 ? "active" : ""}
        onClick={() => setActiveSneakers(35)}
      >
        Yeezy
      </button>
      <button
        className={activeSneakers === 28 ? "active" : ""}
        onClick={() => setActiveSneakers(28)}
      >
        Jordan
      </button>
      <button
        className={activeSneakers === 14 ? "active" : ""}
        onClick={() => setActiveSneakers(14)}
      >
        Nike
      </button>
      <button
        className={activeSneakers === 80 ? "active" : ""}
        onClick={() => setActiveSneakers(80)}
      >
        Others
      </button>
    </div>
  );
}

export default Filter;
