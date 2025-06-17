import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Elige una API para probar</h1>
      <ul>
        <li><Link to="/jsonplaceholder">JSONPlaceholder</Link></li>
        <li><Link to="/pokeapi">PokeAPI</Link></li>
        <li><Link to="/catapi">The Cat API</Link></li>
        <li><Link to="/adviceslip">Advice Slip API</Link></li>
        <li><Link to="/boredapi">Bored API</Link></li>
        <li><Link to="/openweather">OpenWeatherMap</Link></li>
        <li><Link to="/fakestore">Fake Store API</Link></li>
      </ul>
    </div>
  );
}