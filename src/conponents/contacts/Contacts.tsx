import LinkedInfo from "./LinkedInfo";
import SkypeInfo from "./SkypeInfp";
import TelegrammInfo from "./TelegrammInfo";
import ViberInfo from "./ViberInfo";

function Contacts() {
  return ( 
    <div className="contacts">
      <ViberInfo/>
      <TelegrammInfo/>
      <SkypeInfo/>
      <LinkedInfo/>
    </div>
    );
}

export default Contacts;