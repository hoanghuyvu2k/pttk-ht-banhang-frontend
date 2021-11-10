import React from "react";
import { Nav, Container, Row, Col, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import "./Header.scss";
import logo from './scart-mid.png';
import catalogLogo from './catalog.png';
function Header() {
  return (
    <Container fluid>
      <Row className="contact-line py-1" >
        <ul class="nav nav-pills d-flex align-items-center justify-content-between">
          <div className="d-flex flex-row" >
            <li><a href="tel:0123456789"><i class="fa fa-phone"></i> 0123456789 </a></li>
            <li><a href="#"><i class="fa fa-envelope"></i> ndhieuit209@gmail.com </a></li>
          </div>
          <li>
            <Dropdown>
              <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                <i class="fas fa-user fa-xs"></i>
                <span>User</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Row>
      <Row className="header d-flex align-items-center py-3 ">
        <Col className="d-flex justify-content-center" md={4} sm={12} xl={4} >
          <img className="logo" src={logo} />
        </Col>
        <Col className="d-flex flex-row" md={8} sm={12} xl={8} >
          <InputGroup className="w-50">
            <FormControl
              placeholder="Your keyword..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2"><i class="fas fa-search"></i></InputGroup.Text>
          </InputGroup>
          <a href="#">
            <i class="fas fa-heart"></i>
            <span >Wish list</span>
          </a>
          <a href="#">
            <i class="fa fa-shopping-cart"></i>
            <span >View cart</span>
          </a>
        </Col>
      </Row>
      <Row className="category d-flex justify-content-evenly">
        <Col sm={4} md={4} className="bg-primary categories ">
          <div className="btn-categories">
            <img className="" src={catalogLogo} />
            <span>Categories</span>
          </div>
        </Col>
        <Col className="d-flex justify-content-end " sm={8} md={8}>
          <Nav
            activeKey="/home"
          >
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Dropdown className="dropdown" >
                <Dropdown.Toggle id="dropdown-basic">
                  Shop
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" >Contact us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;