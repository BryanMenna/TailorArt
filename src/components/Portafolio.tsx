function Portafolio(){
    return(
        <section className="container text-center my-5">
            <p className="text-muted mb-1">Galería</p>
            <h2 className="fw-bold">Portafolio</h2>
            <p className="text-muted mt-3 mx-auto" style={{maxWidth:"600px"}}>Mira lo que hemos hecho. Cada trabajo cuenta una historia de precisión y dedicación.</p>

            <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-custom ">Explorar</button>
                <button className="btn btn-outline-custom btn-sm">
                    Filtrar
                </button>
            </div>

        </section>
    )
}

export default Portafolio;