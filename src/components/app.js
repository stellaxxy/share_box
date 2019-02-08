import React from 'react';
import Header from './header';
import Greeting from './greeting';
import Navbar from './navbar';
import List from './list';
import '../assets/css/app.scss'; //import an entire file (css), everytime you import css file, it  doesn't matter where you import it, it is going to applied to everything

const user = {
    firstName: 'Jim',
    lastName: 'Fowler',
    favColor: 'hotpink'
};

const groceries = [
    'Apple',
    'Spinach',
    'Avocado',
    'Juice',
    'Broccoli',
    'Egg'
];

const websites = [
    'https://google.com',
    'https://youtube.com',
    'https://github.com'
];

//components has to start with Capitalized letter because that is how react differentiates components from normal html tag
//we didn't pass in the props here because we are not using props in the function
const App = () => {
    return (
      <div>
          <Navbar/>
          <Header/>
          <Greeting user={user}/>
          <List>
              <li>Apple</li>
              <li>Avocado</li>
              <li>Spinach</li>
          </List>
          <List>
              <li>
                  <a href="https://google.com">Google</a>
              </li>
              <li>
                  <a href="https://github.com">GitHub</a>
              </li>
          </List>
      </div>
    );
};

export default App;



//<List list={groceries}/>
//<List list={websites}/>