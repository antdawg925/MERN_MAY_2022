import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  // const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
  // const [list, setList] = useState(["pearl onions", "thyme", "cremini mushrooms", "butter"])

  const [users, setUsers] = useState([
    {
      username: "john",
      email: "j@j.com",
      color: "blue"
    },
    {
      username: "bob",
      email: "b@b.com",
      color: "red"
    }
  ])

  const addUser = (someUserObj) => {
    console.log("hello from app.js", someUserObj);
    
    // to add something to state we have to first make a copy
    const tempUsersArray = [...users]; // copy
    // push to the tempCopy
    tempUsersArray.push(someUserObj);
    // set the original to the copy - setState
    setUsers(tempUsersArray);

    // alt way
    // setUsers([...users, someUserObj])
  }

  return (
    <div className="App">
      <fieldset>
      <legend>App.js</legend>
      {JSON.stringify(users)}
      <hr />
      {
        users.map((user, idx) => {
          return (
            <div key={idx} style={{color: user.color }}>
              name: {user.username}
            </div>
          )
        })
      }
      <Form addUser={addUser} users={users}/>
      </fieldset>
    </div>
  );
}

export default App;
