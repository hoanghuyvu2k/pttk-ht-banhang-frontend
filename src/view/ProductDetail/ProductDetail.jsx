import { useState, useEffect } from "react";
import { Container, Row, Col, Input, Button, Label } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "./ProductDetail.scss";
import { ApiClient } from "../../api/config";
import { useHistory } from "react-router-dom";
import queryString from "qs";
function ProductDetail() {
  let history = useHistory();
  const [product, setProduct] = useState({});
  const QS = queryString.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });
  const fetchData = async () => {
    try {
      let res = await ApiClient.get(QS.item + "/" + QS.id);
      setProduct(res.data);
      if (QS.item === "book-item") {
        let relateProduct = await ApiClient.post("book-search", { name: null });
        setRelateProduct(relateProduct.data);
      } else {
        let relateProduct = await ApiClient.post("electronic-items", {
          name: null,
        });
        setRelateProduct(relateProduct.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(product);
  }, []);

  const [relateProduct, setRelateProduct] = useState([]);
  if (QS.item == "book-item")
    return (
      <div className="container mt-5 d-flex justify-content-center ">
        <Col md="9">
          <Row>
            <Col md="6" className="d-flex justify-content-center">
              <div style={{ maxWidth: "300px" }}>
                <Carousel fade>
                  {product.file?.map((anh, idx) => {
                    return (
                      <Carousel.Item key={idx}>
                        <img
                          src={anh.path_file}
                          style={{ maxWidth: "300px", borderRadius: "10px" }}
                          className="w-100"
                          alt=""
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </Col>
            <Col md="6" className="border rounded px-4">
              <h5 className="text-center mt-2">{product.book?.title}</h5>
              <div>ID : {product.id}</div>
              <div className="my-3" style={{ color: "orange" }}>
                $ {product.price}
              </div>
              <div className="my-3">Sale : {product.discount}</div>
              <Row>
                <Col md="4" className="d-flex">
                  <div classname="pt-2">
                    <p> Số lượng:</p>
                  </div>

                  <Input
                    style={{ maxWidth: "50px", maxHeight: "32px" }}
                    className="ms-3"
                    type="number"
                  ></Input>
                </Col>
                <Col md="6">
                  <Button color="primary" size="sm">
                    <i class="fas fa-shopping-cart me-2"></i>
                    Thêm vào giỏ hàng
                  </Button>
                </Col>
              </Row>

              <div className="my-3">
                Số trang : {product.book?.number_of_page}
              </div>
              <div className="my-3">Tác giả : {product.book?.author?.name}</div>
            </Col>
          </Row>
          <Row className="my-4 border-bottom">
            <div
              style={{
                backgroundColor: "#0d6efd",
                maxWidth: "75px",
                color: "white",
                borderRadius: "2px",
                fontSize: "19px",
                fontWeight: "500",
              }}
            >
              Mô tả
            </div>
          </Row>
          <Row>{product.book?.summary}</Row>
          <Row className="my-5 h3">
            <div
              style={{
                backgroundColor: "#0d6efd",
                maxWidth: "8px",
                height: "35px",
                padding: 0,
                marginRight: "10px",
              }}
            ></div>
            Các sản phẩm liên quan
          </Row>
          <Row className="mb-5">
            {relateProduct.map((img, idx) => {
              if (idx < 4)
                return (
                  <Col md="3">
                    <img
                      src={img.file[0].path_file}
                      key={idx}
                      style={{
                        maxWidth: "200px",
                        width: "100%",
                        minHeight: "200px",
                        borderRadius: "10px",
                      }}
                    ></img>
                  </Col>
                );
            })}
          </Row>
        </Col>
      </div>
    );
  else {
    return (
      <div className="container mt-5 d-flex justify-content-center ">
        <Col md="9">
          <Row>
            <Col md="6" className="d-flex justify-content-center">
              <div style={{ maxWidth: "300px" }}>
                <Carousel fade>
                  {product.path_file?.map((anh, idx) => {
                    return (
                      <Carousel.Item key={idx}>
                        <img
                          src={anh.path_file}
                          style={{ maxWidth: "300px", borderRadius: "10px" }}
                          className="w-100"
                          alt=""
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </Col>
            <Col md="6" className="border rounded px-4">
              <h5 className="text-center mt-2">{product.electronic?.name}</h5>
              <div>ID : {product.id}</div>
              <div className="my-3" style={{ color: "orange" }}>
                $ {product.price}
              </div>
              <div className="my-3">Sale : {product.discount}</div>
              <Row>
                <Col md="4" className="d-flex">
                  <div classname="pt-2">
                    <p> Số lượng:</p>
                  </div>

                  <Input
                    style={{ maxWidth: "50px", maxHeight: "32px" }}
                    className="ms-3"
                    type="number"
                  ></Input>
                </Col>
                <Col md="6">
                  <Button color="primary" size="sm">
                    <i class="fas fa-shopping-cart me-2"></i>
                    Thêm vào giỏ hàng
                  </Button>
                </Col>
              </Row>

              <div className="my-3">Chip : {product.electronic?.chip}</div>
              <div className="my-3">
                Thương hiệu : {product.electronic?.manufacture}
              </div>
            </Col>
          </Row>
          <Row className="my-4 border-bottom">
            <div
              style={{
                backgroundColor: "#0d6efd",
                maxWidth: "75px",
                color: "white",
                borderRadius: "2px",
                fontSize: "19px",
                fontWeight: "500",
              }}
            >
              Mô tả
            </div>
          </Row>
          {/* <Row>{product.book?.summary}</Row> */}
          <Row className="my-5 h3">
            <div
              style={{
                backgroundColor: "#0d6efd",
                maxWidth: "8px",
                height: "35px",
                padding: 0,
                marginRight: "10px",
              }}
            ></div>
            Các sản phẩm liên quan
          </Row>
          <Row className="mb-5">
            {relateProduct.map((img, idx) => {
              if (idx < 4)
                return (
                  <Col md="3">
                    <img
                      src={img.path_file?.[0].path_file}
                      key={idx}
                      style={{
                        maxWidth: "200px",
                        width: "100%",
                        minHeight: "200px",
                        borderRadius: "10px",
                      }}
                    ></img>
                  </Col>
                );
            })}
          </Row>
        </Col>
      </div>
    );
  }
}

export default ProductDetail;
