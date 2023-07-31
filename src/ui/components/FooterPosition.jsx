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
  color: rgb(33, 56, 205);
`;

const StyleIconCode = styled(PiCodeBold)`
  color: rgb(59, 57, 60);
`;

const StyleIconGithub = styled(BsGithub)`
  color: #4424e0;
`;

export const FooterPosition = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-2 fixed-bottom">
      &copy; Francisco Javier Martinez Duran
      <br />
      Fecha de Creacion: <span></span>
      <br />
      Fecha Actual: <span></span>
      <br />
      <ATagLink
        href="https://www.linkedin.com/in/francisco-javier-martinez-duran-92055b275"
        target="_blank"
        rel="noopener noreferrer">
        <StyleIconLinkedIn />
      </ATagLink>
      <ATagLink
        href="https://github.com/FranciscoJavier001/Portafolio-Project"
        target="_blank"
        rel="noopener noreferrer">
        <StyleIconCode />
      </ATagLink>
      <ATagLink
        href="https://github.com/FranciscoJavier001"
        target="_blank"
        rel="noopener noreferrer">
        <StyleIconGithub />
      </ATagLink>
    </footer>
  );
};
