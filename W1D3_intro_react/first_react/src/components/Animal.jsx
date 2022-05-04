import React, {Component} from "react";


class Animal extends Component{

    render() {
        const person = {
            name: "John",
            age: 37,
            favFood: "🍕"
          }
        return (
            <>
                <div>{this.props.animal}</div>

            </>
        )
    }
}

export default Animal;