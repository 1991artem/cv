import { Container, Navbar } from "react-bootstrap";
import { NavLink} from 'react-router-dom'

function Nav() {
  return ( 
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about me">About me</NavLink>
            <NavLink to="/skills">Skills</NavLink>
          </div>
        </Container>
      </Navbar>
    );
}

export default Nav;