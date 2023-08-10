import React from "react";
// import FormContainer from "../components/FormContainer";
import { Container, Row, Col,Card } from "react-bootstrap";
// import { GlobalContext } from "../context/GlobalState";
import ButtonComponent from "./ButtonComponent";

export const StationComponent = () => {
  // const { editStation } = useContext(GlobalContext);
  // const { station } = useContext(GlobalContext);
  // console.log(station);

  return (

    <>
      <Container>
        <Card>
        <h5 className="text-primary">Click the station to view the trains passing through that station</h5>
        </Card>
        <Row className="justify-content-md-center mt-2">
          <Col md={4} >
            <ButtonComponent
              station="Chennai"
            />
            <ButtonComponent
              station="Trichirapalli"
            />
            <ButtonComponent
              station="Vriddhachalam"
            />
            <ButtonComponent
              station="Tambaram"
            />
            <ButtonComponent
              station="Villupuram"
            />
            <ButtonComponent
              station="Karur"
            />
            <ButtonComponent
              station="Tiruppur"
            />
            <ButtonComponent
              station="Coimbatore"
            />
            <ButtonComponent
              station="Erode"
            />

          </Col>
          <Col md={4}>
            <ButtonComponent
              station="Chidambaram"
            />
            <ButtonComponent
              station="Bhuweneshwar"
            />
            <ButtonComponent
              station="Manduadih"
            />
            <ButtonComponent
              station="Pudukkottai"
            />
            <ButtonComponent
              station="Keeranur"
            />  <ButtonComponent
              station="Kanniyakumari"
            />
            <ButtonComponent
              station="Vriddhachalam"
            />
            <ButtonComponent
              station="Tirumayam"
            />
            <ButtonComponent
              station="Chettinad"
            />

          </Col>
          <Col md={4}>
            <ButtonComponent
              station="Rameshwaram"
            />
            <ButtonComponent
              station="Ramanathapuram"
            />
            <ButtonComponent
              station="Paramakkudi"
            />
            <ButtonComponent
              station="Manamadurai"
            />
            <ButtonComponent
              station="Sivaganga"
            />
            <ButtonComponent
              station="Aruppukkottai"
            />
            <ButtonComponent
              station="Virudhunagar"
            />
            <ButtonComponent
              station="Tanjore"
            />
            <ButtonComponent
              station="Senkottai"
            />

          </Col>
        </Row>
      </Container>

    </>

  );
};

export default StationComponent;
