import './App.css';
import React, { useState } from 'react';
import Person from './components/Person';

function App() {

  const animals = ["zebra", "elephant", "lion"];

  //     state     change
  //                state      default state
  const [people, elephant] = useState([
    {
      name: "john",
      favFood: "🍕"
    },
    {
      name: "Jonathan",
      favFood: "🍣"
    }, {
      name: "Tony",
      favFood: "🍕"
    }
  ])

  // const people = [
  //   {
  //     name: "john",
  //     favFood: "🍕"
  //   },
  //   {
  //     name: "Jonathan",
  //     favFood: "🍣"
  //   }, {
  //     name: "Tony",
  //     favFood: "🍕"
  //   }
  // ]

  return (
    <div className="App">
      <Person people={people} animals={animals} />
    </div>
  );
}

export default App;
