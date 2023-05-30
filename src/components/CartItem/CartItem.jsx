import css from "./CartItem.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { deleteGood } from "../../redux/cart/cartSlice";
import { useState } from 'react';
import food from '../../images/food.jpg'

export const CartItem = ({ name, price, id, image }) => {

  // let counter = "";
    const LOCALSTORAGE_KEY = id;
  const getAmount = localStorage.getItem(LOCALSTORAGE_KEY)
  
  // console.log(getAmount)
    // const currentQuantity = localStorage.getItem(LOCALSTORAGE_KEY)
  const { quantity } = JSON.parse(getAmount)
  const [valueQuantity,setvalueQuantity] = useState(quantity)
  const updateQuantity = (e) => {
   
    setvalueQuantity(e.target.value)
    
  }

  
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  
  const deleteDish = (id) => {
    const deletedGood = products.find((product) => product.id === id);
    dispatch(deleteGood(deletedGood));
  };
    return (
 <>
      <img className={css.cartImage} src={food} alt="" width="200" height="150" />
        <div className={css.cartBox}>
          <div className={css.infoCart}>  
            <p className={css.cartName}> {name}</p>
            <p className={css.cartPrice}>{price}</p>
              {/* <input type="number"  step="1" min="1" max="100" id="num_count" name="quantity" pattern="[0-9]*" inputMode="numeric" width="10" height="10"/> */}
            <input type="number" onChange={updateQuantity} step="1" min="1" max="100" id="num_count" name="quantity" value={valueQuantity} pattern="[0-9]*" inputMode="numeric" width="10" height="10"/>
       </div>
        <button className={css.cartButton} onClick={()=>deleteDish(id)}>
          Delete
        </button>
      </div>
    </>
    )
}