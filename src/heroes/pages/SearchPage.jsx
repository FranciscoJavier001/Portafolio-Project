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
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
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
