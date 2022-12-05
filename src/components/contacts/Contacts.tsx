import LinkedInfo from "./contacts-items/LinkedInfo";
import SkypeInfo from "./contacts-items/SkypeInfo";
import TelegrammInfo from "./contacts-items/TelegrammInfo";
import ViberInfo from "./contacts-items/ViberInfo";
import GitHub from './contacts-items/GitHub';
import City from "./contacts-items/City";
import Mail from "./contacts-items/Mail";

function Contacts() {
  return ( 
    <div className="contacts">
      <ViberInfo/>
      <TelegrammInfo/>
      <SkypeInfo/>
      <LinkedInfo/>
      <GitHub />
      <Mail />
      <City />
    </div>
    );
}

export default Contacts;