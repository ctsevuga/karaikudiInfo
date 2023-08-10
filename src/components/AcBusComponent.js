import React from "react";
import { Table } from "react-bootstrap";
import karaikudiMadurai from '../data/karaikudiMadurai'
import karaikudiTrichy from '../data/karaikudiTrichy'
import trichyKaraikudi from '../data/TrichyKaraikudi'
import maduraiKaraikudi from '../data/maduraiKaraikudi'
import './Table.css';

export const AcBusComponent = () => {

    return (
        <>
        <hr></hr>
          <h3 className="text-secondary">AC Bus Service To Trichy</h3>
    
          <Table striped bordered hover responsive className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {karaikudiTrichy?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>      
          <h3 className="text-secondary">AC Bus Service From Trichy</h3>
          <Table striped bordered hover responsive variant="dark" className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {trichyKaraikudi?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">AC Bus Service To Madurai</h3>
          <Table striped bordered hover responsive className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {karaikudiMadurai?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr></hr>
          <h3 className="text-secondary">AC Bus Service From Madurai</h3>

          <Table striped bordered hover responsive variant="dark" className='table-style,table-sm'>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {maduraiKaraikudi?.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.From}</td>
                  <td>{bus.To}</td>
                  <td>{bus.Time}</td>
                </tr>
              ))}
            </tbody>
          </Table>

    
        </>
      )
    };




export default AcBusComponent;