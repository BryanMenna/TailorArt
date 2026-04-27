import '../Css/whatsapp.css'

function WhatsappButton (){
    return (
    <a
      href="https://wa.me/5493518049839?text=Hola%20quiero%20consultar%20por%20un%20presupuesto"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
    );
}

export default WhatsappButton;