import { useState } from 'react'
import './App.css'
import logo from "/logo.png"

function App() {
  

  return (
    <div className="app">
      {/* Contenedor principal */}
      <header className="app-header">
        {/* Logo de la empresa */}
        <img src={logo} alt="Logo de la empresa" className="logo" />

        {/* Nombre de la empresa */}
        <h1 className="title">Perfumes Elegance</h1>

        {/* Descripción de la empresa */}
        <p className="description">
          Descubre la esencia de la elegancia con nuestra exclusiva línea de perfumes. Fragancias únicas y duraderas
          que capturan la esencia de cada momento.
        </p>

        {/* Llamado a la acción */}
        <button className="cta-button">Descubre nuestras fragancias</button>
      </header>
    </div>
  )
}

export default App
