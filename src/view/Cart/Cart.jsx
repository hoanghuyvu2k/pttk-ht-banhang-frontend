import React, { useEffect, useState }from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Cart.scss";
import CartTable from "./CartTable";
import {ApiClient} from "../../api/config.js";
import {PRODUCT_API} from "../../constants/constants.api";
import Reactotron from 'reactotron-react-js'
function Cart() {
  const [dataApi,setDataApi]=useState([]);
  const testApi = async ()=>{

    try {
      let data = {
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
      Reactotron.log(res?.data?.data);
      setDataApi(res?.data?.data)
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
          <a href="#" >Trang chủ</a>
          <i class="fas fa-chevron-right fa-xs"></i>
          <span>Giỏ hàng</span>
        </Col>
      </Row>
      <Row className="title my-4 ms-2">
        <Col className="" >
          <h2>Giỏ hàng</h2>
        </Col>
      </Row>
      <Row buttonView className="table-view">
        <CartTable data={dataApi} className="cart-table" />
      </Row>
      <Row className="table-view">
        {/* <CartTable className="cart-table" /> */}
      </Row>
    </Container>
  );
}

export default Cart;
