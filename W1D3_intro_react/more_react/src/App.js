import './App.css';
import ClickComponent from './components/ClickComponent';

function App() {

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  return (
    <div className="App">
      <p>
        {JSON.stringify(person)}
      </p>
      {/* hello {person.name} */}
      <ClickComponent person={person} num={10}/>
      <ClickComponent person={person} num={10}/>
    </div>
  );
}

export default App;
