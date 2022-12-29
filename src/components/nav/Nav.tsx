import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigateHeader() {
  return (
    <Navbar key='sm' expand='sm' variant="tabs" className="nav-panel">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/about">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certificate">Certificats</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateHeader;
