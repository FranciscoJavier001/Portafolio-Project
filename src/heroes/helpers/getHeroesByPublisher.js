import { heroes } from "../data/heroes"; //* Data de Heroes */

export const getHeroesByPublisher = (publisher) => {
  //* Exporto esta variable, que recibe el publisher */
  const validPublishers = ["DC Comics", "Marvel Comics"]; //* Nueva variable, es un arreglo con 2 elementos */
  if (!validPublishers.includes(publisher)) {
    //* Si es diferente la editorial valida que viene incluida en la editorial */
    throw new Error(`${publisher} No es una Editorial Valida`); //* Muestra este Error */
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
  //* Si es valido retorna la data de heroes pero filtra el arreglo en una nueva variable que sea la editorial y debe ser igual a la editorial */
};
