import {
    PRODUCT_ADD, PRODUCT_ADD_SUCCESS, PRODUCT_ADD_ERROR,
    PRODUCT_GET, PRODUCT_GET_SUCCESS, PRODUCT_GET_ERROR,
    PRODUCT_DELETE, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_ERROR
} from '../types';

// Cada reducer tiene su propio State
const initialState = {
    products: [],
    error: null,
    loading: false,
    toDelete: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case PRODUCT_ADD:
        case PRODUCT_GET:
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
        case PRODUCT_GET_ERROR:
        case PRODUCT_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCT_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                toDelete: action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.toDelete ),
                toDelete: null
            }
        default:
            return state;
    }
}