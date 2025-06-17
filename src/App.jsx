import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import JSONPlaceholder from "./components/JSONPlaceholder";
import PokeAPI from "./components/PokeAPI";
import CatAPI from "./components/CatAPI";
import AdviceSlip from "./components/AdviceSlip";
import BoredAPI from "./components/BoredAPI";
import ClimaCiudad from "./components/ClimaCiudad";
import FakeStore from "./components/FakeStore";
import "./App.css";

function withContainer(Component) {
  return (props) => (
    <div className="app-container">
      <Component {...props} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={withContainer(Home)()} />
        <Route path="/jsonplaceholder" element={withContainer(JSONPlaceholder)()} />
        <Route path="/pokeapi" element={withContainer(PokeAPI)()} />
        <Route path="/catapi" element={withContainer(CatAPI)()} />
        <Route path="/adviceslip" element={withContainer(AdviceSlip)()} />
        <Route path="/boredapi" element={withContainer(BoredAPI)()} />
        <Route path="/openweather" element={withContainer(ClimaCiudad)()} />
        <Route path="/fakestore" element={withContainer(FakeStore)()} />
      </Routes>
    </Router>
  );
}

export default App;