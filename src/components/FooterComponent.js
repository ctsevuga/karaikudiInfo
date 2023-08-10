import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-2">
          <Col className="bg-dark text-white text-center py-2">
            Copyright &copy; InfoWisdom
            <hr></hr>
            email: rwithpower@gmail.com
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

