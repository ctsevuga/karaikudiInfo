import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col,Button} from "react-bootstrap";
import { BusContext } from "../context/BusState";
import BusButtonComponent from "./BusButtonComponent";
import FormContainer from "./FormContainer";

export const BusRouteComponent = () => {
  const { routes } = useContext(BusContext);
  const { editRoute,editAmPm } = useContext(BusContext);
  
  return (

    <>
    
      <Container>
        
        <h5 className="text-primary">Click the Route to view the buses in that route and then click AM/PM</h5>
        <Button
                      type='button'
                      variant='success'
                      className="m-3" 
                      onClick={() => editAmPm("AM")}
              >
                      AM
              </Button>
              <Button
                      type='button'
                      variant='success'
                      className="m-3"
                      onClick={() => editAmPm("PM")}
              >
                      PM
              </Button>
        
        <Row className="justify-content-md-center mt-2">
        <p className="text-danger">Routes</p>      
          <Col md={4} >
              <Button
                      type='button'
                      variant='primary'
                      className="m-2"
                      onClick={() => editRoute("Thiruppathur")}
                    >
                      Thiruppathur
              </Button>
              <Button
                      type='button'
                      variant='primary'
                      className="m-2"
                      onClick={() => editRoute("Pudukottai")}
                    >
                      Pudukottai
              </Button>
              <Button
                      type='button'
                      variant='primary'
                      className="m-2"
                      onClick={() => editRoute("Devakottai")}
              >
                      Devakottai
              </Button>
              <Button
                      type='button'
                      variant='primary'
                      className="m-2"
                      onClick={() =>editRoute("Aranthanki")}
              >
                      Aranthanki
              </Button>
              <Button
                      type='button'
                      variant='primary'
                      className="m-2"
                      onClick={() => editRoute("Kallal")}
              >
                      Kallal
              </Button>
              <hr></hr>
           </Col>
           <Col md={8} >
           {routes?.map((route) => (
            <BusButtonComponent key={route.id} stop={route.To} />
          ))}
            </Col>
        </Row>
      </Container>
      
    </>

  );
};

export default BusRouteComponent;
