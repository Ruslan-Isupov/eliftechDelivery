import css from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { deleteGood } from "../../redux/cart/cartSlice";
import { useState } from "react";
import food from "../../images/food.jpg";
import { json } from "react-router-dom";

let totalPrice = 0
export const CartItem = ({ name, price, id, image }) => {
  
  const { products } = useSelector(selectCart);
  const dispatch = useDispatch();
  const LOCALSTORAGE_KEY = id;
  const infoDish = localStorage.getItem(LOCALSTORAGE_KEY);
 
  const { quantity } = JSON.parse(infoDish ? infoDish : 0);
  // console.log(localStorage)
  
  for (const key in localStorage) {
    // console.log(key)
    console.log(localStorage[key])
  }
//     if (typeof localStorage[key] === "string" && localStorage[key].includes("sumPrice") )
//     { JSON.parse(localStorage[key]) }
//     else (console.log("Pity") )
 
// }
  // if (getAmount !== null) {
  //   const { quantity } = JSON.parse(getAmount)
  //    const [valueQuantity,setvalueQuantity] = useState(quantity)
  // }
  // const [totalPrice,setTotalPrice] = useState(price)

  
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
        price,
        sumPrice : valueQuantity*price
      })
    );
  
//   for (const key in localStorage) {
//       console.log(localStorage[key
//     ])
//     console.log(localStorage[key
//     ].sumPrice) 
//       // console.log(key)
//  }
 
// setvalueQuantity (prevState> prevState > quantity*price)

  const { sumPrice } = JSON.parse(infoDish ? infoDish : 1);
  // totalPrice += sumPrice
  // console.log(totalPrice)
  const TotalPrice_KEY = "totalPrice";
 
  // console.log(totalPrice)
  localStorage.setItem(
      TotalPrice_KEY,
      JSON.stringify({
      totalPrice:valueQuantity*price
      })
    );
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
