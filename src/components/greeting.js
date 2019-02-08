import React, { Component } from 'react'; //component is a named export; component is part of React
//for a react class component you have to have render method
class Greeting extends Component {
    render(){
        //console.log('Greeting Props:', this.props);

        return (
            <h1>Hello {this.props.name}, Welcome to our Site!</h1>
        );
    }
}

export default Greeting;

