import imagen from '../img/sin-foto.png'

function Galeria() {
  return (
    <section className="container text-center my-5">
      <h2 className="fw-bold">Galería de trabajos</h2>
      <p className="text-muted mb-4">
        Explora nuestros proyectos antes y después
      </p>

      <div
        id="galeriaCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-3">
              <div className="col-md-4">
                <img src={imagen} className="img-fluid rounded" />
              </div>
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-3">
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#galeriaCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#galeriaCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
        </button>
      </div>
    </section>
  );
}

export default Galeria;
