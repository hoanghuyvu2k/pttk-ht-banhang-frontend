import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Cart.scss";
import CartTable from "./CartTable";
function Cart() {
  return (
    <Container className="cart-view bg-light ps-5 pt-2" fluid>
      <Row className="ms-3">
        <Col className="top-line" >
          <a href="#" >Home</a>
          <i class="fas fa-chevron-right fa-xs"></i>
          <span>Cart</span>
        </Col>
      </Row>
      <Row className="title my-4 ms-2">
        <Col className="" >
          <h2>Cart</h2>
        </Col>
      </Row>
      <Row buttonView className="table-view">
        <CartTable className="cart-table" />
      </Row>
      <Row className="table-view">
        {/* <CartTable className="cart-table" /> */}
      </Row>
    </Container>
  );
}

export default Cart;
