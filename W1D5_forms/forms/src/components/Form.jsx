import React, { useState } from 'react';
import Display from './Display';

const Form = (props) => {
    // STATE VARIABLES
    const [username, setUsername] = useState("hello");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [newUserObj, setNewUserObj] = useState({});

    const createUser = (e) => {
        // console.log("submitted");
        // console.log(e);
        e.preventDefault();
        const newUser = { 
            username, 
            email, 
            password
        };
        console.log("Welcome", newUser);
        setNewUserObj(newUser);
    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            username: {JSON.stringify(username)}<br/>
            email: {JSON.stringify(email)}<br/>
            password: {JSON.stringify(password)}<br/>
        <hr />
        <p>
            {JSON.stringify(newUserObj)}
        </p>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button>submit </button>
            </form>
        <Display newUserObj={newUserObj}/>
        </fieldset>
    );
};

export default Form;