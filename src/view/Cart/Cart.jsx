import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import "./Cart.scss";
import CartTable from "./CartTable";
import { ApiClient } from "../../api/config.js";
import { PRODUCT_API } from "../../constants/constants.api";
import Reactotron from "reactotron-react-js";
function Cart() {
  return (
    <Container className="cart-view bg-light ps-5 pt-2" fluid>
      <Row className="ms-3">
        <Col className="top-line">
          <a href="#">Trang chủ</a>
          <i class="fas fa-chevron-right fa-xs"></i>
          <span>Giỏ hàng</span>
        </Col>
      </Row>
      <Row className="title my-4 ms-2">
        <Col className="">
          <h2>Giỏ hàng</h2>
        </Col>
      </Row>
      <Row buttonView className="table-view">
        <CartTable className="cart-table" />
      </Row>
    </Container>
  );
}

export default Cart;
