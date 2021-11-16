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
function BookProduct(props) {
  useEffect(() => {
    console.log(props)
  })
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
          image={ props.data?.file[0].path_file}
          title={props.data?.book.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className="title_card"
          >
            {props.data?.book.title}
          </Typography>
          <p className="product_price">{formatMoney(props.data?.price || 0)} <span className="product_price_old">{props.data?.discount}</span></p>
          <p className="content_card">{'Tác giả '+ props.data?.book.author.name + ', NXB ' + props.data?.book.publisher.name + '. ' + props.data?.book.summary}</p>
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
export default BookProduct;
