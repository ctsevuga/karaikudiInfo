import React from "react";
import { Table } from "react-bootstrap";
import trainTimingsDetails from '../data/TrainTimingDetails'
import './Table.css';

export const TrainTimingDetailsComponent = () => {

    return (
        <>
        <div style={{margin: 20}}>
          <h3 className="text-secondary">Trains At Karaikudi Junction</h3>
    
          <Table striped bordered hover responsive mt-1 py-3 variant="dark"  className='table-style '>
            <thead>
              <tr>
                <th>Train No</th>
                <th>From</th>
                <th>Destination</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Service Days</th>
                <th>Stations</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {trainTimingsDetails?.map((trainTiming) => (
                <tr key={trainTiming.id}>
                  <td>{trainTiming.TrainNo}</td>
                  <td>{trainTiming.From}</td>
                  <td>{trainTiming.Destination}</td>
                  <td>{trainTiming.Arrival}</td>
                  <td>{trainTiming.Departure}</td>
                  <td>{trainTiming.ServiceDays}</td>
                  <td>{trainTiming.Stations}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
    
        </>
      )
    };




export default TrainTimingDetailsComponent;