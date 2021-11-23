import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "./Cart.scss";
import Reactotron from "reactotron-react-js";
import Cookies from "js-cookie";
import { ApiClient } from "../../api/config.js";
import { PRODUCT_API } from "../../constants/constants.api";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
const fakeData = [
  {
    id: 0,
    no: 1,
    sku: "HN1",
    name: "Iphone 13 Pro Max 1TB",
    price: 999,
    quantity: 1,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
  },
  {
    id: 1,
    no: 2,
    sku: "HN1",
    name: "Iphone 13 Pro Max 1TB",
    price: 999,
    quantity: 1,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
  },
  {
    id: 2,
    no: 3,
    sku: "HN1",
    name: "Iphone 13 Pro Max 1TB",
    price: 999,
    quantity: 1,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
  },
  {
    id: 3,
    no: 4,
    sku: "HN1",
    name: "Iphone 13 Pro Max 1TB",
    price: 999,
    quantity: 1,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
  },
];
const CATEGORY = {
  ELECTRONIC: "electronic_item_ids",
  BOOK: "book_item_ids",
};
const renderTableItem = (data, delFunction, isBookItem, electricLength) => {
  return data.map((item, index) => {
    return (
      <>
        <tr>
          <td>{isBookItem ? electricLength + index + 1 : index + 1}</td>
          <td>{isBookItem ? item?.bar_code : item?.barcode}</td>
          <td>
            <img
              src={
                isBookItem
                  ? item?.file[0]?.path_file
                  : item?.path_file[0]?.path_file
              }
            />
            {isBookItem ? item?.book?.name : item?.electronic?.name}
          </td>
          <td class="price-text">
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={item?.price}
              suffix="VND"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
            />
          </td>
          <td>
            {" "}
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={item?.price}
              suffix="VND"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
            />
          </td>
          <td>
            <button
              onClick={() => {
                delFunction(index);
              }}
            >
              <i class="fas fa-times"></i>
            </button>
          </td>
        </tr>
      </>
    );
  });
};
function CartTable({ className, buttonView, data }) {
  const products = Cookies.get("items") ? JSON.parse(Cookies.get("items")) : [];
  const [productsDetail, setProductsDetail] = useState([]);
  const [cookiesItem, setCookiesItem] = useState([]);
  const [isReady, setIsReady] = useState(true);
  const isBookItem = true;
  const state = useSelector((state) => state.login.userInfo)
  const electricLength =products.length > 0 ?  products[`electronic_item_ids`].length:0;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [payload, setPayload] = useState({
    address: "",
    bank_id: "",
    book_item_ids: [],
    clothes_item_ids: null,
    electronic_item_ids: [],
    shipment_cost: 20000,
    shoes_item_ids: null,
    type_payment: "check",
    type_shipment: "cod",
    username: state.username,
  });
  const onDeleteProduct = (id) => {
    let tmp = [...data];
    tmp.splice(id, 1);
    console.log(id);
    console.log(tmp);
    // setData(tmp);
  };
  useEffect(() => {
    setPayload({
      ...payload,
      electronic_item_ids: products.length != 0 ? products[`electronic_item_ids`].map(
        (item) => item.id
      ):[],
      book_item_ids:products.length != 0 ? products[`book_item_ids`].map((item) => item.id):[],
    });
  }, []);
  const createOrder = async () => {
      try {
          let res = await ApiClient.post(PRODUCT_API.ORDER.CREATE,payload);
          enqueueSnackbar(res.data.message, { variant: "success" });
          history.push("/Home");
      } catch (error) {
          
      }
  }
  return (
    <>
      {isReady && (
        <>
          {products.length===0
          ? (
            <h3>Empty cart!</h3>
          ) : (
            <>
              <Table className={className} striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Barcode</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableItem(
                    products[`electronic_item_ids`],
                    onDeleteProduct,
                    !isBookItem,
                    electricLength
                  )}
                </tbody>
                <tbody>
                  {renderTableItem(
                    products[`book_item_ids`],
                    onDeleteProduct,
                    isBookItem,
                    electricLength
                  )}
                </tbody>
              </Table>
              <Row>
                <Col>
                  <Button variant="primary">
                    <i class="fas fa-arrow-left me-2"></i>
                    Back to shop
                  </Button>
                </Col>
                <Col className=" d-flex flex-row-reverse ">
                  <Button
                    onClick={() => {
                      // setData([]);
                      console.log(data);
                    }}
                    variant="danger"
                  >
                    <i class="fas fa-times me-2"></i>
                    Remove all
                  </Button>
                </Col>
                <Row className="table-view mt-3">
                  {/* <CartTable className="cart-table" /> */}
                  <Col md={6}>
                      <Form.Group className="mb-3" controlId="bankId">
                        <Form.Label>Bank Account</Form.Label>
                        <Form.Control
                          value={payload.bank_id}
                          onChange={(e) => {
                            setPayload({ ...payload, bank_id: e.target.value });
                          }}
                          type="text"
                          placeholder="Enter bank account"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          value={payload.address}
                          onChange={(e) => {
                            setPayload({ ...payload, address: e.target.value });
                          }}
                          type="text"
                          placeholder="Enter address"
                        />
                      </Form.Group>
                      {/* <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          value={payload.username}
                          onChange={(e) => {
                            setPayload({ ...payload, username: e.target.value });
                          }}
                          type="text"
                          placeholder="Enter username"
                        />
                      </Form.Group> */}
                      <Button
                        onClick={() => {
                            createOrder()
                        }}
                        variant="primary"
                      >
                        Submit order
                      </Button>
                  </Col>
                </Row>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
}

export default CartTable;
