import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import DragIndicator from "@material-ui/icons/DragIndicator";
import "./home.scss";
import { homeApi } from "../../api/home";
function Home() {
  const [books, setListBook] = useState([]);
  const [electronics, setListElectronics] = useState([]);
  const [clothes, setListClothes] = useState([]);

  useEffect(() => {
    listElectronics();
    listBooks();
  }, []);

  const listBooks = async () => {
    let payload = {
      author: {
        biography: null,
        id: 0,
        name: null
      },
      author_id: 0,
      id: 0,
      isbn: null,
      language: null,
      number_of_page: 0,
      publisher: {
        address: null,
        id: 0,
        name: null
      },
      publisher_id: 0,
      summary: null,
      title: null
    };
    let bookItems = await homeApi.getListBook(payload);
    console.log("Book: ", bookItems);
    setListBook(bookItems.data.data);
  };
  const listElectronics = async () => {
    try {
      let payload = {
        card: null,
        chip: null,
        hard_disk: null,
        manufacture: null,
        name: null,
        os: null,
        ram: null,
        rom: null,
        screen: null,
      };
      let electronicsItems = await homeApi.getListElectronic(payload);
      console.log(electronicsItems)
      setListElectronics(electronicsItems.data.data);
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
      </div>
    </div>
  );
}

export default Home;
