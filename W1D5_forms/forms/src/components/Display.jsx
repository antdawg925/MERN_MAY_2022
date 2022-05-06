import React from 'react'

const Display = (props) => {
    // console.log("DIsplay.jsx - props => ", props);
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        user passed here: {JSON.stringify(props)}
    </fieldset>
  )
}

export default Display