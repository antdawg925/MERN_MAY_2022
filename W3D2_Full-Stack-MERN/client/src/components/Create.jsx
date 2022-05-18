import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    const [errors, setErrors] = useState([]);


    const createNote = (e) => {
        e.preventDefault()

        const newNote = {
            title: title,
            content,
            isImportant
        }
        console.log(newNote);

        // POST to the DB with the obj
        axios.post("http://localhost:8000/api/notes", newNote)
            .then(res => {
                console.log(res.data);
                console.log("CLIENT SUCCESS!!!!");
                navigate("/notes");
            })
            .catch(err => {
                // TODO: when errors come from Server!
                console.log("❌ CLient ERROR");
                console.log("le error obj:", err);
                console.log(err.response.data.errors);

                // PLATFORM WAY
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // for (const key in errorResponse) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            {/* <p>
                {JSON.stringify(title)} <br />
                {JSON.stringify(content)} <br />
                {JSON.stringify(isImportant)}<br />
            </p> */}
            <hr />
            {/* <p>errors: {JSON.stringify(errors)}</p> */}
            <hr />
            <p>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            </p>
            <form onSubmit={createNote}>
                title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />

                content: <input onChange={(e) => setContent(e.target.value)} value={content} /> <br />

                <input type="checkbox" onChange={(e) => setIsImportant(e.target.checked)} checked={isImportant} /> is this important?<br />

                <button>Create</button>
            </form>

        </div>
    )
}

export default Create