import {
  Navbar,
  Nav,
  Container,

} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";


const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">KARAIKUDI</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>
                Home
                <span className="position-absolute "></span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/colleges">
              <Nav.Link>
                Colleges
                <span className="position-absolute "></span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/train">
              <Nav.Link>
                Train
                <span className="position-absolute"></span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/bus">
              <Nav.Link>
                Bus
                <span className="position-absolute"></span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;

