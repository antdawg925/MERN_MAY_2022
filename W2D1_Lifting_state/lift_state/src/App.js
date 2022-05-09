import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"]);

  // const [input, setInput] = useState("");

  // function to submit the form
  const addAnimal = (someNewAnimal) => {
    console.log(someNewAnimal);

    // to append something to our state array
    // 1. copy the array - bc state in react is immutable
    const copyAnimals = [...animals];

    // 2. append to the COPY
    copyAnimals.push(someNewAnimal)
    // console.log(copyAnimals);

    // 3. set the new array as the new state
    setAnimals(copyAnimals);

    // alternative
    // setAnimals([...animals, input])


  }

  return (
    <div className="App">
      {JSON.stringify(animals)}
      <hr />

      <Form addAnimal={addAnimal} />

      <hr />
      <Display animals={animals} />
    </div>
  );
}

export default App;
