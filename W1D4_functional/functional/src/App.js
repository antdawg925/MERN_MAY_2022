import './App.css';
import ClassComponent from './components/ClassComponent';

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
      <ClassComponent person={person} num={10}/>
    </div>
  );
}

export default App;
