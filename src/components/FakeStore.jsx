import React, { useEffect, useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./FakeStore.css";

export default function FakeStore() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div className="fakestore-container">
      <h2>Productos Fake Store</h2>
      <div className="fakestore-grid">
        {productos.map((producto) => (
          <div className="fakestore-card" key={producto.id}>
            <img src={producto.image} alt={producto.title} />
            <h4>{producto.title}</h4>
            <p>
              <strong>Precio:</strong> ${producto.price}
            </p>
            <p className="fakestore-category">{producto.category}</p>
            <p className="fakestore-desc">{producto.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
      <VolverHome />
    </div>
  );
}