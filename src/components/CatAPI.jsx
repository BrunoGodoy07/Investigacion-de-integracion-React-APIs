import React, { useEffect, useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./CatAPI.css";

export default function CatAPI() {
  const [urlGato, setUrlGato] = useState(null);
  const [loading, setLoading] = useState(true);

  const obtenerGato = () => {
    setLoading(true);
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setUrlGato(res.data[0].url);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    obtenerGato();
  }, []);

  return (
    <div className="catapi-container">
      <h2>¡Imagen aleatoria de un gato!</h2>
      {loading ? (
        <div className="catapi-loading">Cargando gato...</div>
      ) : urlGato ? (
        <img className="catapi-image" src={urlGato} alt="Un gato adorable" width={300} />
      ) : (
        <div className="catapi-error">No se pudo cargar la imagen.</div>
      )}
      <button onClick={obtenerGato}>Ver otro gato</button>
      <VolverHome />
    </div>
  );
}