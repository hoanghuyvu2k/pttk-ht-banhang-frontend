import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useSnackbar } from 'notistack';
function ItemProduct(props) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {});
  const addToCart = (id, type) => {
    var expires = (new Date(Date.now()+ 864000*1000));
    let items = Cookies.get("items")
      ? JSON.parse(Cookies.get("items"))
      :{
        electronic_item_ids: [],
        book_item_ids: []
      };
    if(type == 1){
      items.electronic_item_ids.push(id);
    }
    else{
      items.book_item_ids.push(id);
    }
    Cookies.set("items", JSON.stringify(items),{ expires:  expires});
    enqueueSnackbar("Đã thêm vào giỏ hàng", { variant: "success" });
  };
  const formatMoney = (money, is_zero = false) => {
    if (!money && typeof money !== "number" && !is_zero) return;

    return (
      parseInt(money).toLocaleString("vi", {
        currency: "VND",
      }) + " (VNĐ)"
    );
  };
  return (
    <Card className="card-product-item mt-3">
      <CardActionArea
        onClick={() => {
          history.push("/ProductDetail");
        }}
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.data?.path_file[0].path_file}
          title={props.data?.electronic.manufacture}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className="title_card"
          >
            {props.data?.electronic.name}
          </Typography>
          <p className="product_price">
            {formatMoney(props.data?.price || 0)}{" "}
            <span className="product_price_old">
              {props.data?.discount != null ? props.data?.discount : ""}
            </span>
          </p>
          <p className="content_card">
            {"Chip " +
              props.data?.electronic.chip +
              ", RAM " +
              props.data?.electronic.ram +
              ", ROM " +
              props.data?.electronic.rom +
              ", Bảo hành " +
              props.data?.warranty_period}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Thêm vào danh sách yêu thích">
          <Button size="small" className="card-btn">
            <FavoriteBorderIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Xem chi tiết">
          <Button
            size="small"
            className="card-btn"
            onClick={() => {
              history.push("/ProductDetail");
            }}
          >
            <VisibilityIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Thêm vào giỏ hàng">
          <Button
            size="small"
            className="card-btn"
            onClick={() => {
              addToCart(props.data?.id, 1);
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
export default ItemProduct;
