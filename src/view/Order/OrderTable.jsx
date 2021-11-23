import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "./Order.scss";
import Reactotron from "reactotron-react-js";
import Cookies from "js-cookie";
import { ApiClient } from "../../api/config.js";
import { PRODUCT_API } from "../../constants/constants.api";
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
const getOrderStatus = (id) => {
  switch (id) {
    case 0:
      return "Đang xử lý";
    case 1:
      return "Đang vận chuyển";
    case 2:
      return "Đã giao";
    default:
      break;
  }
};
const renderTableItem = (data) => {
  return data.map((item, index) => {
    return (
      <>
        <tr>
          <td>{item?.cart?.id}</td>
          <td>{item?.cart?.mount}</td>
          <td>
            <img source={item?.cart?.book_items[0]?.file[0]?.path_file} />
          </td>
          <td>
            {item?.cart?.book_items
              .map((item) => {
                return item?.book?.title;
              })
              .toString()+','+item?.cart?.electronic_items
              .map((item) => {
                return item?.electronic?.name;
              })
              .toString()}
          </td>
          <td>{getOrderStatus(item?.cart?.status)}</td>
          <td class="price-text">
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={item?.cart?.total_price}
              suffix="VND"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
              decimalScale={2}
            />
          </td>
        </tr>
      </>
    );
  });
};
function OrderTable({ className, buttonView, data }) {
  const products = Cookies.get("items") ? JSON.parse(Cookies.get("items")) : [];
  const [orders, setOrders] = useState([]);
  const [productsDetail, setProductsDetail] = useState([]);
  const [cookiesItem, setCookiesItem] = useState([]);
  const [isReady, setIsReady] = useState(true);
  const isBookItem = true;
  const electricLength =
    products.length > 0 ? products[`electronic_item_ids`].length : 0;
  const [payload, setPayload] = useState({
    address: "",
    bank_id: "",
    book_item_ids: [],
    clothes_item_ids: null,
    customer_id: 2,
    electronic_item_ids: [],
    shipment_cost: 20000,
    shoes_item_ids: null,
    type_payment: "check",
    type_shipment: "cod",
    username: "",
  });
  const onDeleteProduct = (id) => {
    let tmp = [...data];
    tmp.splice(id, 1);
    console.log(id);
    console.log(tmp);
    // setData(tmp);
  };
  const test = orders[0]?.cart?.book_items.map((item) => {
    return item?.book?.title;
  });
  useEffect(() => {
    // setPayload({
    //   ...payload,
    //   electronic_item_ids: products.length > 0 ? products[`electronic_item_ids`].map(
    //     (item) => item.id
    //   ):[],
    //   book_item_ids:products.length > 0 ? products[`book_item_ids`].map((item) => item.id):[],
    // });
    viewOrder();
  }, []);
  const viewOrder = async () => {
    try {
      let res = await ApiClient.get(`${PRODUCT_API.ORDER.VIEW}?username=luatnq123`);
      Reactotron.log(res);
      setOrders(res.data);
    } catch (error) {}
  };
  return (
    <>
      {isReady && (
        <>
          {products.length === 0 ? (
            <h3>Empty!</h3>
          ) : (
            <>
              <Table className={className} striped bordered hover>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Số lượng sản phẩm</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Trạng thái</th>
                    <th>Tổng giá trị</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableItem(
                    orders,
                    onDeleteProduct,
                    !isBookItem,
                    electricLength
                  )}
                </tbody>
                {/* <tbody>
                  {renderTableItem(
                    products[`book_item_ids`],
                    onDeleteProduct,
                    isBookItem,
                    electricLength
                  )}
                </tbody> */}
              </Table>
            </>
          )}
        </>
      )}
    </>
  );
}

export default OrderTable;
