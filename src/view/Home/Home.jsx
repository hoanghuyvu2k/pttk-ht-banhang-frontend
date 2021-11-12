import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import "./home.scss";
function Home() {
  const [item, setListItem] = useState({});

  useEffect(() => {
    setListItem(listItem);
  }, []);

  const listItem = () => {
    let items = {'img': 'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp', 'title': 'IPhone 13 Promax', 'description': 'Sản phẩm mới ra đời', 'btn': 'Xem chi tiết'};

    return items; 
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <BannerHome></BannerHome>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
              <h3 htmlFor="" className="text-category">Đồ điện tử</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <ItemProduct data={item}></ItemProduct>
              </div>
              <div className="col-md-3">
                <ItemProduct data={item}></ItemProduct>
              </div>
              <div className="col-md-3">
                <ItemProduct data={item}></ItemProduct>
              </div>
              <div className="col-md-3">
                <ItemProduct data={item}></ItemProduct>
              </div>
              <div className="col-md-3">
                <ItemProduct data={item}></ItemProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
