import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import "./Order.scss";
import OrderTable from "./OrderTable";
import Reactotron from "reactotron-react-js";
function Order() {
  return (
    <Container className="cart-view bg-light ps-5 pt-2" fluid>
      <Row className="ms-3">
        <Col className="top-line">
          <a href="#">Trang chủ</a>
          <i class="fas fa-chevron-right fa-xs"></i>
          <span>Đơn hàng</span>
        </Col>
      </Row>
      <Row className="title my-4 ms-2">
        <Col className="">
          <h2>Đơn hàng</h2>
        </Col>
      </Row>
      <Row buttonView className="table-view">
        <OrderTable className="cart-table" />
      </Row>
    </Container>
  );
}

export default Order;
