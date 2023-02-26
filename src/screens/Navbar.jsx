import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./lh.png";
function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ background: "rgba(27, 27, 27, 0.278)" }}
    >
      <Container>
        <Navbar.Brand href="./" className="newlogo">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#story" className="font_family">
              Story
            </Nav.Link>
            <Nav.Link eventKey={2} href="#roadmap" className="font_family">
              Roadmap
            </Nav.Link>
            <Nav.Link eventKey={2} href="#partner" className="font_family">
              Partner
            </Nav.Link>
            <Nav.Link eventKey={2} href="#team" className="font_family">
              Team
            </Nav.Link>
            <Nav.Link eventKey={2} href="#faq" className="font_family">
              FAQ's
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
