import imagen from "../img/sin-foto.png";

function Especialidad() {
  return (
    <section className="container my-5">
      {/*Titulo */}
      <div className="text-center mb 5">
        <p className="text-muted mb-1">Especialidad</p>
        <h2 className="fw-bold">Arreglos clásicos</h2>
        <p className="text-muted">Soluciones rápidas para tu guardarropa</p>
      </div>

      <div className="row g-4">
        {/*Card Grande */}
        <div className="col-md-6">
          <div className="border h-100 d-flex flex-column">
            <div className="p-4">
              <p className="small">Arreglos</p>
              <h4 className="fw-blod">Ajustes de largo y ancho</h4>
              <p className="text-muted">
                Modificamos el largo de pantalones, faldas y vestidos. Trabajo
                limpio y duradero.
              </p>

              <div className="d-flex gap-3 mt-3">
                <button className="btn btn-outline-custom btn-sm">
                  Pedir presupuesto
                </button>
                <span>Detalles</span>
              </div>
            </div>
            {/*Imagen */}
            <div className="flex-grow-1 overflow-hidden">
              <img
                src={imagen}
                alt=""
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        {/*Col Derecha */}
        <div className="col-md-6">
          <div className="row g-4">
            {/*Card chica */}
            <div className="col-6">
              <div className="border h-100 d-flex flex-column">
                <div className="p-3">
                  <p className="small">Confección a medida</p>
                  <h6 className="fw-bold">Creamos prendas desde cero</h6>
                  <p className="small text-muted">
                    Diseñamos y confeccionamos según tus especificaciones
                    exactas.
                  </p>
                  <span className="small">Detalles</span>
                </div>
                <div className=" flex-grow-1">
                  <img
                    src={imagen}
                    alt=""
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            {/*Card chica */}
            <div className="col-6">
              <div className="border h-100 d-flex flex-column">
                <div className="p-3">
                  <p className="small">Transformación</p>
                  <h6 className="fw-bold">Transformaciones creativas</h6>
                  <p className="small text-muted">
                    Convertimos prendas viejas en nuevas. Reciclaje con estilo y
                    propósito.
                  </p>
                  <span className="small">Detalles</span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <img
                    src={imagen}
                    alt=""
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            {/*Card chica */}
            <div className="col-6">
              <div className="border h-100 d-flex flex-column">
                <div className="p-3">
                  <p className="small">Lujo</p>
                  <h6 className="fw-bold">Alta costura</h6>
                  <p className="small text-muted">
                    Prendas de lujo y detalle fino. Trabajo artesanal de máxima
                    calidad.
                  </p>
                  <span className="small">Detalles</span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <img
                    src={imagen}
                    alt=""
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/*Card chica */}
            <div className="col-6">
              <div className="border h-100 d-flex flex-column">
                <div className="p-3">
                  <p className="small">Urgencia</p>
                  <h6 className="fw-bold">Alteraciones rápidas</h6>
                  <p className="small text-muted">
                    Cuando necesitas algo listo en poco tiempo. Nos adaptamos a
                    tu urgencia.
                  </p>
                  <span className="small">Detalles</span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <img
                    src={imagen}
                    alt=""
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Especialidad;
