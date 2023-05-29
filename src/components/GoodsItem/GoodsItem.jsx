import css from "./GoodsItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/cart/cartSlice";
import { selectAuth } from "../../redux/selectors";
import food from '../../images/food.jpg'

export const GoodsItem = ({ name, price, id }) => {
 
  const { goods } = useSelector(selectAuth);
  const dispatch = useDispatch();
  
  const addDish = (id) => {
    const preciseGood = goods.find((item) => item.id === id);
    // console.log(preciseGood);
    dispatch(addGood(preciseGood));
  };
  return (
    <>
      <img src={food} alt="food" width="200" height="150" />
      <div className={css.descBox}>
        <p className={css.descName}> {name}</p>
        <p className={css.descPrice}>{price}</p>
        <button className={css.descButton} onClick={()=>addDish(id)}>
          Add
        </button>
      </div>
    </>
  );
};
