import React, {useState} from 'react'

const Form = (props) => {

    const [newColor, setNewColor] = useState("red");

    const submitColor = (e) => {
        e.preventDefault();
        const newBoxObj = {color: newColor};
        props.createBox(newBoxObj);
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            newColor: {newColor}

            <form onSubmit={submitColor}>
                color: <input type="color" onChange={ (u) => setNewColor(u.target.value)} value={newColor}/>
                <button>add</button>
            </form>

        </fieldset>
    )
}

export default Form