import { HeroList } from "../components"; //* Importo la logica de este componente */

export const MarvelPage = () => {
  //* Exporto esta funcion que no recibe nada */
  return (
    //* Lo que renderizo */
    <>
      <h1 className="text-center">Marvel Comics</h1>
      {/* Titulo del componente */}
      <hr /> {/* Una linea */}
      <HeroList publisher="Marvel Comics" />
      {/* La funcion que importe, va a recibir esta variable */}
    </>
  );
};
