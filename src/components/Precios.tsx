function Precios() {
  return (
    <section className="container my-5">
      {/*Titulo */}
      <div className="text-center mb-5">
        <p className="text-muted mb-1">Paquetes</p>
        <h2 className="fw-bold">Arreglos basicos</h2>
        <p className="text-center">
          Soluciones rápidas para tu guardarropa diario
        </p>
      </div>
      <div className="row g-4">
        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="p-4 h-100 text-center border border-dark d-flex flex-column" style={{ borderWidth: "2px" }}>
            <p>Desde</p>
            <h2 className="fw-bold">$25</h2>
            <p className="text-muted">por prenda</p>

            <ul className="list-unstyled text-start mt-4">
              <li>✔ Ajustes de largo y ancho</li>
              <li>✔ Cierre de costuras</li>
              <li>✔ Entrega en 5 días</li>
            </ul>

            <button className="btn btn-custom w-100 mt-auto">
              Pedir presupuesto
            </button>
          </div>
        </div>
        {/*Card 2 (Destacada) */}
        <div className="col-md-4">
          <div className="p-4 h-100 text-center border border-dark d-flex flex-column" style={{ borderWidth: "2px" }}>
            <p>Confección a medida</p>
            <h3 className="fw-bold">
              Creamos desde cero según tus especificaciones
            </h3>
            <p className="mt-3">Desde</p>

            <ul className="list-unstyled text-start mt-3">
              <li>✔ $150 por prenda</li>
              <li>✔ Diseño personalizado</li>
              <li>✔ Materiales de tu elección</li>
            </ul>

            <button className="btn btn-custom w-100 mt-4">
              Pedir presupuesto
            </button>
          </div>
        </div>

        {/*Card 3 */}
        <div className="col-md-4">
          <div className="p-4 h-100 text-center border border-dark d-flex flex-column" style={{ borderWidth: "2px" }}>
            <p>Entrega en 10 a 15 días</p>
            <h3 className="fw-bold">Pedir presupuesto</h3>
            <p className="mt-3">Vestido a medida</p>

            <ul className="list-unstyled text-start mt-3">
              <li>✔ Prendas de lujo</li>
              <li>✔ Desde $300</li>
              <li>✔ Trabajo artesanal</li>
            </ul>

            <button className="btn btn-custom w-100 mt-auto">
              Pedir presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Precios;
