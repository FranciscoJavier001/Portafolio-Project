import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  //* Funcion de Flecha que no recibe Nada */

  const navigate = useNavigate(); //* Hook para navegar entre direcciones */
  const location = useLocation(); //* Hook, que usa useEffect para estar pendientes con los cambios, de la busqueda por url */

  const { q = "" } = queryString.parse(location.search); //* Crea una variable vacia, analiza de la url lo que dice este campo */
  const heroes = getHeroesByName(q); //* Variable, que invoca un archivo y le lo que viene en q en el url */

  const showSearch = q.length === 0; //* Creo una vartiable, que sea la busqueda, pero vacia */
  const showError = q.length > 0 && heroes.length === 0; //* Creo una variable, que cuando q sea mayor a 0 y heroes igual a nada */

  const { searchText, onInputChange } = useForm({
    //* Creo una nueva variable, que se lea cuando cambie el campo de texto con el hook useForm */
    searchText: q, //* Cuando el campo de texto, valga lo mismo que q */
  });

  const onSearchSubmit = (event) => {
    //* Cuando hagan click en el boton de buscar */
    event.preventDefault(); //* No actualices la pagina */
    navigate(`?q=${searchText}`); //* Pero navega a lo que esta despues de la q= en la url */
  };

  return (
    //* Retorno */
    <>
      {/* Para meterle formato al DOM */}
      <h1>PaginaBusqueda</h1>
      {/* Titulo en la pagina */}
      <hr /> {/* Una raya */}
      <div className="row">
        {/* Nueva fila */}
        <div className="col-5">
          {/* Espacio de lo que va a medir todo lo que esta dentro de este div */}
          <h4 className="text-center">Busqueda</h4>
          {/* Es el subtitulo */}
          <hr /> {/* Otra raya */}
          <form onSubmit={onSearchSubmit} aria-label="form">
            {/* Formulario, que recibe un evento y su tipografia */}
            <input //* Ahora al campo de busqueda */
              type="text" //* Lo que recibe es texto */
              placeholder="Busca un Heroe" //* Lo que dice escrito como de fondo */
              className="form-control" //* Va a tomar esto que al parecer ya esta definido, lo utilizo para usar todo el ancho del espacio */
              name="searchText" //* Asi se va a llamar este campo */
              autoComplete="off" //* No vas a autocompletar */
              value={searchText} //* Este es el nombre del campo, y tambien este es su valor, asi se lo asigno */
              onChange={onInputChange} //* Si preciono el Enter, automaticamente inicia la busqueda */
            />
            <button className="btn btn-outline-primary mt-1 form-control">
              {/* Boton que ocupa todo el espacio */}
              Buscar {/* Texto que dice el boton */}
            </button>
          </form>
        </div>
        <div className="col-7">
          {/* Quedaban 7 espacios, los asigno aqui */}
          <h4 className="text-center">Resultados</h4>
          {/* Es un titulo en el espacio resultante con texto */}
          <hr /> {/* Simplemente es una linea horizontal */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn text-center"
            style={{ display: showSearch ? "" : "none" }}>
            Search a hero
          </div>
          <div
            aria-label="alert-danger"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}>
            No hero with <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
