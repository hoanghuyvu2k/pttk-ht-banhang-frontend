import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function ItemProduct(props) {
    useEffect( () => {
        console.log(props)
    })
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        <Button variant="primary">{props.data.btn}</Button>
      </Card.Body>
    </Card>
  );
}
export default ItemProduct;
