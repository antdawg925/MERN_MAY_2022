import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import Form from './components/Form';

function App() {

  const [boxes, setBoxes] = useState(
    [
      { color: "red", status: true },
      { color: "green", status: false },
      { color: "blue", status: true },
    ]
  )

  // CREATE NEW BOX AND ADD TO OUR STATE
  const createBox = (newBoxObj) => {
    console.log(newBoxObj);

    // add this obj to our state
    setBoxes([...boxes, newBoxObj]);

    // alt way
    const copyBoxes = [...boxes];
    // copyBoxes.push(newBoxObj);
    // setBoxes(copyBoxes);

  }

  // CHANGE THE CHECKBOX
  const updateBox = (boxIdx) => {
    console.log(boxIdx);

    const copyBoxes = [...boxes];
    copyBoxes[boxIdx].status = !copyBoxes[boxIdx].status;
    setBoxes(copyBoxes);

    // if (copyBoxes[boxIdx].status === true) {
    //   copyBoxes[boxIdx].status = false;
    // } else {
    //   copyBoxes[boxIdx].status = true;
    // }
  }

  // DELETE
  const deleteBox = (boxIdx) => {
    console.log(boxIdx);
    
    const filteredBoxes = boxes.filter( (box, i) => {
      if (i === boxIdx) {
        return false 
      } else {
        return true
      }
    });
    // const filteredBoxes2 = boxes.filter((b, i) => i === boxIdx);

    setBoxes(filteredBoxes);
  }


  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <h1>Boxes 📦</h1>
        {JSON.stringify(boxes)}
        <hr />
        <Form createBox={createBox} />
        {
          boxes.map((box, i) => {
            return (
              <Box
                key={i}
                box={box}
                idx={i}
                updateBox={updateBox}
                deleteBox={deleteBox}
              />
            )
          })
        }
      </fieldset>
    </div>
  );
}

export default App;
