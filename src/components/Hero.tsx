import imagen from '../img/sin-foto.png'

function Hero(){
    return (
        <section className="container my-5">
            <div className="border p-5">
                <div className="row align-items-center">
                    {/*Texto */}
                    <div className="col-md-6">
                        <h1 className="fw bold">
                            Arreglos y <br/>
                            confecciones a <br/>
                            medida
                        </h1>

                        <p className="text-muted mt-3">Rápido, confiable y hecho a mano. Cada prenda recibe atención
                            personal para que quede exactamente como la necesitas.
                        </p>

                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-custom ">
                                Solicitar presupuesto
                            </button>
                            <button className="btn btn-outline-custom btn-sm">
                                Ver portafolio
                            </button>
                        </div>
                    </div>
                         {/* Imagen */}
                        <div className="col-md-6 text-center">
                        <img
                        src={imagen}
                        className="img-fluid opacity-50"
                        alt="imagen"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero;