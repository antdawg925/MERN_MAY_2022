import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {

    
    render() {

        console.log(this.props);

        return (
            <fieldset>
                <legend>SomeClassComponent.jsx</legend>
                <div>This is our first class component.</div>
                <p>
                    hello: {this.props.name}
                </p>
                <p>
                    {this.props.x}
                </p>
            </fieldset>
        )
    }
}
    
export default SomeClassComponent;