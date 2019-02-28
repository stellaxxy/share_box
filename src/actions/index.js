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
        type: 'TICK'//type is always set to a string
    }
}