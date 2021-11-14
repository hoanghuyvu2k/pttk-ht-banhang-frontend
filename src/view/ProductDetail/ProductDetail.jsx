import { useState } from "react";
import { Container, Row, Col, Input, Button, Label } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "./ProductDetail.scss";
function ProductDetail() {
  const [product, setProduct] = useState({
    id: "1234",
    img: [
      "https://product.hstatic.net/1000230642/product/03900cam__2__5ed808cd7e35480dbb0340cf7e57c71a.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e86f2cad9730409397bead5d00f31c91_9366/Giay_4DFWD_Tokyo_trang_FY3967_01_standard.jpg",
    ],
    name: "Giay adidas",
    price: "150000",
    status: "Còn hàng",
    brand: "Adidas",
    describe:
      "Lợi thế cạnh tranh mà bạn đang tìm kiếm? Đương nhiên là đến từ thói quen tập luyện của bạn rồi. Đôi giày chạy bộ adidas này giúp bạn luôn thoải mái khi tập gym cũng như chạy bộ cự ly ngắn đến trung bình. Với thiết kế nâng đỡ mà linh hoạt, đôi giày này mang lại cảm giác ổn định trong các bài tập cần chuyển động sang hai bên như trượt băng. Lớp đệm Bounce đàn hồi dưới lòng bàn chân.",
  });
  const [relateProduct, setRelateProduct] = useState([
    "https://donghothuysy.vn/upload_images/images/cach-phoi-do-voi-giay-adidas.jpg",
    "https://cf.shopee.vn/file/504fad5c8366ba9857f19a594e2c587a",
    "https://khogiaythethao.vn/wp-content/uploads/2019/02/adidas-xplr-white-sf.jpg",
    "data:image/jpeg;base64,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",
  ]);
  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <Col md="9">
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <div style={{ maxWidth: "300px" }}>
              <Carousel fade>
                {product.img.map((anh, idx) => {
                  return (
                    <Carousel.Item key={idx}>
                      <img
                        src={anh}
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
            <h5 className="text-center mt-2">{product.name}</h5>
            <div>ID : {product.id}</div>
            <div className="my-3" style={{ color: "orange" }}>
              $ {product.price}
            </div>
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
            <div className="d-flex mt-2">
              <div className="mt-1 me-2">Color : </div>
              <div>
                <Input type="select" style={{ maxWidth: "100px" }}>
                  <option>Blue</option>
                  <option value="">Green</option>
                </Input>
              </div>
            </div>
            <div className="mt-2">Tình trạng sản phẩm : {product.status}</div>
            <div className="mt-2">Nhãn hiệu : {product.brand}</div>
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
        <Row>{product.describe}</Row>
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
            return (
              <Col md="3">
                <img
                  src={img}
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

export default ProductDetail;
