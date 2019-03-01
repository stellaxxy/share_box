//responsible for a chunk of state; isolate chunks of data
//manage state
//reducer is where the action goes

//root reducer
//all the reducers comes here
//when use redux, you dont have to use class component because you can access redux state using functional component

import { combineReducers } from 'redux';
import clockReducer from './clock_reducer';
import themeReducer from './theme_reducer';

//this is like templating your state object
/*
essentially blueprint your state here
//State:
  const exampleState = {
       clock: {
            currentTime: '1:23:00 PM'
       },
       theme: {
            textColor: 'yellow'
       }
    }
    */
const rootReducer = combineReducers({
    clock: clockReducer,
    theme: themeReducer
});

export default rootReducer;
