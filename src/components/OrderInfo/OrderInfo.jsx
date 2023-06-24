import { OrderButton } from "../OrderButton/OrderButton"
import css from "./OrderInfo.module.css"
export const OrderInfo = () => {
     const TotalPrice_KEY = "totalPrice";
      const price = localStorage.getItem(TotalPrice_KEY);
    const { totalPrice } = JSON.parse(price ? price : 0);
    // console.log(totalPrice)
    return (
        <div className={css.orderBox}>
            <p>Total Price:{ totalPrice}</p>
            <OrderButton/>
        </div>
    )
}