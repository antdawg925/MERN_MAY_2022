import React, { useState } from 'react'

const Form = (props) => {

    const [input, setInput] = useState("🦅");
    // console.log(props);

    // function to submit the form
    const formHandler = (e) => {
        e.preventDefault();
        props.addAnimal(input);
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>

            <form onSubmit={formHandler}>
                <p>
                    {JSON.stringify(input)}
                </p>
                add animal: <input onChange={(e) => setInput(e.target.value)} value={input}/>
                <button>add</button>
            </form>

        </fieldset>
    )
}

export default Form