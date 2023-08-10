import React from "react";
import { Table } from "react-bootstrap";
import trichy from '../data/trichy'
import madurai from '../data/madurai'
import ramnad from '../data/ramnad'
import rameshwaram from '../data/rameshwaram'
import erode from '../data/erode'
import './Table.css';

export const SpecialBusComponent = () => {

    return (
        <>
        <hr></hr>
          <h3 className="text-secondary">Special Bus Service To Trichy</h3>
    
          <Table striped bordered hover responsive className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {trichy?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                  <td>{bus.Service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">Special Bus Service To Madurai</h3>
          <Table striped bordered hover responsive variant="dark" className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {madurai?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                  <td>{bus.Service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">Special Bus Service To Ramnad</h3>
          <Table striped bordered hover responsive className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {ramnad?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                  <td>{bus.Service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">Special Bus Service To Rameshwaram</h3>

          <Table striped bordered hover responsive variant="dark" className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {rameshwaram?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                  <td>{bus.Service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">Special Bus Service To Erode</h3>
          <Table striped bordered hover responsive className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {erode?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                  <td>{bus.Service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
    
        </>
      )
    };




export default SpecialBusComponent;