import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "./Cart.scss";
import Reactotron from "reactotron-react-js";
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
const renderTableItem = (data, delFunction) => {
  return data.map((item, index) => {
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{item.barcode}</td>
          <td>
            <img src={item?.path_file[0]?.path_file} />
            {item?.electronic?.name}
          </td>
          <td class="price-text">
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={item.price}
              suffix="VND"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
            />
          </td>
          <td>  <NumberFormat
              thousandsGroupStyle="thousand"
              value={item.price}
              suffix="VND"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
            /></td>
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
  const [res, setRes] = useState(data);
  useEffect(() => {
    setRes(data);
  }, [res]);
  Reactotron.log(data, "data");
  Reactotron.log(res, "res");
  const onDeleteProduct = (id) => {
    let tmp = [...data];
    tmp.splice(id, 1);
    console.log(id);
    console.log(tmp);
    // setData(tmp);
  };
  return (
    <>
      {res.length === 0 ? (
        <h3>Empty cart!</h3>
      ) : (
        <>
          <Table className={className} striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>SKU</th>
                <th>Name</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderTableItem(res, onDeleteProduct)}</tbody>
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
          </Row>
        </>
      )}
    </>
  );
}

export default CartTable;
