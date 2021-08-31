import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { IoIosCheckmark } from "react-icons/io";




<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>

const ApprovedRequest = () =>{
    return(


      <div className="container">
<Card>

<h1 align="center" style={{color: 'red'}} >Approve Request</h1>

<Card.Body>

<div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Vehicle Name</th>
      <th>Vehicle Category</th>
      <th>Vehicle Number</th>
      <th>Vehicle Problem</th>
      <th>Vehicle Approve</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Verna</td>
      <td>4 wheel</td>
      <td>1234</td>
      <td>Breaks not working</td>
      <td>
      <Link to="/Approve" className="btn btn-primary">Approve</Link>
      </td>
    </tr>
  </tbody>
</Table>

</div>

</Card.Body>
</Card>
      </div>
      )

}
export default ApprovedRequest