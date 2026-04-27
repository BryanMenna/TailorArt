function Clientes() {
  return (
    <section className="container my-5">
      {/* Título */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Lo que nuestros clientes dicen</h2>
        <p className="text-muted">Historias reales de prendas transformadas</p>
      </div>

      <div className="row g-4">
        {/* Testimonio 1 */}
        <div className="col-md-4">
          <div className="border p-4 h-100">
            <div className="mb-2">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            <p>
              "Mi vestido de novia quedó perfecto. El trabajo fue impecable y el
              trato muy profesional. La recomiendo sin dudarlo"
            </p>

            <div className="d-flex align-items-center mt-3">
              <div
                className="bg-secondary rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <div>
                <strong>María González</strong>
                <p className="small text-muted mb-0">Cliente, Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="col-md-4">
          <div className="border p-4 h-100">
            <div className="mb-2">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            <p>
              "Necesitaba arreglos urgentes y respondieron en 24 horas. Rápido,
              confiable y con excelente calidad. Vuelvo siempre"
            </p>

            <div className="d-flex align-items-center mt-3">
              <div
                className="bg-secondary rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <div>
                <strong>Carlos Méndez</strong>
                <p className="small text-muted mb-0">Cliente, Córdoba</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonio 3 */}
        <div className="col-md-4">
          <div className="border p-4 h-100">
            <div className="mb-2">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            <p>
              "Transformaron una prenda vieja en algo nuevo y hermoso. El
              detalle y la dedicación se notan en cada puntada"
            </p>

            <div className="d-flex align-items-center mt-3">
              <div
                className="bg-secondary rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <div>
                <strong>Laura Sánchez</strong>
                <p className="small text-muted mb-0">Cliente, Rosario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clientes;
