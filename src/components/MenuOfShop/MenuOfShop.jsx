import { useSelector } from 'react-redux'
import { selectAuth } from '../../redux/selectors'

import { GoodsItem } from "../GoodsItem/GoodsItem"
import css from "./MenuOfShop.module.css"

export const MenuOfShop = () => {
  const { goods } = useSelector(selectAuth);
   
  return (
    <ul className={css.menuList} >
      
      {goods &&
        goods.map(good => {
          return (
            <li className={css.menuItem} key={good.id}>
              <GoodsItem
                name={good.name}
                price={good.price}
                image={good.image}
                idGood={good.id}
              //   isActive={item.isActive}
              />
            </li>
          );
        })}
    </ul>
  )
}