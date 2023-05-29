import css from "./GoodsItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/cart/cartSlice";
export const GoodsItem = ({ name, price }) => {
    // const goodlist = useSelector()
    const dispatch = useDispatch()
    const addDish = (id) => {
        console.log("work")
    dispatch(addGood(4))
    }
  return (
    <>
      <img src="" alt="" width="200" height="150" />
      <div className={css.descBox}>
        <p className={css.descName}> {name}</p>
        <p className={css.descPrice}>{price}</p>
        <button className={css.descButton} onClick={addDish}  >Add</button>
      </div>
    </>
  );
};
