import types from '../actions/types';
//all reducers follow this template
const DEFAULT_STATE = {
  currentTime:  new Date().toLocaleTimeString()
};
//two parameter: what the state is before
function clockReducer(state = DEFAULT_STATE, action){//doenst matter what you do inside of this function; it take a state and an action to produce a new state
    switch(action.type){
        case types.TICK:
            return { ...state, currentTime: action.payload };
        default:
            return state;
    }
}

export default clockReducer;