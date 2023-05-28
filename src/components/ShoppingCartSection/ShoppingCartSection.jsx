import css from "./ShoppingCartSection.module.css"
import { RegisterForm } from "../RegisterForm/RegisterForm"
import { CartList } from "../CartList/CartList"
import { OrderInfo } from '../OrderInfo/OrderInfo';

export const ShoppingCartSection = () => {
    return (<>
        <div className={css.shoppingCartBox}>
        <RegisterForm />
            <CartList />
              </div>
             <OrderInfo/>
  </>
    )
}