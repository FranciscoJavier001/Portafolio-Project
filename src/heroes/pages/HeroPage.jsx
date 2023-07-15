import { useMemo } from "react"; //* Es un Hook */
import { Navigate, useNavigate, useParams } from "react-router-dom"; //* Es de RRD */
import { getHeroById } from "../helpers"; //* Logica del id de Heroes */

export const HeroPage = () => {
  //* Exportamos esta funcion que no recibe nada */
  const { id } = useParams(); //* Para acceder a los parametros de la URL, al ID */
  const navigate = useNavigate(); //* Creo una variable que venga de la funcion useNavigate */

  const hero = useMemo(() => getHeroById(id), [id]); //* Variable, que memoriza el id, y se actualiza si cambia */

  const onNavigateBack = () => {
    //* Variable que ejecuta una funcion */
    navigate(-1); //* Regresa 1 vez con esta variable que viene del hook useNavigate */
  };

  if (!hero) {
    //* Condicional si es diferente a cualquier heroe en la URL */
    return <Navigate to="/marvel" />; //* Llevalo directamente a esta URL */
  }

  return (
    //* Lo que voy a rederizar el la pagina de Heroes */
    <div className="row mt-5">
      {/* Nuevo Div, que es de una sola fila y es el margen de arriba hacia abajo */}
      <div className="col-4">
        {/* Espacio donde va la imagen */}
        <img //* Mando llamar una etiqueta img */
          src={`/assets/heroes/${id}.jpg`} //* Buscamos la img con un id que puede variar */
          alt={hero.superhero} //* Si no se puede mostrar la imagen, mostramos del arreglo hero, la variable superhero y sale el nombre sin img */
          className="img-thumbnail animate__animated animate__fadeInLeft" //* Son clases de animate */
        />
      </div>
      <div className="col-8">
        {/* Espacio restante */}
        <h3>{hero.superhero}</h3>
        {/* Mostramos en el titulo el nombre del superheroe */}
        <ul className="list-group list-group-flush">
          {/* Se crea una lista en grupo con clases */}
          <li className="list-group-item">
            {/* Etiqueta de Lista de elementos */}
            <b>Alter ego:</b> {hero.alter_ego}
            {/* La Primera variable de la lista ba a ser el alter ego */}
          </li>
          <li className="list-group-item">
            {/* Etiqueta de Lista de elementos */}
            <b>Publisher:</b> {hero.publisher}
            {/* Segunda variable de la lista es la editorial */}
          </li>
          <li className="list-group-item">
            {/* Etiqueta de Lista de elementos */}
            <b>First appearance:</b> {hero.first_appearance}
            {/* Tercer variable de la lista va aser su primera aparicion en comics */}
          </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        {/* Fuera de la lista Creo un subtitulo donde esten sus personajes */}
        <p>{hero.characters}</p> {/* Mostramos su personaje en la vida real */}
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          {/* Creamos un boton, que tome la logica para volver hacia atras */}
          Regresar {/* Lo que dice el boton */}
        </button>
      </div>
    </div>
  );
};
