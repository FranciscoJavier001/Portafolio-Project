import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-1">
      &copy; Francisco Javier Martinez Duran
      <br />
      Fecha de Creacion: <span></span>
      <br />
      Fecha Actual: <span></span>
      <br />
      <a
        href="https://www.linkedin.com/in/francisco-javier-martinez-duran-92055b275"
        target="_blank"
        rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/FranciscoJavier001/Portafolio-Project"
        target="_blank"
        rel="noopener noreferrer">
        <BiCodeAlt />
      </a>
      <a
        href="https://github.com/FranciscoJavier001"
        target="_blank"
        rel="noopener noreferrer">
        <BsGithub />
      </a>
    </footer>
  );
};

//* ESTILOS PARA ESTOS ELEMENTO, UN LINK, UN HOVER */
