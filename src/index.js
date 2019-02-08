import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
//components
//app component - starting point
//functional component - build from function
//components always start with capital letter - must return some type of jsx - accept one props
//the point of component is so you can use it like html
//components - reusable
//in react - everything is falthy won't render


/*
<Greeting name="Ben Smith" age="34" food="pizza"/>
<Greeting name="Robin Yung"/>
<Greeting />
 */

//if no closing tag, you have to put / to close it: <br/>
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
