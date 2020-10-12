import { ALERT_SHOW, ALERT_HIDE } from '../types';

const initialState = {
    alert: null
}

export default function(state = initialState, action){
    switch(action.type){
        case ALERT_SHOW:
            return {
                ...state,
                alert: action.payload
            }
        default:
            return state;
    }
}