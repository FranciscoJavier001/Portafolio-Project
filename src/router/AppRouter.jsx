import { Route, Routes } from "react-router-dom";

import { ProyectosRutas } from "../proyectos";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <ProyectosRutas />
            </Routes>
          }
        />
      </Routes>
    </>
  );
};
