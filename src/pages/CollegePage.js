import { Row,  Container } from "react-bootstrap";
import CollegeComponent from '../components/CollegeComponent'
import colleges from '../data/colleges'
const CollegePage = () => {
  return (
    <Container fluid>
      <Row>
        {colleges.map((college, id) => (
          <CollegeComponent key={id} college={college} idx={id} />
          ))}
      </Row>
    </Container>
  );
};

export default CollegePage;