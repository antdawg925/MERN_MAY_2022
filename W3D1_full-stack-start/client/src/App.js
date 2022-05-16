import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pets, setPets] = useState([])
  const [name, setName] = useState("bob")
  const [species, setSpecies] = useState("")
  const [age, setAge] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log(res.data);
        setPets(res.data)
      })
      .catch(err => {
        console.log("❌❌❌", err);
      })
  }, [])

  // function to submit and create a pet
  const createPet = (e) => {
    e.preventDefault()

    // create the obj
    const newPet = {
      name: name,
      age: age,
      species,
      color
    }
    console.log(newPet);

    // go to the server and pass the obj using post
    // match the post route with SERVER ROUTE
    axios.post("http://localhost:8000/api/pets", newPet)
      .then(res => {
        console.log("⭐⭐⭐ SUCCESS", res.data);
      })
      .catch(err => {
        console.log("ERROR 🔴🔴🔴🔴", err);
      })
  }

  return (
    <div className="App">
      <h1>PETS</h1>
      <hr />
      <p>
        name: {JSON.stringify(name)}<br />
        species: {JSON.stringify(species)}<br />
        age: {JSON.stringify(age)}<br />
        color: {JSON.stringify(color)}<br />
      </p>

      <form onSubmit={createPet}>
        name: <input onChange={(e) => setName(e.target.value)} value={name} /> <br />
        species: <input onChange={(e) => setSpecies(e.target.value)} value={species} /> <br />
        age: <input type="number" onChange={(e) => setAge(e.target.value)} value={age} /> <br />
        color: <input onChange={(e) => setColor(e.target.value)} value={color} /> <br />
        <button>create pet</button>
      </form>

      <hr />
      {
        pets.map((pet, idx) => {
          return <div key={pet._id}>
            <h5 style={{color: pet.color}}>
              {pet.name}
            </h5>
            {/* <Link to={`/pets/${pet._id}`}>like to one</Link> */}
            <li>{pet.species}</li>
            <hr />
          </div>
        })
      }
    </div>
  );
}

export default App;
