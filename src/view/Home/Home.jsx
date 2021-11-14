import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import DragIndicator from "@material-ui/icons/DragIndicator";
import "./home.scss";
import { ApiClient } from "../../api/config";
import { homeApi } from "../../api/home";
function Home() {
  const [books, setListBook] = useState([]);
  const [electronics, setListElectronics] = useState([]);
  const [clothes, setListClothes] = useState([]);

  useEffect(() => {
    listElectronics();
  }, []);

  const listBooks = () => {
    let bookItems = [
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/51-RoANBXoL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        title: "Sách",
        description: "Phát triển phần mềm",
        price: 400000,
        name: "Fundamentals of Software Architecture",
      },
    ];
    return bookItems;
  };
  const listElectronics = async () => {
    try {
      let payload = {
        card: '',
        chip: '',
        hard_disk: '',
        manufacture: '',
        name: '',
        os: '',
        ram: '',
        rom: '',
        screen: '',
      };
      const electronicsItems = await homeApi.getListElectronic(payload);
      console.log(electronicsItems)
      setListElectronics(electronicsItems);
    } catch (err) {
      console.log(err);
    }
  };

  const listClothes = () => {
    let clothesItems = [
      {
        img: "https://product.hstatic.net/1000078312/product/ao-da-bo-v1_master.jpg",
        title: "Quần áo",
        description: "Áo khoác mùa đông mới về",
        price: 400000,
        name: "Áo da bò",
      },
    ];
    return clothesItems;
  };

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
                return (
                  <div className="col-md-3 col-sm-6">
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
              {books?.map((item, index) => {
                return (
                  <div className="col-md-3 col-sm-6">
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
                  Quần áo
                </h3>
              </div>
            </div>
            <div className="row">
              {clothes?.map((item, index) => {
                return (
                  <div className="col-md-3 col-sm-6">
                    <ItemProduct data={item}></ItemProduct>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
