import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate()

    const [setup, setSetup] = useState("")
    const [punchline, setPunchline] = useState("")
    const [errors, setErrors] = useState([]);


    const createJoke = (e) => {
        e.preventDefault();

        const newJoke = {
            setup,
            punchline
        }

        axios.post("http://localhost:8000/api/jokes/new", newJoke)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    return (
        <fieldset>
            <legend>Create</legend>
            <p>
                {JSON.stringify(setup)} :
                {JSON.stringify(punchline)}
            </p>
            <div>
                {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}

            </div>

            <form onSubmit={createJoke}>
                setup: <input onChange={e => setSetup(e.target.value)} value={setup} /> <br />
                punchline: <input onChange={e => setPunchline(e.target.value)} value={punchline} /> <br />
                <button>submit</button>
            </form>
        </fieldset>
    )
}

export default Create