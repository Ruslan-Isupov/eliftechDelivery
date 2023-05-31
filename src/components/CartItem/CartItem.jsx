import css from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { deleteGood } from "../../redux/cart/cartSlice";
import { useState } from "react";
import food from "../../images/food.jpg";


export const CartItem = ({ name, price, id, image }) => {
   let totalPrice = 0;
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  const LOCALSTORAGE_KEY = id;
  const infoDish = localStorage.getItem(LOCALSTORAGE_KEY);
  // if (getAmount !== null) {
  //   const { quantity } = JSON.parse(getAmount)
  //    const [valueQuantity,setvalueQuantity] = useState(quantity)
  // }

  const { quantity } = JSON.parse(infoDish ? infoDish : 1);
  
  const [valueQuantity, setvalueQuantity] = useState(quantity);
    const changeQuantity = (e) => {
    setvalueQuantity(e.target.value);
    // console.log(valueQuantity);
    // console.log(e.target.value);
    // localStorage.setItem(
    //   LOCALSTORAGE_KEY,
    //   JSON.stringify({
    //     id,
    //      quantity: valueQuantity,
    //     // quantity: Number(valueQuantity)+1,
    //     sumPrice : quantity*price
    //   })
    // );
  };
   localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        id,
         quantity: valueQuantity,
        // quantity: Number(valueQuantity)+1,
        sumPrice : quantity*price
      })
    );



  const { sumPrice } = JSON.parse(infoDish ? infoDish : 1);
  totalPrice += sumPrice
  console.log(totalPrice)
    // const { price } = products.find((product) => product.id === id)
 

//   const countTotalPrice = (id) => {
//     // const { price } = products.find((product) => product.id === id)
//     // console.log(price * valueQuantity)
//     // const {quantity}  = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY'));
// }

  const deleteDish = (id) => {
    const deletedGood = products.find((product) => product.id === id);
    dispatch(deleteGood(deletedGood));
  };
  return (
    <>
      <img
        className={css.cartImage}
        src={food}
        alt="dish"
        width="200"
        height="150"
      />
      <div className={css.cartBox}>
        <div className={css.infoCart}>
          <p className={css.cartName}> {name}</p>
          <p className={css.cartPrice}>{price}</p>
          <input
            type="number"
            onChange={changeQuantity}
            step="1"
            min="1"
            max="100"
            id="num_count"
            name="quantity"
            value={valueQuantity}
            pattern="[0-9]*"
            inputMode="numeric"
            width="10"
            height="10"
          />
        </div>
        <button className={css.cartButton} onClick={() => deleteDish(id)}>
          Delete
        </button>
      </div>
    </>
  );
};
