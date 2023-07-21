import { Route, Routes } from "react-router-dom"; //* Importamos para hacer uso de las rutas */
import { HeroesRoutes } from "../heroes"; //* Rutas en el Navbar */

export const AppRouter = () => {
  //* Exportamos esta variable, que sera puesto en el Main y es lo que vamos a renderizar */
  return (
    //* Lo que voy a renderizar */
    <>
      <Routes>
        {/* Invocamos a las turas */}
        <Route path="/*" element={<HeroesRoutes />} />
        {/* Lo que sea la ruta que renderize el Elemento HeroesRoutes */}
      </Routes>
    </>
  );
};
