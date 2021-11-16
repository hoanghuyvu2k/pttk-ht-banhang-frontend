import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import BookProduct from "./components/BookProduct";
import DragIndicator from "@material-ui/icons/DragIndicator";
import "./home.scss";
import { homeApi } from "../../api/home";
function Home() {
  const [books, setListBook] = useState([]);
  const [electronics, setListElectronics] = useState([]);

  useEffect(() => {
    listElectronics();
    listBooks();
  }, []);

  const listBooks = async () => {
    let bookItems = await homeApi.getListBook();
    console.log(bookItems.data)
    setListBook(bookItems.data);
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
      setListElectronics(electronicsItems.data.data);
    } catch (err) {
      console.log(err);
    }
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
                    <BookProduct data={item}></BookProduct>
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
