import {
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR
} from '../types';

import Swal from 'sweetalert2';
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

            // SweetAlert
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
            
        } catch (error) {

            console.log(error);

            // En caso de error, tratamiento mediante el State
            dispatch( addProductError(true) );

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error. Intenta más tarde'
            });
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

