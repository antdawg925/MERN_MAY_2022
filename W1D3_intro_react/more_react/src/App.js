import './App.css';
import ClickComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  // copying an object
  const personCopy = {...person}

  return (
    <div className="App">
      <p>
        {JSON.stringify(person)}
      </p>
      {/* hello {person.name} */}
      <ClickComponent person={person} num={10}/>
      <hr />
      <FunctionalComponent num={10} person={person}/>
    </div>
  );
}

export default App;
