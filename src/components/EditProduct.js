import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productUpdateAction } from '../actions/productAction';

const EditProduct = () => {

    //State del formulario
    const[ formData, setFormData ] = useState({
        name: '',
        price: 0
    });

    const product = useSelector(state => state.products.toEdit);

    useEffect( ()=> {
        setFormData(product)
    }, [product]);

    const { name, price, id } = product;

    const handleSubmit = e => {
        e.preventDefault();
        productUpdateAction();
    }

    const handleChange = e => {
        setFormData({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div> 
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;