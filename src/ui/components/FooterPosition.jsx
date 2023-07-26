export const FooterPosition = () => {
  return (
    <footer className="bg-dark text-white text-center pt-1 pb-1 fixed-bottom">
      <p>
        &copy; Francisco Javier Martinez Duran
        <br />
        Fecha de Creacion: <span id="date"></span>
        <br />
        Fecha Actual: <span id="date1"></span>
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/francisco-javier-martinez-duran-92055b275/"
          target="_blank"
          rel="noopener noreferrer">
          {/* <i class="fa fa-linkedin"></i> */}
        </a>
      </div>
    </footer>
  );
};
