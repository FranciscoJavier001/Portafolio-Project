import { heroes } from "../data/heroes"; //* Importo la data de los Heroes */

export const getHeroById = (id) => {
  //* Exporto esta funcion de busqueda, que recibe el id */
  return heroes.find((hero) => hero.id === id);
  //* Retorno un arreglo, que encuentra una variable y me regresa el id, si es igual al id */
};
