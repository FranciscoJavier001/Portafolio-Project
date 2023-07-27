import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-1">
      <p>
        &copy; Francisco Javier Martinez Duran
        <br />
        Fecha de Creacion: <span>Fecha</span>
        <br />
        Fecha Actual: <span>Fecha</span>
        <br />
        <BsLinkedin />
        <BiCodeAlt />
        <BsGithub />
      </p>
    </footer>
  );
};
