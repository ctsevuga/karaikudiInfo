import React, { useState, useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import busTimings from '../data/busTimings'
import { BusContext } from "../context/BusState";

import './Table2.css';

export const BusComponent = () => {
  const { stop,amPm } = useContext(BusContext);
  const [busTimingsSet, setBusTimingsSet] = useState([])


  useEffect(() => {
    const newBusTiming = busTimings.filter(
      (place) => place.To === stop && place.AM_PM === amPm
    );
    setBusTimingsSet(newBusTiming)

  }, [stop,amPm])

  
  return (
    <>
    
    
      <h3 className="text-secondary">Bus Timing to {stop}</h3>

      <Table striped bordered hover responsive mb-5 variant="dark" className='table-bus'>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th dataSort={ true }>Time @ Karaikudi </th>
            <th>Destination</th>
            <th>Service</th>
            <th>Stops</th>
            <th>Route</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {busTimingsSet?.map((busTiming) => (
            <tr key={busTiming.id}>
              <td>{busTiming.From}</td>
              <td>{busTiming.To}</td>
              <td>{busTiming.Time}</td>
              <td>{busTiming.Destination}</td>
              <td>{busTiming.Service}</td>
              <td>{busTiming.stops}</td>
              <td>{busTiming.Route}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     
      
    </>
  )
};

export default BusComponent;