import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddProductMain = () => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Producto agregado", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setCategoria("");
      setDescription("");
      setCountInStock(0);
      setImage("");
      setPrice(0);
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name + " " + categoria, price, description, image, countInStock));
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Ir a productos
            </Link>
            <h2 className="content-title">Agregar producto</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Ingrese acá el nombre del producto..."
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_categoria" className="form-label">
                      Categoría
                    </label>
                    <select
                    className="form-control"
                    onChange={(e) => setCategoria(e.target.value)}>
                      <option value="0" disabled selected>Seleccione categoría...</option>
                      <option value="[BAT]">Baterías</option>
                      <option value="[OIL]">Lubricantes</option>
                      <option value="[ACC]">Accesorios</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Valor
                    </label>
                    <input
                      type="number"
                      placeholder="Precio del producto..."
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      placeholder="Stock del producto..."
                      className="form-control"
                      id="product_price"
                      required
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Descripción</label>
                    <textarea
                      placeholder="Ingrese una descripción..."
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Imagen</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Ingrese URL de imagen..."
                      value={image}
                      required
                      onChange={(e) => setImage(e.target.value)}
                    />                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;