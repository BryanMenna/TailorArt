import { useState } from "react";

function Preguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      pregunta: "¿Cuánto tiempo tarda un arreglo?",
      respuesta:
        "Los arreglos básicos se entregan en 5 a 7 días. Las confecciones a medida toman entre 10 y 15 días. Los vestidos de lujo pueden requerir 20 a 30 días según complejidad. Siempre confirmamos el plazo exacto al recibir tu solicitud",
    },
    {
      pregunta: "¿Puedo cambiar mi pedido después de encargarlo?",
      respuesta:
        "Sí, siempre que el trabajo no haya comenzado. Una vez iniciado, los cambios pueden afectar el plazo y costo. Comunícate con nosotros lo antes posible si necesitas modificaciones",
    },
    {
      pregunta: "¿Cómo tomo mis medidas correctamente?",
      respuesta:
        "Te enviamos una guía detallada al confirmar tu solicitud. Medimos busto, cintura, cadera, largo y otros puntos según la prenda. Si prefieres, podemos hacerlo en persona en nuestro taller",
    },
     {
      pregunta: "¿Cómo cuido mi prenda después de recibirla?",
      respuesta:
        "Incluimos instrucciones de lavado según el material. Generalmente recomendamos lavar en agua fría, secar al aire y planchar a baja temperatura. Evita la secadora para prendas delicadas",
    },
     {
      pregunta: "¿Ofrecen servicio de recogida y entrega?",
      respuesta:
        "Sí, ofrecemos recogida y entrega sin costo adicional en la zona. Coordina los horarios al enviar tu solicitud. Para zonas alejadas, consultanos por disponibilidad",
    },
    
  ];

  return (
    <section className="container my-5">
      <h2 className="fw-bold">Preguntas</h2>

      {data.map((item, index) => (
        <div key={index} className="border-top py-4">
          {/* HEADER */}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggle(index)}
          >
            <strong>{item.pregunta}</strong>
            <span>{openIndex === index ? <i className="bi bi-chevron-compact-up"></i> : <i className="bi bi-chevron-compact-down"></i>}</span>
          </div>

          {/* CONTENIDO */}
          {openIndex === index && (
            <div className="mt-3 text-muted">
              {item.respuesta}
            </div>
          )}
        </div>
      ))}

       {/* SECCIÓN FINAL */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold">¿Aún tienes dudas?</h3>
        <p className="text-muted">
          Estamos aquí para ayudarte. Contacta directamente con nosotros
        </p>

        <button className="btn btn-outline-custom btn-sm">
          Enviar mensaje
        </button>
      </div>
    </section>
  );
}

export default Preguntas;