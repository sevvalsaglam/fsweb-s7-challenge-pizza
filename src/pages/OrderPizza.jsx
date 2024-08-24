
import EkMalzemeler from "../components/EkMalzemeler";
import Header from "../components/Header";
import PizzaAdi from "../components/PizzaAdi";
import PizzaBoyutu from "../components/PizzaBoyutu";
import PizzaHamuru from "../components/PizzaHamuru";
import SiparisSection from "../components/SiparisSection";



function OrderPizza(props) {
    const {} = props;
 
    return (
        <>
        <Header></Header>
        <PizzaAdi></PizzaAdi>
        <PizzaBoyutu></PizzaBoyutu>
        <PizzaHamuru></PizzaHamuru>
        <EkMalzemeler></EkMalzemeler>
        <SiparisSection></SiparisSection>
        </>
    );
  }
  
  export default OrderPizza;