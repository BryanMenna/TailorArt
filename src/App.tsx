import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Presupuesto from "./components/Presupuesto";
import Servicios from "./components/Servicios";
import Especialidad from "./components/Especialidad";
import Portafolio from "./components/Portafolio";
import Galeria from "./components/Galeria";
import SolicitaPresupuesto from "./components/SolicitaPresupuesto";
import PreciosOrientativos from "./components/PreciosOrientativos";
import Precios from "./components/Precios";
import Opiniones from "./components/Opiniones";
import Clientes from "./components/Clientes";
import Dudas from "./components/Dudas";
import Preguntas from "./components/Preguntas";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import Whatsapp from "./components/WhatsappButton";



function App(){
  
  return (
      <>
      <Navbar/>
      <Hero />
      <Presupuesto/>
      <Servicios/>
      <Especialidad/>
      <Portafolio/>
      <Galeria/>
      <SolicitaPresupuesto/>
      <PreciosOrientativos/>
      <Precios/>
      <Opiniones/>
      <Clientes/>
      <Dudas/>
      <Preguntas/>
      <Ubicacion/>
      <Footer/>
      <Whatsapp/>
      
      </>
  ); 
}

export default App;