import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [number, setNumber] = useState(1)

    // using navigate to programmatically go to another ROUTE
    const navigate = useNavigate();

    const submitHeroId = (e) => {
        e.preventDefault();
        console.log(number);

        // this is how we go to a route form a function
        // navigate("/hero/"+number);
        navigate(`/hero/${number}`);
    }


    const goBack = () =>{ 
        navigate(-1);
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <p>
                {JSON.stringify(number)}
            </p>

            <form onSubmit={submitHeroId}>
                <input
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    type="number"
                    min="1"
                />
                <button>enter</button>
            </form>

            <p>
                <button onClick={goBack}>GO BACK</button>
            </p>
        </fieldset>
    )
}

export default Form