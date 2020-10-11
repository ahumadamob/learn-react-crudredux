import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { productDeleteAction, productEdit } from '../actions/productAction';

const Product = ({product}) => {

    const { name, price, id } = product;
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteProductConfirm = id => {

        // Preguntar al usuario
        Swal.fire({
            title: 'Atención',
            text: "¿Desea eliminar el producto?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No, mantener el Producto'
        }).then((result) => {
            if(result.value){
              dispatch( productDeleteAction(id) );  
            }            
        });        
    }

    const editRedirect = product => {
        dispatch( productEdit(product) );
        history.push(`/product/edit/${product.id}`);
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button 
                    tpye="button"
                    className="btn btn-primary mr-2"
                    onClick={ () => editRedirect(product) }
                >Editar</button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => deleteProductConfirm(id) }
                >Eliminar</button>            
            </td>
        </tr>
     );
}
 
export default Product;