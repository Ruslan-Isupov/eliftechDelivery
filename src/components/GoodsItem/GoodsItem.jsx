import css from "./GoodsItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/cart/cartSlice";
import { selectAuth } from "../../redux/selectors";
import { selectCart } from "../../redux/selectors";
import food from "../../images/food.jpg";

export const GoodsItem = ({ name, price, id }) => {
  // let quantity = 0
  const LOCALSTORAGE_KEY = "infoProduct";

  const { goods } = useSelector(selectAuth);
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
 localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        id,
        quantity: 0,
      })
    );
  const addDish = (id) => {
    const preciseGood = goods.find((item) => item.id === id);
    const currentQuantity = localStorage.getItem(LOCALSTORAGE_KEY)
    const parsedQuantity = JSON.parse(currentQuantity)
    console.log(parsedQuantity)
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        id,
        quantity: parsedQuantity !== null ? parsedQuantity.quantity + 1 : 0,
      })
    );
    
    console.log(currentQuantity);
    // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ id, quantity}))

    
    dispatch(addGood(preciseGood));
  };
  return (
    <>
      <img className={css.goodImage} src={food} alt="food" width="200" height="120" />
      <div className={css.descBox}>
          <div className={css.infoGood}>  
        <p className={css.descName}> {name}</p>
          <p className={css.descPrice}>{price}</p>
          </div>
        <button className={css.descButton} onClick={() => addDish(id)}>
          Add
        </button>
      </div>
    </>
  );
};
