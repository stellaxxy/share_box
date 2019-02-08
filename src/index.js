import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
const user = {
    firstName: 'Patricia',
    lastName: 'Burns'
};

function fullName(user){
    return `${user.firstName} ${user.lastName}`;
}

//const greeting = <h1>Hi, Welcome to our Site</h1>;
//babel turn into the below lines
//const greeting = React.createElement('h1', {}, "Hi, Welcome to our site");
//as soon as you are inside of the jsx tag, everything inside is treated as strings
//{} jsx js expression - everything inside is doing js now
const greeting = <h1>Hello {fullName(user)}, Welcome to our Site</h1>;

//you cannot return 2 jsx at one time
// just like you cannot store 2 object in one variable or return 2 objects in one function
//have to return one single root element
// props - basically attributes in html
//put it in the () when there is multiple lines
const list = (
    <div>
        <h1>Grocery List</h1>
        <ol className='some-class'>
            <li>Milk</li>
            <li>Bread</li>
            <li>Diet Coke</li>
            <li>Chips</li>
        </ol>
    </div>
);

ReactDOM.render(
    list,
    document.getElementById('root')
);

/*
app.js is a component
all attributes are camel cased - jsx
jsx - can be used everywhere, anything you do with a object you can do with jsx
    - it is an object
    - use babel to translate jsx into object
    - const greeting = React.createElement('h1', {}, "Hi, Welcome to our site');
 */