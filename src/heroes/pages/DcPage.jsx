import { Footer } from "../../ui";
import { HeroList } from "../components"; //* Importo la lista de Heroes */

export const DcPage = () => {
  //* Exporto esta Pagina */
  return (
    //* Muestro en el DOM */
    <>
      <div className="container">
        <h1 className="text-center mt-1">DC Comics</h1>
        {/* Un Titulo con una clase */}
        <hr /> {/* Una linea */}
        <HeroList publisher="DC Comics" />
        {/* Utilizamos la logica de este componente, donde la editorial sea */}
      </div>
      <div className="m-1">
        <br />
      </div>
      <Footer />
    </>
  );
};
