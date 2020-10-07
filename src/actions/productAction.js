import {
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR
} from '../types';

import clientAxios from '../config/axios';

// Crear nuevos productos
export function productAddAction(product){
    return async (dispatch) => {
        dispatch( productAdd() );
        
        try {
            // Inserción a la API
            await clientAxios.post('/products', product);

            // Modificación en el State (sin errores)
            dispatch( addProductSuccess(product) );
        } catch (error) {

            console.log(error);

            // En caso de error, tratamiento mediante el State
            dispatch( addProductError(true) );
        }
    }    
}

const productAdd = () => ({
    type: PRODUCT_ADD    
});

// Si el producto se guarda correctamente en la base de datos
const addProductSuccess = product => ({
    type: PRODUCT_ADD_SUCCESS,
    payload: product
})

const addProductError = errorState => ({
    type: PRODUCT_ADD_ERROR,
    payload: errorState
});

