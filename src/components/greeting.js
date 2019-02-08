//one component per file
//every single component need to import from react
import React from 'react';

function Greeting(props){
   console.log('Greeting Props: ', props);

    // let name = props.name;
    /*
        if(!name){
            //name = 'Guest';
            //it is returned and the function stops
            return <h1>You are not logged in, go away!</h1>;
        }
    */
//props is how you pass in information from outside world into our component
//destructuring: const user = props.user;
    const {user} = props;
    if(!user){
        return <h1>You are not logged in, go away!</h1>;
    }
    //everything is inline styled
    const style = {
        color: user.favColor || 'chartreuse'
    };
    return <h1 style={style}>Hello {user.firstName}, Welcome to our Site</h1>;
}

export default Greeting; //components always export default