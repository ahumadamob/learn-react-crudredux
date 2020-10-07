import {
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR
} from '../types';

// Cada reducer tiene su propio State
const initialState = {
    products: [],
    error: null,
    loading: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case PRODUCT_ADD:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case PRODUCT_ADD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}