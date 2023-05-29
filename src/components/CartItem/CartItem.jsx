import css from "./CartItem.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { deleteGood } from "../../redux/cart/cartSlice";
import food from '../../images/food.jpg'
// import { addGood } from "../../redux/cart/cartSlice";
// import { selectAuth } from "../../redux/selectors";
export const CartItem = ({ name, price, id,image }) => {
    
      const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  
  const deleteDish = (id) => {
    const deletedGood = products.find((product) => product.id === id);
    // console.log(preciseGood);
    dispatch(deleteGood(deletedGood));
  };
    return (
 <>
      <img src={food} alt="" width="200" height="150" />
        <div className={css.cartBox}>
          <div className={css.infoCart}>  
            <p className={css.cartName}> {name}</p>
            <p className={css.cartPrice}>{price}</p>
       </div>
        <button className={css.cartButton} onClick={()=>deleteDish(id)}>
          Delete
        </button>
      </div>
    </>
    )
}