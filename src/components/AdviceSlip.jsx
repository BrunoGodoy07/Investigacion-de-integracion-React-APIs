import React, { useEffect, useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./AdviceSlip.css";

export default function AdviceSlip() {
  const [consejo, setConsejo] = useState("");
  const [loading, setLoading] = useState(true);

  const obtenerConsejo = () => {
    setLoading(true);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setConsejo(res.data.slip.advice);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    obtenerConsejo();
  }, []);

  return (
    <div className="adviceslip-container">
      <h2>Consejo del día</h2>
      {loading ? (
        <div className="adviceslip-loading">Cargando consejo...</div>
      ) : (
        <blockquote className="adviceslip-quote">{consejo}</blockquote>
      )}
      <button onClick={obtenerConsejo}>Obtener otro consejo</button>
      <VolverHome />
    </div>
  );
}