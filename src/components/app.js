import React from 'react';
import Greeting from './greeting';
import Clock from './clock';
import Modal from './modal/modal';
import '../assets/css/app.scss';


const App = () => (
    <div>
        <Greeting name="Jim Bob"/>
        <Clock/>
        <Modal/>
    </div>
);

export default App;
