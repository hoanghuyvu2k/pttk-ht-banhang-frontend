// import Home from "./view/Home";
// import Cart from "./view/Cart";
// import ProductDetail from "./view/ProductDetail";
import React from "react";
const Home = React.lazy(() => import("./view/Home"));
const Cart = React.lazy(() => import("./view/Cart"));
const ProductDetail = React.lazy(() => import("./view/ProductDetail"));
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Home", name: "Home", component: Home, exact: true },
  { path: "/Cart", name: "Cart", component: Cart, exact: true },
  {
    path: "/ProductDetail",
    name: "ProductDetail",
    component: ProductDetail,
    exact: true,
  },
];
export default routes;
