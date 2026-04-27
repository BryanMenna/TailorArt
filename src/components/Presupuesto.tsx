function Presupuesto(){
    return(
        <section className="container my-5 text-center">
            <p className="text-muted mb-1">Rapidez</p>
            <h2 className="fw-bold">
                Presupuesto en 24 horas
            </h2>
            <p className="text-muted mb-5">
                Recibe tu estimado sin demoras. Respondemos rápido a tus consultas.
            </p>
            <div className="row g-4">
                {/*Card 1 */}
                <div className="col-md-4">
                    <div className="bg-secondary text-white p-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <p className="small">Cosultar</p>
                            <h4 className="fw-bold">Medida</h4>
                            <p>Trabajo a medida exacta</p>
                        </div>
                        <p className="small">Cada prenda se ajusta a tus necesidades y cuerpo. Nada genérico aquí. <i className="bi bi-chevron-compact-right"></i> </p>

                    </div>
                </div>

                {/*Card 2 */}
                <div className="col-md-4">
                    <div className="bg-secondary text-white p-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <p className="small">Cosultar</p>
                            <h4 className="fw-bold">Entrega</h4>
                            <p>Recogida y entrega opcional</p>
                        </div>
                        <p className="small"> Te llevamos la prenda terminada. Comodidad en cada paso del proceso. <i className="bi bi-chevron-compact-right"></i> </p>

                    </div>
                </div>

                {/*Card 3 */}
                <div className="col-md-4">
                    <div className="bg-secondary text-white p-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <p className="small">Cosultar</p>
                            <h4 className="fw-bold"> Medium length section heading goes here</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <button className="btn btn-outline-light btn-sm align-self-start">
                        Button <i className="bi bi-chevron-compact-right"></i>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );

}

export default Presupuesto;