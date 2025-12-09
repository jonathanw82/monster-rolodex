import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setMonsters(data))
  }, []);

  return (
    <>
     <CardList monsters={monsters}/>
    </>
  );
};

export default App;
