import React, { useState } from 'react'
import Display from './Display';

const Form = (props) => {
    const [username, setUsername] = useState("default");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("yellow");

    const [myObj, setMyObj] = useState({
        username: "",
        email: ""
    })

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, color };
        console.log("Welcome", newUser);
        
        // calling the function fromm app.js that came from props
        props.addUser(newUser);
    };

    // ALT WAY
    // const allInputs = (e) => {
    //     // console.log(e);
    //     setMyObj({
    //         ...myObj,
    //         [e.target.name] : e.target.value
    //     })
    // }

    return (
        <fieldset>
            <p>
                {JSON.stringify(username)} <br/>
                {JSON.stringify(email)} <br/>
            </p>

            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} />
                    {/* <input name="username" onChange={(e) => allInputs(e)} value={myObj.username}  /> */}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}/>
                    {/* <input name="email" onChange={(e) => allInputs(e)}  value={myObj.email}/> */}
                </div>
                <div>
                    <label>color: </label>
                    <input onChange={(e) => setColor(e.target.value)} value={color}/>
                </div>

                <button>create</button>
                <p>
                    {/* {JSON.stringify(myObj)} */}
                </p>
            </form>
            <hr />
            <Display users={props.users}/>
        </fieldset>
    );
};

export default Form;