import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";



function Approve() {
  return (
    
    <div className="container">

        <Card.Body>
     
            <Form>
              <h3 className="p-3 text-danger">Approve Request</h3>
                <Form.Group className="mb-3" controlId="formCost">
                    <Form.Label className="text-primary">Repair Cost </Form.Label>
                    <Form.Control type="text" style={{ width: '50%' }} />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formAssign">
                <Form.Label className="text-primary">Assign Mechanic </Form.Label>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect" style={{ width: '50%' }}>
                    <option value="0">Click To Choose</option>
                    <option value="1">Remy </option>
                    <option value="2">Ryan </option>
                    <option value="3">Brown </option>
                    <option value="3">June </option>
                </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formAssign">
                <Form.Label className="text-primary">Status </Form.Label>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect" style={{ width: '50%' }}>
                    <option value="0">Select</option>
                    <option value="1">Pending</option>
                    <option value="2">Approved</option>
                    <option value="3">Released</option>
                </Form.Select>
                </Form.Group>
                
                <Button variant="success" type="Submit">Submit</Button>
            </Form>

             
    </Card.Body>
    </div>
  );
}

export default Approve;