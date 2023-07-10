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
      <h1 className="text-center">PaginaBusqueda</h1>
      {/* Titulo en la pagina, lo coloco al centro */}
      <hr /> {/* Una raya */}
      <div className="row">
        {/* Nueva fila */}
        <div className="col-5">
          {/* Espacio de lo que va a medir todo lo que esta dentro de este div */}
          <h4 className="text-center">Busqueda</h4>
          {/* Es el subtitulo */}
          <hr /> {/* Otra raya */}
          <form onSubmit={onSearchSubmit} aria-label="form">
            {/* Formulario, que recibe un evento y le damos estilos al formulario definidos */}
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
            className="alert alert-primary animate__animated animate__fadeIn text-center" //* Division Azul del cuadro de busqueda */
            style={{ display: showSearch ? "" : "none" }}>
            {/* Campo de busqueda vacio, muestro recuadro azul, o si hay busqueda lo desaparezco */}
            Busca un Heroe {/* Es un texto */}
          </div>
          <div
            aria-label="alert-danger" //* Son estilos definidos para este campo */
            className="alert alert-danger animate__animated animate__fadeIn text-center" //* Division del cuadro rojo con estilos definidos */
            style={{ display: showError ? "" : "none" }}>
            {/* Si no encuentra nada que se muestre, pero si encuentra algo que desaparezca */}
            No Encontre Ningun Heroe con la letra <b>{`"${q}"`}</b>
            {/* Esto es un texto */}
          </div>
          {heroes.map(
            //* Voy a mapear el arreglo de heroes */
            (
              hero //* Recibo la variable hero */
            ) => (
              <HeroCard key={hero.id} {...hero} /> //* Renderizo este componente, la llave va a ser el "id" y muestro todos los resultados */
            )
          )}
        </div>
      </div>
    </>
  );
};
