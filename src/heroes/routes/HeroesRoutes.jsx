import { Navigate, Route, Routes } from "react-router-dom"; //* De RRD */
import { Navbar } from "../../ui"; //* Logica del Navbar */
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"; //* Logica de los componentes funcionales */

export const HeroesRoutes = () => {
  //* Exporto esta funcion */
  return (
    //* Lo que renderizo en el DOM */
    <>
      <Navbar /> {/* Renderizo este Componente Funcional */}
      <Routes>
        {/* Rutas */}
        <Route path="marvel" element={<MarvelPage />} />
        {/* Cuando sea esta ruta en el URL renderiza este Componente Funcional */}
        <Route path="dc" element={<DcPage />} />
        {/* Cuando sea esta ruta en el URL renderiza este Componente Funcional */}
        <Route path="search" element={<SearchPage />} />
        {/* Cuando sea esta ruta en el URL renderiza este Componente Funcional */}
        <Route path="hero/:id" element={<HeroPage />} />
        {/* Cuando sea esta ruta en el URL renderiza este Componente Funcional */}
        <Route path="/" element={<Navigate to="/marvel" />} />
        {/* Cuando no exista la URL renderiza este Componente Funcional */}
      </Routes>
    </>
  );
};
