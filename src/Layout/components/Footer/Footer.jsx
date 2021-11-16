import React from "react";
import { Row } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="container-fluid bg-secondary">
        <Row>
          <div className="col-md-10 offset-md-1 py-5">
            <Row>
              <div className="col-md-6">
                <img src="http://localhost:3000/static/media/scart-mid.b46c6db8.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-3">
                <label className="label-footer">Tài khoản</label>
                <br />
                <span>Trang quản lý cá nhân</span>
                <br />
                <span>So sánh sản phẩm</span>
                <br />
                <span>Yêu thích</span>
              </div>
              <div className="col-md-3">
                <label className="label-footer">Giới thiệu</label>
                <br />
                <span>Đại chỉ: HV Công nghệ Bưu chính Viễn thông</span>
                <br />
                <span>SĐT: 099999999</span>
                <br />
                <span>Email: onlineshop@thunv.vn</span>
              </div>
            </Row>
          </div>
        </Row>
        <div className="row py-1 bg-footer d-flex align-items-center">
          <div className="col-md-12 text-center">
            © 2020 Copyright:
            <a className="text-dark" href="https://thunvc.blogspot.com/">
              thunv.blogspot.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
