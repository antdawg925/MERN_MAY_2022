import './App.css';
import React, { useState, useEffect } from 'react';
// import Axios
import axios from 'axios';

function App() {

  const [heroes, setHeroes] = useState([]);

  // ---- useEffect ----
  // USEEFFECT TRIGGERS A F T E R   THE COMPONENT HAS FINISHED LOADING
  useEffect( () => {
      axiosFetch();
      // axios.get("https://akabab.github.io/superhero-api/api/all.json")
      // .then( res => {
      //   // AXIOS WRAPS OUT "DATA" in the .data key <---- !!!!!!
      //   // always log the response.data before setting it to state
      //   console.log(res.data);
      //   setHeroes(res.data);
      // })
      // .catch( err => console.log(err))
    
  }, []) // don't put state vars that are set inside useEffect!!!
  

  // vanilla JS Fetch request
  const fetchSuperheroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(someResponse => {
        return someResponse.json();
      }).then(someOtherRes => {
        console.log(someOtherRes);
        // set my state var here
        setHeroes(someOtherRes);

      }).catch(someErr => console.log(someErr))
  }

  // AXIOS request
  const axiosFetch = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then( res => {
        // AXIOS WRAPS OUT "DATA" in the .data key <---- !!!!!!
        // always log the response.data before setting it to state
        console.log(res.data);
        setHeroes(res.data);
      })
      .catch( err => console.log(err))
  }



  return (
    <div className="App">
      <h1>🦸‍♀️🦸‍♀️ SuperHeroes 🦹‍♀️🦹‍♂️</h1>
      <h4> fetch / Axios / useEffect()</h4>
      <button onClick={fetchSuperheroes}>fetch superheroes</button> | 
      <button onClick={axiosFetch}>Axios superheroes</button> 

      <hr />
      {/* heroes: {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>Hero name</th>
            <th>full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>

          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.md} width="70px" alt="" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
