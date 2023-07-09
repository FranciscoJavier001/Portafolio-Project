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
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
