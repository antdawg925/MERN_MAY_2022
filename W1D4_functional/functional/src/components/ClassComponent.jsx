import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            // num: 33,
            num: this.props.num,
            food: "🍕",
            person: this.props.person
        }
    }

    increaseNum = () => {
        console.log("clicked");
        this.setState({
            num: this.state.num + 1
        }, () => console.log(this.state.num))
        // console.log(this.state.num);
    }

    // happyBirthday() {
    happyBirthday = () => {
        console.log("clicked");
        console.log(this.state.person);
        //    what problem does this cause?
        this.setState({
            person: {
                ...this.state.person,
                age: this.state.person.age + 1
            }
        })
    }

    render() {
        return (
            <fieldset>
                <legend>ClassComponent.jsx</legend>
                {JSON.stringify(this.state)}
                <hr />
                {JSON.stringify(this.state.person)}

                <p>
                    {/* {JSON.stringify(this.props)} */}
                    num: {this.state.num}
                </p>
                <button onClick={() => this.increaseNum()}>click me</button>

                <hr />

                <h2>Person Object</h2>
                {JSON.stringify(this.state.person)}
                <button onClick={() => this.happyBirthday()}>Happy birthday 🎉</button>

            </fieldset>
        )
    }
}

export default ClassComponent;