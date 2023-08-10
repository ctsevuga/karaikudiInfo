import React from "react";
import { Table } from "react-bootstrap";
import trainFare from '../data/trainFare'
import './Table.css';

export const TrainFareComponent = () => {

    return (
        <>
          <h3 className="text-secondary">Train Fare</h3>
    
          <Table striped bordered hover responsive className='table-style'>
            <thead>
              <tr>
                <th>Station</th>
                <th>2nd Express</th>
                <th>2nd Superfast</th>
              </tr>
            </thead>
            <tbody>
              {trainFare?.map((station) => (
                <tr key={station.id}>
                  <td>{station.Station}</td>
                  <td>{station.SecondExpress}</td>
                  <td>{station.SecondSuperfast}</td>
                </tr>
              ))}
            </tbody>
          </Table>
    
        </>
      )
    };




export default TrainFareComponent;