import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Home = (props) => {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes")
            .then(res => {
                console.log(res.data);
                setJokes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Home.jsx</legend>
            <div>
                {/* { JSON.stringify(jokes)} */}
                {
                    jokes.map( (joke, idx) => {
                        return (
                            <div key={joke._id}>
                               <p>
                                   setup: {joke.setup}
                               </p>
                               <p>
                                   punchline: {joke.punchline}
                               </p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default Home