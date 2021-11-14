import React, { useEffect, useState }from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Cart.scss";
import CartTable from "./CartTable";
import {ApiClient} from "../../api/config.js";
import {PRODUCT_API} from "../../constants/constants.api";
function Cart() {
  const testApi = async ()=>{

    try {
      var data = {
        card: null,
        chip: null,
        hard_disk: null,
        manufacture: null,
        name: null,
        os: null,
        ram: null,
        rom: null,
        screen: null
      };
      let  res = await ApiClient.post(PRODUCT_API.ELECTRIC.SEARCH,data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
    testApi()
  },[])
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
