import React, { useEffect, useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./BoredAPI.css";

export default function BoredAPI() {
  const [actividad, setActividad] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const obtenerActividad = () => {
    setLoading(true);
    setError(false);
    axios
      .get("https://bored-api.appbrewery.com/random")
      .then((res) => {
        if (res.data && res.data.activity) {
          setActividad(res.data.activity);
        } else {
          setActividad("");
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    obtenerActividad();
  }, []);

  return (
    <div className="boredapi-container">
      <VolverHome />
      <h2>¿Aburrido? ¡Prueba esta actividad!</h2>
      {loading ? (
        <div className="boredapi-loading">Buscando actividad...</div>
      ) : error ? (
        <div className="boredapi-error">
          Error al obtener la actividad. Intenta de nuevo.
        </div>
      ) : (
        <blockquote className="boredapi-activity">{actividad}</blockquote>
      )}
      {!loading && (
        <button onClick={obtenerActividad}>¡Quiero otra idea!</button>
      )}
    </div>
  );
}