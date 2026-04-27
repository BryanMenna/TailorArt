function Ubicacion() {
  return (
    <section className="container text-center my-5">

  {/* Título */}
  <div className="mb-5">
    <p className="text-muted mb-1">Ubicación</p>
    <h2 className="fw-bold">Contacto directo</h2>
    <p className="text-muted">
      Nos encontramos en el corazón de la ciudad. Abiertos de lunes a viernes
    </p>
  </div>

  <div className="row g-4">

    {/* Correo */}
    <div className="col-md-4">
      <div className="p-3">
        <div className="mb-3 fs-2"><i className="bi bi-envelope-fill" style={{ color: "#B03060" }}></i></div>
        <h5 className="fw-bold" style={{ color: "#B03060" }}>Correo</h5>
        <p className="text-muted">Escríbenos a</p>
        <a href="mailto: paolaandorno22@gmail.com" className="email">
          paolaandorno22@gmail.com
        </a>
      </div>
    </div>

    {/* Teléfono */}
    <div className="col-md-4">
      <div className="p-3">
        <div className="mb-3 fs-2"><i className="bi bi-telephone-fill" style={{ color: "#B03060" }}></i></div>
        <h5 className="fw-bold" style={{ color: "#B03060" }}>Teléfono</h5>
        <p className="text-muted">Llámanos o envía WhatsApp a</p>
        <a
  href="https://wa.me/5493518049839?text=Hola%20quiero%20consultar%20por%20un%20presupuesto"
  target="_blank"
  rel="noopener noreferrer"
  className="tel"
>
  +54 9 351 804-9839
</a>
      </div>
    </div>

    {/* Dirección */}
    <div className="col-md-4">
      <div className="p-3">
        <div className="mb-3 fs-2"><i className="bi bi-geo-alt-fill" style={{ color: "#B03060" }}></i></div>
        <h5 className="fw-bold" style={{ color: "#B03060" }}>Taller</h5>
        <p className="text-muted">
         Av Colon 269, Cordoba, Argentina 
        </p>
      </div>
    </div>

  </div>

</section>
  );
}

export default Ubicacion;
