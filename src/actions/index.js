//where the action creator go
//action is an object that return a action ; must have one required property which is type

import types from './types';

/*
export function exampleAction(){
    return {
        type: 'example_action'
    }
}
*/
//action creator; every action creactor need type property
export function tick(){
    return {
        type: types.TICK,//type is always set to a string
        payload: new Date().toLocaleTimeString()
    }
}

export function changeTextColor(){
    //console.log('changecolor called:');
    return {
        type: types.CHANGE_COLOR,
        color: randomColor()
    }
}

function randomColor(){
    const r = randomRgbValue();
    const g = randomRgbValue();
    const b = randomRgbValue();
    return `rgb(${r}, ${g}, ${b})`;
}

function randomRgbValue(){
    return Math.floor(Math.random() * (255 + 1));
}