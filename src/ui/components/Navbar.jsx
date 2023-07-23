import { Link, NavLink } from "react-router-dom"; //* Poder navegar entre URL's */

export const Navbar = () => {
  //* Variable a Exportar */
  return (
    //* Lo que voy a renderizar */
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      {/* Esta es la barra de navegacion con clases de Bootstrap */}
      <Link className="navbar-brand" to="/">
        {/* Es el Brand, osea el primer enlace */}
        HeroesApp {/* Le cambie el nombre */}
      </Link>
      <div>
        {/* Simplemente un div */}
        <div className="navbar-nav">
          {/* Clase, para que esten todos alineados horizontalmente */}
          <NavLink
            className={(
              { isActive } //* Clase que recibe un parametro */
            ) => `nav-item nav-link  ${isActive ? "active" : ""}`} //* Donde este seleccionado, ponlo en color blanco y dejalo gris */
            to="/marvel">
            {/* Ruta a donde te voy a redirigir */}
            Marvel {/* Lo que dice el espacio en el navbar */}
          </NavLink>
          <NavLink
            className={(
              { isActive } //* Clase que recibe un parametro */
            ) => `nav-item nav-link  ${isActive ? "active" : ""}`} //* Donde este seleccionado, ponlo en color blanco y dejalo gris */
            to="/dc">
            {/* Ruta a donde te voy a redirigir */}
            DC {/* Lo que dice el espacio en el navbar */}
          </NavLink>
          <NavLink
            className={(
              { isActive } //* Clase que recibe un parametro */
            ) => `nav-item nav-link  ${isActive ? "active" : ""}`} //* Donde este seleccionado, ponlo en color blanco y dejalo gris */
            to="/search">
            {/* Ruta a donde te voy a redirigir */}
            Search {/* Lo que dice el espacio en el navbar */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
