import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareIcon from "@mui/icons-material/Compare";
import { useSelector } from "react-redux";
import "./singleproduct.scss";
import { Rating } from "@mui/material";
import { AddToCart } from "../../Redux/Actions/CartActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SingleProducts = ({ data }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((st) => st.cart);

  const handleAddToCart = (id) => {
    Swal.fire({
      title: "Do you want add Product to Cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    const findItem =
      cartItems.length > 0 ? cartItems.find((ct) => ct.id === id) : null;
    const quantity = findItem ? findItem.quantity + 1 : 1;
    dispatch(AddToCart(id, quantity));
  };
  return (
      <div className="owl-item">
        {data  ? (
          <div key={data.id}>
            <img className="img-fluid" src={data.photoUrl} alt=""/>
            <div className="block-hover">
              <div
                className="shopping-cart"
                onClick={() => handleAddToCart(data.id)}
              >
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="like">
                <FavoriteIcon className="favorite" />
              </div>
              <div className="compare">
                <CompareIcon className="compar" />
              </div>
              <div className="review">
                <Link to="">
                  <VisibilityIcon className="visibility" />
                </Link>
              </div>
            </div>
            <span className="sale-percent">10%</span>
            <div className="detail-wrapper">
              <span>
                <Rating
                  name="size-large"
                  defaultValue={2}
                  size="large"
                  className="raiting"
                />
              </span>
              <Link to={`/product/${data.id}`}>
                <h3>{data.name}</h3>
              </Link>
              <span className="price">${data.price}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="col-lg-3">
              <SkeletonTheme
                baseColor="#202020"
                highlightColor="#444"
                duration={2}
                direction={"ltr"}
              >
                <Skeleton count={5} />
              </SkeletonTheme>
            </div>
          </>
        )}
      </div>
  );
};

export default SingleProducts;
