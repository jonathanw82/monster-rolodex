import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "123"
        },
        {
          name: "Dracula",
          id: "456"
        },
        {
          name: "Zombie",
          id: "789"
        }
      ]
    };
  }


  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)
      }
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>My Name is Jon</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
