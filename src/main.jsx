import React from "react"; //* Importacion para usar React */
import ReactDOM from "react-dom/client"; //* Importacion de lo que se renderiza en el VirtualDom */
import { BrowserRouter } from "react-router-dom"; //* Importacion para navegar entre rutas */

import { HeroesApp } from "./HeroesApp"; //* Logica de este Componente Funcional */

ReactDOM.createRoot(document.getElementById("root")).render(
  //* Como voy a renderzar en el VirtualDom */
  <React.StrictMode>
    {/* Aplicamos el modo estricto */}
    <BrowserRouter>
      {/* Hacia que ruta vamos a navegar */}
      <HeroesApp /> {/* La App qie voy a renderizar */}
    </BrowserRouter>
  </React.StrictMode>
);
