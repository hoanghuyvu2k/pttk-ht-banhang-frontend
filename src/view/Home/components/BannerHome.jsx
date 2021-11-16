import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function BannerHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/Files/2021/03/05/1332649/6-dieu-dang-mong-doi-o-sieu-pham-iphone-13-iphone-13-760x367.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>iPhone 13</h3>
          <p>Phiên bản mới ra mắt của nhà táo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Second slide"
          src="https://laptopgaumeo.vn/uploads/images/san-pham/gigabyte-aero-17-hdr-ya/gigabyte-aero-17-hdr-ya-1.jpg"
        />

        <Carousel.Caption>
          <h3>Laptop</h3>
          <p>Những sản phẩm có cấu hình mạnh mẽ tại thời điểm hiện tại.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c1.wallpaperflare.com/preview/234/403/732/book-bird-cuckoo-background.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sách</h3>
          <p>
            Sách luôn luôn là nguồn kiến thức bao la.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default BannerHome;
