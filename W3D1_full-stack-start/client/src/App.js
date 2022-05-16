import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [pets, setPets] = useState([])

  useEffect( ()=>{
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log(res.data);
        setPets(res.data)
      })
      .catch(err => {
        console.log("❌❌❌", err);
      })
  }, [])

  return (
    <div className="App">
      <h1>PETS</h1>

      {
        pets.map((pet, idx) => {
          return <li key={pet._id}> {pet.name}</li>
        })
      }
    </div>
  );
}

export default App;
