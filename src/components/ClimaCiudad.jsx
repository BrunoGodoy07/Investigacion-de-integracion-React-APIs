import React, { useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./ClimaCiudad.css";

const API_KEY = "402ad38879a6639bee8df8368c0b069d";

export default function ClimaCiudad() {
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerClima = (e) => {
    e.preventDefault();
    if (!ciudad) return;
    setLoading(true);
    setError(null);
    setClima(null);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          ciudad
        )}&appid=${API_KEY}&units=metric&lang=es`
      )
      .then((res) => {
        setClima(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se encontró la ciudad o hubo un error.");
        setLoading(false);
      });
  };

  return (
    <div className="climaciudad-container">
      <h2>Consulta el clima de una ciudad</h2>
      <form className="climaciudad-form" onSubmit={obtenerClima}>
        <input
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Ej: Buenos Aires"
        />
        <button type="submit">Buscar clima</button>
      </form>
      {loading && <div className="climaciudad-loading">Buscando clima...</div>}
      {error && <div className="climaciudad-error">{error}</div>}
      {clima && (
        <div className="climaciudad-resultado">
          <h3>
            {clima.name}, {clima.sys.country}
          </h3>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Sensación térmica: {clima.main.feels_like}°C</p>
          <p>Clima: {clima.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
            alt={clima.weather[0].description}
          />
        </div>
      )}
      <VolverHome />
    </div>
  );
}