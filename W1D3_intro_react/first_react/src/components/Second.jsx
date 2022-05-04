import React, {Component}from "react";

class Second extends Component {

    render() {
        console.log(this.props);
        return (
            <fieldset>
                <legend>Second.jsx</legend>
                🎈🎈🎈🎈 hello {this.props.person.name}
                <hr />
                <p>
                    what is this.props?<br/>
                    {JSON.stringify(this.props)}
                </p>
            </fieldset>
        )
    }
}

export default Second;