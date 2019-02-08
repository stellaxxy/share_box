import React, { Component } from 'react';

class Clock extends Component {
    /*
    //you can put state up here so you don't need to write constructor function
    //how you add property
    state = {
        currentTime: new Date().toLocaleTimeString()
    };
    */
    constructor(props){
        super(props);
        //do i need state? if i need state i need class
        //if no to the first question, ask if you need life cycle method, if you do, need class component
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        };//kind like pic in movie, information that you show to the user and need to be updated when changes should be in this;

    }
    //this.state can only be set once inside the constructor once, it cannot be changed anywhere else; react won't know the change;

    //constructor -> render -> componentDidMount
    componentDidMount(){
        console.log('Component Mounted');
//use fat arrow function here so 'this' won't get redefined
        setInterval(() => {
            this.tick();
        }, 1000);
    }
    //when state changes or when new props gets passed in it will call this method
    componentDidUpdate(prevProps, prevState){
       // console.log('Component Updated');

       // console.log('previous state:', prevState.currentTime);
       // console.log('current state:', this.state.currentTime);
    }

    componentWillUnmount(){} // will get called when the component dies
/*
alternative way to bind this

    tick = ()=>{
        //this.state.currentTime = new Date().toLocaleTimeString();
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }
*/
    tick(){
        //this.state.currentTime = new Date().toLocaleTimeString();
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }
    //can not call setSate in render , it will cause infinite loop
    //everytime you call setState it will call render

    render(){
        return (
            <h1>The Time Is: {this.state.currentTime}</h1>
        )
    }
}

export default Clock;