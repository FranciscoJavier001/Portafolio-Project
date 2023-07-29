import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

export const FooterPosition = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-1 fixed-bottom">
      &copy; Francisco Javier Martinez Duran
      <br />
      Fecha de Creacion: <span></span>
      <br />
      Fecha Actual: <span></span>
      <br />
      <BsLinkedin />
      <BiCodeAlt />
      <BsGithub />
    </footer>
  );
};

//* ESTILOS PARA ESTOS ELEMENTO, UN LINK, UN HOVER */
