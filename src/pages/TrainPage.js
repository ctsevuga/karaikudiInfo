import StationComponent from "../components/StationComponent";
import TrainComponent from "../components/TrainComponent";
import TrainTimingDetailsComponent from "../components/TrainTimingDetailsComponent";
import TrainFareComponent from "../components/TrainFareComponent";


import {
  Row,
  Col
} from "react-bootstrap";
const TrainPage = () => {

  return (
    <>
      <Row className="mt-5">
        <Col md={9}>
          <StationComponent/>
          <hr></hr>
          <TrainComponent/>
          <hr></hr>
          <TrainTimingDetailsComponent/>
          
        </Col>  
        <Col md={3}>
          <TrainFareComponent/>
          
        </Col>  
      </Row>
     </>
  );
};

export default TrainPage;
