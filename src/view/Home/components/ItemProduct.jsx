import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
function ItemProduct(props) {
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
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://product.hstatic.net/1000370129/product/iphone_12_den_ed29e3e4d1bb4c1a833e011bf010606b_grande_a80666949c444cf6be42cbcb42355cf1_master.png"
          title="Điện thoại"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className="title_card"
          >
            IPhone 13
          </Typography>
          <p className="product_price_old">{formatMoney(20000000 || 0)}</p>
          <p className="product_price">
            {formatMoney(17000000 || 0)}
          </p>
          <p className="content_card">Sản phẩm mới ra mắt</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Thêm vào danh sách yêu thích">
          <Button size="small" className="card-btn">
            <FavoriteBorderIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Xem chi tiết">
          <Button size="small" className="card-btn">
            <VisibilityIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Thêm vào giỏ hàng">
          <Button
            size="small"
            className="card-btn"
          >
            <AddShoppingCartIcon />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
export default ItemProduct;
