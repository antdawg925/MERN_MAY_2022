import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Hero = (props) => {

  const [someObj, setSomeObj] = useState(null);

  // intercept the url with it's KEY
  const { name, num } = useParams()
  console.log(name, num);

  useEffect(() => {
    axios.get("https://akabab.github.io/superhero-api/api/id/" + num + ".json")
      .then(unicornRes => {
        console.log(unicornRes.data);
        // set the state variable
        setSomeObj(unicornRes.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    // <h1 style={{color: "red"}}>{JSON.stringify(someObj)}</h1>
    <>
      {

        someObj ? (
          <div>

            <h3>{name} is {someObj.name}</h3>
            <p>
              <img src={someObj.images.md} height="200" alt="" />
            </p>
          </div>
        ) : "loading"
      }

    </>
  )
}

export default Hero