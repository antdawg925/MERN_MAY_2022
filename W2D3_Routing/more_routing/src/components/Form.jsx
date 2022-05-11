import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [name, setName] = useState("");
    const [num, setNum] = useState(1);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(name, num);
        navigate(`/${name}/${num}`)
        // navigate("/a/b");
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <p>
                {JSON.stringify(name)}<br/>
                {JSON.stringify(num)}
            </p>

            name: <input onChange={(e) => setName(e.target.value)} value={name}/><br />
            number: <input onChange={(e) => setNum(e.target.value)} value={num}/>
            <p></p>
            <button>submit</button>
        </form>
    )
}

export default Form