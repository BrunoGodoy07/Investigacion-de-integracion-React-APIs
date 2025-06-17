import React, { useState, useEffect } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./PokeAPI.css";

export default function PokeAPI() {
  const [nombre, setNombre] = useState("charizard");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo encontrar el Pokémon.");
        setLoading(false);
      });
  }, [nombre]);

  return (
    <div className="pokeapi-container">
      <h2>PokeAPI</h2>
      <form
        className="pokeapi-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNombre(e.target.pokemon.value);
        }}
      >
        <input name="pokemon" placeholder="Nombre de Pokémon" />
        <button type="submit">Buscar</button>
      </form>
      {loading && <div className="pokeapi-loading">Cargando información de Pokémon...</div>}
      {error && <div className="pokeapi-error">{error}</div>}
      {pokemon && !loading && (
        <div className="pokeapi-profile">
          <h3>{pokemon.name.toUpperCase()}</h3>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={120}
          />
          <p>
            <strong>Tipo(s):</strong> {pokemon.types.map((tipo) => tipo.type.name).join(", ")}
          </p>
          <p>
            <strong>Habilidades:</strong> {pokemon.abilities.map((hab) => hab.ability.name).join(", ")}
          </p>
        </div>
      )}
      <VolverHome />
    </div>
  );
}