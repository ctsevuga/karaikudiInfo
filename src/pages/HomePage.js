import TempleCarouselComponent from "../components/TempleCarouselComponent";
import KaraikudiComponent from "../components/KariakudiComponent";
import AlagappaChettiyarComponent from "../components/AlagappaChettiyarComponent";

import {
  Row,
  Col
} from "react-bootstrap";
const HomePage = () => {

  return (
    <>
      <TempleCarouselComponent />
      <Row className="mt-5">
        <Col md={6}>
          <KaraikudiComponent/>
        </Col>  
        <Col md={6}>
          <AlagappaChettiyarComponent/>
        </Col>  
      </Row>
     </>
  );
};

export default HomePage;

