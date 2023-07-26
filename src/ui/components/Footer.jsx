export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-1">
      <p>
        &copy; Francisco Javier Martinez Duran
        <br />
        Fecha de Creacion: <span id="date"></span>
        <br />
        Fecha Actual: <span id="date1"></span>
      </p>
      <a href="/about">Ir a la página Acerca de</a>
    </footer>
  );
};
