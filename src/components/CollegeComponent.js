import { Card,  Row, Col } from "react-bootstrap";
import './Card.css';


const CollegeComponent = ({college, idx }) => {

  return (
    <Card className=".card" style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={4}>
          <Card.Title className="text-success" as="div"><strong>{college.name}</strong></Card.Title>
          
          <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={college.image} />
          </Col>
          <Col lg={3}>
          <Card.Text>
            <h5 className="text-success">Facilities</h5>
            {college.facilities}
          </Card.Text>
          <Card.Text>
          <h5 className="text-success">Website</h5>
            {college.webaddress}
          </Card.Text>
        </Col>
        <Col lg={5}>
          <Card.Body>
          <h5 className="text-success">Courses Offered</h5>
           <Card.Text>
           {college.coursesOffered}
            </Card.Text>
        </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CollegeComponent;