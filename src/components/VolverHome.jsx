import React from "react";
import { useNavigate } from "react-router-dom";

export default function VolverHome() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} style={{ marginBottom: 24 }}>
      Volver a la Home
    </button>
  );
}