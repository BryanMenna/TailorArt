import imagen from '../img/sin-foto.png'

function SolicitaPresupuesto(){
    return(
        <section className="container my-5">
  <div className="border">

    <div className="row g-0 align-items-center">

      {/* IZQUIERDA */}
      <div className="col-md-6 p-5">
        <h2 className="fw-bold">Solicita tu presupuesto</h2>

        <p className="text-muted mt-3">
          Cuéntanos qué necesitas y recibe tu estimado sin compromiso
        </p>

        {/* Input + botón */}
        <div className="d-flex mt-3">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Tu correo aquí"
          />
          <button className="btn btn-custom ">
            Enviar
          </button>
        </div>

        <p className="small text-muted mt-2">
          Al enviar aceptas nuestros términos de servicio y política de privacidad
        </p>
      </div>

      {/* DERECHA */}
      <div className="col-md-6">
        <div className=" h-100 d-flex align-items-center justify-content-center">
          <span className="text-white"><img src={imagen} alt="" /></span>
        </div>
      </div>

    </div>

  </div>
</section>
    )
}

export default SolicitaPresupuesto;