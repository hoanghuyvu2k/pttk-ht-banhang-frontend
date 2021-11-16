import React, { useEffect } from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.scss";
import logo from "./scart-mid.png";
import catalogLogo from "./catalog.png";
import { useHistory } from "react-router-dom";
import Reactotron from 'reactotron-react-js'
function Header(props) {
  const history = useHistory();
  return (
    <Container fluid>
      <Row className="contact-line py-1">
        <ul class="nav nav-pills d-flex align-items-center justify-content-between">
          <div className="d-flex flex-row">
            <li>
              <a href="tel:0123456789">
                <i class="fa fa-phone"></i> 0123456789{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-envelope"></i> ndhieuit209@gmail.com{" "}
              </a>
            </li>
          </div>
          <li>
            <Dropdown>
              <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                <i class="fas fa-user fa-xs"></i>
                <span>Tài khoản</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Login
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Row>
      <Row className="header d-flex align-items-center py-3 ">
        <Col className="d-flex justify-content-center" md={4} sm={12} xl={4}>
          <img className="logo" src={logo} />
        </Col>
        <Col className="d-flex flex-row" md={8} sm={12} xl={8}>
          <InputGroup className="w-50">
            <FormControl
              placeholder="Your keyword..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <i class="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup>
          <div class="ms-5">
            <Button variant="outline-primary">
              <i class="fas fa-heart me-2"></i>
              <span >Yêu thích</span>
              </Button>
            <Button onClick={()=>{
              history.push('/Cart')
            }} variant="outline-primary ms-3">
              <i class="fa fa-shopping-cart me-2"></i>
              <span >Giỏ hàng</span></Button>
          </div>
        </Col>
      </Row>
      <Row className="category d-flex justify-content-evenly">
        <Col sm={4} md={4} className="bg-primary categories ">
          <div className="btn-categories">
            <img className="" src={catalogLogo} />
            <span>Danh mục</span>
          </div>
        </Col>
        <Col className="d-flex justify-content-end " sm={8} md={8}>
          <Nav
            className="navbar"
            // activeKey="/home"
          >
            <Nav.Item>
              <Nav.Link eventKey="link-1">Trang chủ</Nav.Link>
            </Nav.Item>
            <Nav.Item className="dropdown">
              <Nav.Link eventKey="link-2">
                Shop<i class="fas fa-caret-down ms-1"></i>
              </Nav.Link>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Giới thiệu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" >Liên hệ</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
