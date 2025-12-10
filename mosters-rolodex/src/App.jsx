import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search -box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstares, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
        setFilteredMonsters(data);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchSring = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchSring)
    );
    setFilteredMonsters(newFilteredMonsters);
  };

  return (
    <div className='app-container'>
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonstares} />
    </div>
  );
};

export default App;
