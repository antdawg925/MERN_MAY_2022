// rafce
import React, { useState } from "react";

const FunctionalComponent = (props) => {
    // console.log("😎 functional -> ", props);
    // const myNum = props.num;
    // const {num} = props
    console.log("hello 😎");
    // CREATE STATE in Functional Component
    //    state
    //      |     change state
    //      V        V            default state
    const [myNum, setMyNum] = useState(props.num);

    const [person, setPerson] = useState({
        name: "Bob",
        favFood: "🍝",
        age: 45
    })

    const increaseAge = () => {
        // function to change state
        setMyNum(myNum + 1)
        // cannot log the state here because setState is async
        // console.log(myNum);

        setPerson({
            ...person,
            age: person.age + 1
        })
    }

    return (
        <fieldset>
            <legend>FUNCTIONAL</legend>
            😎😎😎😎
            <br />
            {/* num from props: {props.num} <br/>
            myNum : {myNum} <br/>
            num: {num} */}
            {JSON.stringify(myNum)} <br/>
            {JSON.stringify(person)}
            <p>
                <button onClick={() => increaseAge()}>functional click</button>
            </p>
            <p>
                person age: {person.age}
            </p>
            <p>
                {
                    person.age > 50 ? <span>you are wise 🎈</span> : "keep clicking" 
                }
            </p>
        </fieldset>
    )
}

export default FunctionalComponent;