import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';

import { productGetAction }  from '../actions/productAction';

const Products = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {

        const productGet = () => dispatch( productGetAction() );
        productGet();
        // eslint-disable-next-line
    }, []);

    const products = useSelector( state => state.products.products );
    const error = useSelector( state => state.products.error );
    const loading = useSelector( state => state.products.loading );


    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt4">
                Hubo un error
            </p> : null }
            { loading ? <p className="text-center">Cargando...</p> : null}
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { products.lenght === 0 ? 'No hay productos' : (
                        products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products;