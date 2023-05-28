import { OrderButton } from "../OrderButton/OrderButton"
import css from "./OrderInfo.module.css"
export const OrderInfo = () => {
    return (
        <div className={css.orderBox}>
            <p>Total Price:</p>
            <OrderButton/>
        </div>
    )
}