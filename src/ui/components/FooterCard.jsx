import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiCodeBold } from "react-icons/pi";

import styled from "styled-components";

const ATagLink = styled.a`
  color: white; /* La tipografia de las letras es blanca */
  margin: 1rem; /* Separacion de los iconos sociables */
  font-size: 1.9rem; /* Tamaño de cada elemento */
  line-height: 3vh; /* Espacio de cada linea */

  &:hover {
    filter: saturate(100%) brightness(150%); /* Saturarlos y aumenta el brillo */
    transition-duration: 1.5s; /* Duracion de la transicion */
  }
`;

const StyleIconLinkedIn = styled(BiLogoLinkedin)`
  //* StyleComponents le asigno nuevo nombre a la variable y luego variable la cual voy a modificar */
  color: rgb(33, 56, 205); //* Su color inicial es Azul */
`;

const StyleIconCode = styled(PiCodeBold)`
  //* StyleComponents le asigno nuevo nombre a la variable y luego variable la cual voy a modificar */
  color: rgb(59, 57, 60); //* Color Inicial Gris */
`;

const StyleIconGithub = styled(BsGithub)`
  //* StyleComponents le asigno nuevo nombre a la variable y luego variable la cual voy a modificar */
  color: #a335f0; //* Cambio de color al Enlace de Github en morado */
`;

const horaEspecifica = new Date("2023-08-01 18:08:29"); //* Variable donde defino una hora especifica */

export const FooterCard = () => {
  //* Funcion a Exportar */
  return (
    //* Lo que voy a renderizar */
    <>
      {/* Para que todo quede en un bloque */}
      <footer className="bg-dark text-white text-center pt-1 pb-2 fixed-bottom">
        {/* Estilos del Footer con Bootstrap */}
        &copy; Francisco Javier Martinez Duranº
        {/* Simbolo Copyright y Nombre */}
        <br />
        {/* Un espacio */}
        Fecha de Creacion: <span>{horaEspecifica.toString()}</span>
        {/* Especifico un dia y una hora especifica */}
        <br />
        {/* Un espacio */}
        Fecha Actual: <span>{Date()}</span>
        {/* Metodo para llamar la Fecha Actual */}
        <br /> {/* Un espacio */}
        <ATagLink //* Nombre de etiqueta <a> con estilos de Style Components */
          href="https://www.linkedin.com/in/francisco-javier-martinez-duran-92055b275" //* Link a donde dirige */
          target="_blank">
          {/* Que sea una nueva pestaña */}
          <StyleIconLinkedIn />
          {/* Icono que se va a poner con estilos definidos */}
        </ATagLink>
        <ATagLink //* Nombre de etiqueta <a> con estilos de Style Components */
          href="https://github.com/FranciscoJavier001/Portafolio-Project" //* Link a donde dirige */
          target="_blank">
          {/* Que sea una nueva pestaña */}
          <StyleIconCode />
          {/* Icono que se va a poner con estilos definidos */}
        </ATagLink>
        <ATagLink //* Nombre de etiqueta <a> con estilos de Style Components */
          href="https://github.com/FranciscoJavier001" //* Link a donde dirige */
          target="_blank">
          {/* Que sea una nueva pestaña */}
          <StyleIconGithub />
          {/* Icono que se va a poner con estilos definidos */}
        </ATagLink>
      </footer>
    </>
  );
};
