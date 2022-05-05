import React, { useState } from 'react'

const Person = (props) => {
    // const people = props.people;
    // const {people} = props;
    // console.log(props);
    
    // CREATE STATE in Functional Comp
    //    state
    //      |       change state
    //      V             V                   default state
    const [animals, setAnimals] = useState(props.animals)

    const addMonkey = () => {
        const copyAnimalsArray = [...animals];
        copyAnimalsArray.push("🐵")
        setAnimals(copyAnimalsArray);

        // setAnimals([...animals, "🐵"]);
    }

    return (
        <div>
            <p>
                {JSON.stringify(props.people)}
            </p>
            <hr />
            <>
                {
                    props.people.filter((e, i) => {
                        return e.favFood === "🍕"
                    }).map((p, i) => {
                        return <div key={i}>
                            <li>{p.name}</li>
                        </div>
                    })
                }
            </>
            <p>
                {JSON.stringify(animals)}
            </p>
            <button onClick={() => addMonkey()}>add "🐵"</button>
            <p>
                <input onChange={(e) => console.log(e.target.value)} />
            </p>


        </div>
    )
}

export default Person;