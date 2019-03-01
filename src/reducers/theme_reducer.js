import types from '../actions/types';

const DEFAULT_STATE = {
    textColor: 'yellow'
};

export default (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case types.CHANGE_COLOR:
            return { ...state, textColor: action.color };
        default:
            return state;
    }
}
