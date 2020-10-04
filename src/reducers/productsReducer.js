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
        default:
            return state;
    }
}