import icon from '../img/icon-sin-fondo.png'

function Footer (){
    return(
        <footer className="container my-5">

  {/* Parte superior */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">

    {/* Logo */}
    <a className="navbar-brand" href="#"><img src={icon} alt=""  style={{ height: "40px" }}/></a>

    {/* Menú */}
    <ul className="nav">
      <li className="nav-item"><a className="nav-link text-dark" href="#">Inicio</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">Servicios</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">Portafolio</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">Precios</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">Opiniones</a></li>
    </ul>

    {/* Redes */}
    <div className="d-flex gap-3">
      <span><a href="https://www.instagram.com/paola_tailor_art/" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram"></i></a>
      </span>
      <span><i className="bi bi-facebook"></i></span>
    </div>

  </div>

  {/* Línea */}
  <hr />

  {/* Parte inferior */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">

    <p className="mb-2 mb-md-0">
      © 2026 Bryan Menna. Todos los derechos reservados.
    </p>

    <div className="d-flex gap-3">
      <a href="#" className="text-muted">Política de privacidad</a>
      <a href="#" className="text-muted">Términos de servicio</a>
      <a href="#" className="text-muted">Configuración de cookies</a>
    </div>

  </div>

</footer>
    )

}

export default Footer;