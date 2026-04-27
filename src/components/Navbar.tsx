import '../Css/navbar.css'
import imagen from '../img/icon-sin-fondo.png'

function Navbar(){
return (
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav" >
      <a className="navbar-brand" href="#"><img src={imagen} alt=""  style={{ height: "40px" }}/></a>
      <ul className="navbar-nav d-flex justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portafolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </a>
        </li>
        
      </ul>
      <div className="d-flex ms-auto gap-2">
          <button className="btn btn-outline-custom btn-sm" type="button">Pedir presupuesto</button>
          <button className="btn btn-custom " type="button">Contactar</button>
        </div>
    </div>
    
  </div>
</nav> 
)


}

export default Navbar