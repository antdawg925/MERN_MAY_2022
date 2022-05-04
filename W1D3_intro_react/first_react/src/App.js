import './App.css';
import SomeClassComponent from "./components/SomeClassComponent";
import Second from './components/Second';
import Animal from './components/Animal';

function App() {
  console.log(
    "hello react"
  );
  const x = "hello from the function";

  const person = {
    name: "John",
    age: 37,
    favFood: "🍕"
  }
  //                  0          1           2
  const animals = ["tiger", "elephant", "zebra"];
  // document.getElementById()
  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>hello</h1>
        <div>
          {
            animals.map((a, i) => {
              return <Animal animal={a} key={i}/>
            })
          }

          {/* {
            animals.map((animal, idx) => {
              return (
                <div key={idx}>
                  <p>hello</p>
                  <li> {animal} </li>
                </div>
              )
            })
          } */}
        </div>
        <SomeClassComponent name={"john"} x={x}/>
        <Second person={person} animals={animals}/>
      </div>
    </fieldset>
  );
}

export default App;
