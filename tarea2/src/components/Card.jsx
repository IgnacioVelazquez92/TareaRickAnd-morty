import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MiCard = (props) => {
  return (
    <Card  className="g-0 shadow my-2 col-5 col-md-4 col-lg-3 ">
      <Card.Img variant="top" src={props.url} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <h6>{props.name}</h6>
        <Button variant="success">ver +</Button>
      </Card.Body>
    </Card>
  )
}

export default MiCard