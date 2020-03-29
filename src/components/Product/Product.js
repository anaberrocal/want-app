import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const product = [
  {
    productName: "Color Curtains",
    productPrice: "$20.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=595210fe588e0d5882885f9d&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "4PCS Wireless Bluetooth Earphone",
    productPrice: "$10.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5c4a034e9ed6dd0c7d18f6ec&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Bathroom Toilet Paper Holder",
    productPrice: "$4.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5def3d0815470902af1ad2d6&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Over Door Tea Towel Rack",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5c4172a54bc2ee5d6bde30f6&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Reusable Silicone Straws",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d0c9460ffb6325c8c8ebfc2&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Cute Cat Spoon",
    productPrice: "$1.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e5223ffb8824e051bb3bf75&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Noodle Bowl With Lid",
    productPrice: "$6.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5ae2d17247d3ae4ce23d5656&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Hammock Chair",
    productPrice: "$10.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5dcb81b3b585dc0503c2c469&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Jar Opener",
    productPrice: "$4.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=57490d7467ad6d60b33d733b&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Wall Hanging Tapestries",
    productPrice: "$7.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d523127a187f90605c43634&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Over Sink Kitchen Shelf",
    productPrice: "$107.0",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5cf63dd840beec1e14b90430&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {

    productName: "Fabric Shoe Rack",
    productPrice: "$20.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e01ec58ea56e007396de6d6&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Cabinet Wardrobe Stickers",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=55a38f71d20f23422332d6a9&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Plush Blanket Hoodie",
    productPrice: "$24.0",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5da823186cea2310af95d145&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Gaming Chair ",
    productPrice: "$97.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e4b6d2ab9fc2e0caa4be905&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Automatic Toothpaste Dispenser",
    productPrice: "$8.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d79b8e4432fb81983014f43&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Winter Bathroom",
    productPrice: "$2.70",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5a6b06517482a3524799ca9c&s=0&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Cute animal pillowcase",
    productPrice: "$3.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5c3835df5a872039b0ad7ba4&s=0&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  },
  {
    productName: "Floor Mat Bathroom Three-piece",
    productPrice: "$9.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d9d84d9b2269411ef11e7c6&s=1&w=600&h=600&q=80",
    ProductDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante."
  }
];

let MediaCard = function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
         {/* <CardMedia
          className={classes.media}
          {products.map( (products) => {products.productImg})}
        />  */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.map(product => (
              <>
                <div>{product.productName}</div>
                <Typography>{product.productPrice}</Typography>
                <CardMedia className={classes.media} image={product.productImg} />
              </>
            ))}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
};

export default MediaCard;
// class Product extends React.Component {
//     render(){
//      return (
//        <div className="Product">
//      <div className="image-container">
//        <img src={this.props.Product.imageSrc} alt=''/>
//      </div>
//      <h2>{this.props.Product.name}</h2>
//      <div className="Product-information">
//        <div className="Product-address">
//          <p>{this.props.Product.address}</p>
//
//
//        </div>
//
//
//          <h3 className="rating">{this.props.Product.rating}</h3>
//          <p>{this.props.Product.reviewCount} reviews </p>
//        </div>
//      </div>
//    </div>
//      );
//     }
//    }
// export default Product;
