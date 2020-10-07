import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { productAddAction } from '../actions/productAction';

const AddProduct = () => {

    // State local del componente
    const [ name, setName] = useState('');
    const [ price, setPrice ] = useState(0);

    // utilizar useDispatch que retorna una función
    const dispatch = useDispatch();

    // realiza la llamada del action en productAction
    const addProduct = product => dispatch( productAddAction(product) );

    const handleSubmit = e => {
        e.preventDefault();
        
        //Valida el formulario
        if( name.trim() === '' || price <= 0 ){
            return;
        } 
        //Sin errores
        //Agrega el producto
        addProduct({
            name,
            price
        });
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de Producto"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del Producto"
                                    name="price"
                                    value={price}
                                    onChange={e => setPrice( Number(e.target.value) )}
                                />
                            </div> 
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default AddProduct;