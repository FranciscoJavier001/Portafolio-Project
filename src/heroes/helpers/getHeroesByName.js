import { heroes } from "../data/heroes"; //* Importa lo que contiene este archivo */

export const getHeroesByName = (name = "") => {
  //* Exporta una variable que reciba el nombre como un campo cacio */
  name = name.toLocaleLowerCase().trim(); //* Name es creado y es todo en minusculas y elimino los espacios que tenga fuera del texto */

  if (name.length === 0) return []; //* Si nombre, es una cadena de vacia, entonces no me retornes nada */

  return heroes.filter(
    //* Retorno la data de heroes, pero filtrada, metodo lleva siempre () por invocacion */
    (
      hero //* En un nuevo arreglo llamado hero */
    ) => hero.superhero.toLocaleLowerCase().includes(name)
    //* Retorna nuevo arreglo indexado al superhero de data, se hace minusculas todo y se busca los que incluyan ese nombre */
  );
};
