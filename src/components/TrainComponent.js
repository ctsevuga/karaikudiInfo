import React, { useState, useContext, useEffect } from "react";
import { Row,Table } from "react-bootstrap";
import { TrainContext } from "../context/TrainState";
import trainTimings from '../data/trainTiming'
import './Table.css';

export const TrainComponent = () => {
  const { station } = useContext(TrainContext);
  const [trainTimingsSet, setTrainTimingsSet] = useState([])

  useEffect(() => {
    const newTrainTiming = trainTimings.filter(
      (place) => place.To === station
    );
    setTrainTimingsSet(newTrainTiming)

  }, [station])


  return (
    <>
    <Row className="mt-5">
    {/* <div style={{margin: 30}}> */}
      <h3 className="text-secondary">Train Timing to {station}</h3>

      <Table striped bordered hover responsive mb-5 size="sm" className='table-style'>
        <thead>
          <tr>
            <th>Train No</th>
            <th>From</th>
            <th>To</th>
            <th>Time @ Karaikudi</th>
            <th>Service Days</th>
            <th>Destination</th>
            <th>Other Stations</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trainTimingsSet?.map((trainTiming) => (
            <tr key={trainTiming.id}>
              <td>{trainTiming.TrainNo}</td>
              <td>{trainTiming.From}</td>
              <td>{trainTiming.To}</td>
              <td>{trainTiming.Time}</td>
              <td>{trainTiming.ServiceDays}</td>
              <td>{trainTiming.Destination}</td>
              <td>{trainTiming.OtherStations}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* </div> */}
      </Row>

    </>
  )
};

export default TrainComponent;