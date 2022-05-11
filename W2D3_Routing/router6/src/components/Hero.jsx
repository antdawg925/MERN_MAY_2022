import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const Hero = (props) => {

    const [hero, setHero] = useState(null);

    const navigate = useNavigate()

    // this is how we extract keys from the route
    // const {unicornId, whatever} = useParams();
    // console.log(unicornId, whatever);
    const {unicornId} = useParams();
    console.log(unicornId);
    
    useEffect( () => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${unicornId}.json`)
            .then( res => {
                console.log(res.data);
                setHero(res.data);
            })
            .catch( err => {
                console.log(err)
                console.log("❌❌❌❌❌❌")
                navigate("/error", {replace: true})
            })
    }, [])

    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            {/* {JSON.stringify(hero)} */}
            <hr />
            {
                hero ? (
                    <>
                        <h3>{hero.name}</h3>
                        <img src={hero.images.md} height="200" alt="" />
                        <p>
                            publisher: {hero.biography.publisher}
                        </p>
                    </>
                ) : "loading"
        }
        </fieldset>
    )
}

export default Hero