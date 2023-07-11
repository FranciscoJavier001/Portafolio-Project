import { useMemo } from "react"; //* Es un hook de React */
import { HeroCard } from "./"; //* Importo la pagina */
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  //* Exporto esta constante con una variable a recibir */
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  //* Nueva variable, utilize el hook useMemo, su dependencia es publisher y debe estar atenta a los cambios en el publisher */

  return (
    //* Lo que retornamos */
    <div className="row rows-cols-1 row-cols-md-3 g-2">
      {/* Como mostramos las tarjetas */}
      {heroes.map(
        //* Mapeamos la constante heroes */
        (
          hero //* Nueva variable que sera el nuevo arreglo */
        ) => (
          <HeroCard key={hero.id} {...hero} /> //* Renderizamos HeroCard, la llave es el id y mostramos todo el arreglo */
        )
      )}
    </div>
  );
};
