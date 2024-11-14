import logo from "/logo.png"
// src/App.jsx

import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Cierra el menú después de seleccionar una sección
  };

  return (
    <div className="app">
      {/* Menú de navegación */}
      <nav className="navbar">
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>
        <h1>A&A Perfumes</h1>
        {menuOpen && (
          <div className="menu">
            <a onClick={() => scrollToSection("home")}>Inicio</a>
            <a onClick={() => scrollToSection("location")}>Dirección</a>
            <a onClick={() => scrollToSection("products")}>Productos</a>
            <a onClick={() => scrollToSection("bestsellers")}>Fragancias más vendidas</a>
          </div>
        )}
      </nav>

      {/* Sección de inicio */}
      <header id="home" className="app-header">
        <img src={logo} alt="Logo de la empresa" className="logo" />
        <h1 className="title">Perfumes A&A</h1>
        <p className="description">
          Descubre la esencia de la elegancia con nuestra exclusiva línea de perfumes. Fragancias únicas y duraderas
          que capturan la esencia de cada momento.
        </p>
        <button className="cta-button">Descubre nuestras fragancias</button>
      </header>

      {/* Sección de Dirección */}
      <section id="location" className="section">
        <h2>Dirección</h2>
        <p>
          CC el Cairo, Av. Libertador entre calles 14 y 15, San Felipe, Yaracuy. Planta baja, local P-1.
        </p>
      </section>

      {/* Sección de Productos */}
      <section id="products" className="section">
        <h2>Productos</h2>
        <ul>
          <li>Cremas de manos y cuerpo</li>
          <li>Perfumes para damas, caballeros y adolescentes</li>
        </ul>
      </section>

      {/* Sección de Fragancias más vendidas */}
      <section id="bestsellers" className="section">
        <h2>Fragancias más vendidas</h2>
        <ul>
          <li>Vainilla</li>
          <li>Amaderadas</li>
          <li>Florales</li>
          <li>Dulces</li>
          <li>Orientales</li>
        </ul>
      </section>
      <section id="bestsellers" className="section">
        <h2>Integrantes:</h2>
        <ul>
          <li>Ashley Ojeda</li>
          <li>Ariannys Gimenez</li>
          <li>Yriannys Gimenez</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

