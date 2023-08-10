import BusRouteComponent from "../components/BusRouteComponent";
import BusComponent from "../components/BusComponent";
import AcBusComponent from "../components/AcBusComponent";
import SpecialBusComponent from "../components/SpecialBusComponent";



import {
  Row,
  Col
} from "react-bootstrap";
const BusPage = () => {

  return (
    <>
      <Row className="mt-5">
        <Col md={8}>
          <BusRouteComponent/>
          <BusComponent/>
        </Col>  
        <Col md={4}>
        <AcBusComponent/>
        <SpecialBusComponent/>  
        </Col>  
      </Row>
     </>
  );
};

export default BusPage;