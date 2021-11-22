import React, { useEffect, useState } from "react";
import BannerHome from "./components/BannerHome";
import ItemProduct from "./components/ItemProduct";
import BookProduct from "./components/BookProduct";
import DragIndicator from "@material-ui/icons/DragIndicator";
import "./home.scss";
import { homeApi } from "../../api/home";
import { useSelector, useDispatch } from "react-redux";
import { searchCurrent } from "../../redux/Slices/SearchProduct";
// import TestProduct from "./components/TestProduct";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
function Home() {
  const [books, setListBook] = useState([]);
  const [electronics, setListElectronics] = useState([]);
  const [isLoadingE, setIsLoadingE] = useState(true);
  const [isLoadingB, setIsLoadingB] = useState(true);
  const searchText = useSelector(searchCurrent);
  useEffect(() => {
    searchText && listBooks() && listElectronics();
  }, [searchText]);
  useEffect(() => {
    listBooks();
    listElectronics();
  }, []);

  const listBooks = async () => {
    setIsLoadingE(true);
    let payload = {
      name: searchText,
    };
    let bookItems = await homeApi.getListBook(payload);
    setListBook(bookItems.data);
    setIsLoadingE(false);
  };
  const listElectronics = async () => {
    setIsLoadingB(true);
    try {
      let payload = {
        name: searchText,
      };
      let electronicsItems = await homeApi.getListElectronic(payload);
      setListElectronics(electronicsItems.data);
      setIsLoadingB(false);
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
              <div className="col-md-12 text-center">
                {isLoadingE && <Hypnosis />}
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
        <div className="row mt-5">
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
              <div className="col-md-12 text-center">
                {isLoadingB && <Hypnosis />}
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
