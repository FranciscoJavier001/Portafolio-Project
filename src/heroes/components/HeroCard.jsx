import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  //* Variable que recibe dos parametros pero exclusivos */
  return alter_ego === characters ? ( //* Lo que retorno, es decir, cuando el alter y el character sean iguales */
    <p>
      {/* Un Parrafo */}
      <br /> {/* Un espacio en blanco */}
    </p>
  ) : (
    //* En caso contrario */
    <p>{`${characters.substring(0, 25)}`}...</p> //* En caso que lo mostremos, solo muestra hasta la letra 25 y despues pon ... */
  );
};

export const HeroCard = ({
  //* Funcion a exportar, que recibe parametros que son los siguientes */
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`; //* Nueva variable que es la ruta con el id del heroe porque es recurso estatico */

  return (
    //* Esto es lo que voy a retornar */
    <div className="col animate__animated animate__fadeIn mb-3">
      {/* Clases de Animate y dejo espacio en la busqueda entre elementos */}
      <div className="card">
        {/* Para poner las tarjetas en cada tarjeta */}
        <div className="row no-gutters">
          {/* Voy a crear una nueva fila, sin espacios */}
          <div className="col-5">
            {/* De la nueva que se creo, voy a ocupar 5 de espacio */}
            <img src={heroImageUrl} className="card-img" alt={superhero} />
            {/* Etiqueta Imagen que llama la variable imagen con una clase */}
          </div>
          <div className="col-7">
            {/* Aqui estan los otros espacios que faltaban de los 12 */}
            <div className="card-body">
              {/* Este es el cuerpo de la tarjeta y le voy a meter info */}
              <h5 className="card-title">{superhero}</h5>
              {/* Titulo del super heroe */}
              <p className="card-text">{alter_ego}</p> {/* El nombre */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              {/* Esta esta definida en busqueda con logica interna */}
              <p className="card-text">
                {/* Mas texto */}
                <small className="text-muted">{first_appearance}</small>
                {/* Que salga esta info */}
              </p>
              <Link to={`/hero/${id}`}>Más..</Link>
              {/* Cuando piquen mas los dirreccionamos a la info completa del heroe */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
