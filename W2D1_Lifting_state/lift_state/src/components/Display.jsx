import React from 'react'

const Display = (props) => {

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {/* {JSON.stringify(props)} */}
            {
                props.animals.map((eachOneAnimal, index) => {
                    return <li key={index}>
                        {eachOneAnimal}
                    </li>
                })
            }
        </fieldset>
    )
}

export default Display