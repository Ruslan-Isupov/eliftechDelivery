import css from "./GoodsItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/cart/cartSlice";
import { selectAuth } from "../../redux/selectors";
import { selectCart } from "../../redux/selectors";
// import { useMemo } from "react";
import food from "../../images/food.jpg";

export const GoodsItem = ({ name, price, id }) => {
 
  const LOCALSTORAGE_KEY = id;
  let quantity = 0;
  // const LOCALSTORAGE_KEY = "infoProduct2";
  // const { products } = useSelector(selectCart);
   
   
  
  const { goods } = useSelector(selectAuth);
  const dispatch = useDispatch();
  
  const addDish = (id) => {

    
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        id,
        quantity: quantity+=1,
      })
    );
    // const currentQuantity = localStorage.getItem(LOCALSTORAGE_KEY)
    //  let parsedQuantity = JSON.parse(currentQuantity)
  
 
  

      
    

    const preciseGood = goods.find((item) => item.id === id);
    

    
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
