import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiCodeBold } from "react-icons/pi";

import styled from "styled-components";

const ATagLink = styled.a`
  color: white; /* La tipografia de las letras es blanca */
  margin: 1rem; /* Separacion de los iconos sociables */
  font-size: 1.9rem; /* Tamaño de cada elemento */
  line-height: 3vh; /* Espacio de cada linea */
`;

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-2">
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
        <BiLogoLinkedin />
      </ATagLink>
      <ATagLink
        href="https://github.com/FranciscoJavier001/Portafolio-Project"
        target="_blank"
        rel="noopener noreferrer">
        <PiCodeBold />
      </ATagLink>
      <ATagLink
        href="https://github.com/FranciscoJavier001"
        target="_blank"
        rel="noopener noreferrer">
        <BsGithub />
      </ATagLink>
    </footer>
  );
};
