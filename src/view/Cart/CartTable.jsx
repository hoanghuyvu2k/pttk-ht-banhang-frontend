import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Cart.scss";
const fakeData = [
    {
        id: 0,
        no: 1,
        sku: "HN1",
        name: "Iphone 13 Pro Max 1TB",
        price: 999,
        quantity: 1,
        img: 'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp'
    }, {
        id: 1,
        no: 2,
        sku: "HN1",
        name: "Iphone 13 Pro Max 1TB",
        price: 999,
        quantity: 1,
        img: 'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp'
    }, {
        id: 2,
        no: 3,
        sku: "HN1",
        name: "Iphone 13 Pro Max 1TB",
        price: 999,
        quantity: 1,
        img: 'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp'
    }, {
        id: 3,
        no: 4,
        sku: "HN1",
        name: "Iphone 13 Pro Max 1TB",
        price: 999,
        quantity: 1,
        img: 'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp'
    }
];
const renderTableItem = (data, delFunction) => {
    return (
        data.map((item, index) => {
            return (
                <>
                    <tr>
                        <td>{item.no}</td>
                        <td>{item.sku}</td>
                        <td>
                            <img src={item.img} />
                            {item.name}
                        </td>
                        <td class="price-text" >${item.price}</td>
                        <td>
                            <input type="number" id="tentacles" name="tentacles"
                                min="0" max="100"></input>
                        </td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                            <button onClick={() => {
                                delFunction(index)
                            }} >
                                <i class="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                </>
            )
        })
    );
}
function CartTable({ className, buttonView }) {
    const [data, setData] = useState(fakeData);
    const onDeleteProduct = (id) => {
        let tmp = [...data];
        tmp.splice(id, 1);
        console.log(id);
        console.log(tmp);
        setData(tmp);
    }
    return (
        <>
            {
                data.length === 0 ? <h3>Empty cart!</h3> :
                    <>
                        <Table className={className} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>SKU</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableItem(data, onDeleteProduct)}
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
                                <Button onClick={() => {
                                    setData([]);
                                    console.log(data)
                                }} variant="danger">
                                    <i class="fas fa-times me-2"></i>
                                    Remove all
                                </Button>
                            </Col>
                        </Row>
                    </>
            }
        </>
    );
}

export default CartTable;
