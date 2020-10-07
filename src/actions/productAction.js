import {
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR
} from '../types';

// Crear nuevos productos
export function productAddAction(product){
    return () => {
        console.log('desde el action');
        console.log(product);
    }
}