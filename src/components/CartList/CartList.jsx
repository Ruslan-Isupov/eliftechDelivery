import {CartItem} from "../CartItem/CartItem"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {selectCart} from "../../redux/selectors";
import css  from "./CartList.module.css"

export const CartList = () => {
    const { products } = useSelector(selectCart)
    console.log(products)
    return (
        <ul>
             {products ?
        products.map(product => {
          return (
            <li className={css.cartItem} key={product.id}>
              <CartItem
                name={product.name}
                price={product.price}
                // image="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg"
                id={product.id}
              //   isActive={item.isActive}
              />
            </li>
          );
        }) : <p>Choose your menu</p>}
        </ul>
    )
}