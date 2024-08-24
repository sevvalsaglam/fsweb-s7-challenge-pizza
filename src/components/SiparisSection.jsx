import SiparisButonu from "../components/SiparisButonu";
import SiparisNotu from "../components/SiparisNotu";
import SiparisSayaci from "../components/SiparisSayaci";
import SiparisToplami from "../components/SiparisToplami";

function SiparisSection(props) {
    const {} = props;
 
    return (
        <>
        <SiparisNotu></SiparisNotu>
        <SiparisToplami></SiparisToplami>
        <SiparisSayaci></SiparisSayaci>
        <SiparisButonu></SiparisButonu>
        </>
    );
  }
  
  export default SiparisSection;