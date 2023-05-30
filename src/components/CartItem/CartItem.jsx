import css from "./CartItem.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { deleteGood } from "../../redux/cart/cartSlice";
import food from '../../images/food.jpg'

export const CartItem = ({ name, price, id, image }) => {
  const LOCALSTORAGE_KEY = "infoProduct";
  const quant = localStorage.getItem(LOCALSTORAGE_KEY)
    // const currentQuantity = localStorage.getItem(LOCALSTORAGE_KEY)
  const { quantity } = JSON.parse(quant)
  console.log(quantity)
      const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  
  const deleteDish = (id) => {
    const deletedGood = products.find((product) => product.id === id);
    // console.log(preciseGood);
    
    dispatch(deleteGood(deletedGood));
  };
    return (
 <>
      <img className={css.cartImage} src={food} alt="" width="200" height="150" />
        <div className={css.cartBox}>
          <div className={css.infoCart}>  
            <p className={css.cartName}> {name}</p>
            <p className={css.cartPrice}>{price}</p>
            <input type="number" step="1" min="1" max="100" id="num_count" name="quantity" value={quantity} pattern="[0-9]*" inputmode="numeric" width="10" height="10"/>
       </div>
        <button className={css.cartButton} onClick={()=>deleteDish(id)}>
          Delete
        </button>
      </div>
    </>
    )
}