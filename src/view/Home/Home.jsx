import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import DragIndicator from "@material-ui/icons/DragIndicator";
import "./home.scss";
function Home() {
  const [books, setListBook] = useState([]);
  const [electronics, setListElectronics] = useState([]);
  const [clothes, setListClothes] = useState({});

  useEffect(() => {
    setListBook(listBook);
    setListClothes();
    setListElectronics(listElectronics);
  }, []);

  const listBook = () => {
  };
  const listElectronics = () => {
    let electronicsItems = [
      {
        img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
        title: "Điện thoại",
        description: "Sản phẩm mới ra đời",
        price: 20000000,
        name: "iPhone 12 Promax",
      },
      {
        img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
        title: "Điện thoại",
        description: "Sản phẩm mới ra đời",
        price: 20000000,
        name: "iPhone 12 Promax",
      },
      {
        img: "https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/c4827f03c296f4c1591927393b9615b8.jpg.webp",
        title: "Điện thoại",
        description: "Sản phẩm mới ra đời",
        price: 20000000,
        name: "iPhone 12 Promax",
      },
    ];
    return electronicsItems;
  };

  const listClothes = () => {};

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
                <h3 htmlFor="">
                  <DragIndicator className="icon-list-cate" />
                  Đồ điện tử
                </h3>
              </div>
            </div>
            <div className="row">
            {electronics?.map((item, index) => {
              return(
                  <div className="col-md-3">
                    <ItemProduct data={item}></ItemProduct>
                  </div>
              );
            })}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h3 htmlFor="">
                  <DragIndicator className="icon-list-cate" />
                  Sách
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <ItemProduct></ItemProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
