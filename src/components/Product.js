import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { productDeleteAction } from '../actions/productAction';

const Product = ({product}) => {

    const { name, price, id } = product;
    const dispatch = useDispatch();

    const deleteProductConfirm = id => {

        // Preguntar al usuario

        // Enviarlo al Action
        dispatch( productDeleteAction(id) );
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={`/product/edit/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
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