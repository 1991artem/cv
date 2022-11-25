import { Carousel } from "react-bootstrap";
import Contacts from "../contacts/Contacts";
import PersonalData from "../contacts/PersonalData";

function Start() {
  return ( 
    <div className="first-page">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block first-page_img"
          src={require("../../img/avatar.png")}
          alt='Artem Puzik'/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block first-page_img"
          src={require("../../img/IMG_4519.png")} 
          alt='Artem Puzik'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block first-page_img"
          src={require("../../img/IMG_4520.png")} 
          alt='Artem Puzik'/>
      </Carousel.Item>
    </Carousel>
    <PersonalData/>
    <Contacts/>
    </div>
    );
}

export default Start;