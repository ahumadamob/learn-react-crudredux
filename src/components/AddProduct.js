import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { productAddAction } from '../actions/productAction';

const AddProduct = () => {

    const handleSubmit = e => {
        e.preventDefault();
        //Valida el formulario
        //Sin errores
        //Con errores
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de Producto"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del Producto"
                                    name="price"
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