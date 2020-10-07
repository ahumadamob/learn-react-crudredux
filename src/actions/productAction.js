import {
    PRODUCT_ADD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_ERROR
} from '../types';

// Crear nuevos productos
export function productAddAction(product){
    return (dispatch) => {
        dispatch( productAdd() );
        
        try {
            dispatch( addProductSuccess(product) );
        } catch (error) {
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

const addProductError = () => ({

});

