import { useSelector } from 'react-redux'
import { selectAuth } from '../../redux/selectors'
import {GoodsItem} from "../GoodsItem/GoodsItem"
export const MenuOfShop = () => {
     const {goods} = useSelector(selectAuth);
    console.log(goods)
    return (
       <ul>
        {/* <li>
            <p>BigMcMenu</p>
            <span></span></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" />
        <li>
            <p>BigMcMenu</p>
            <span></span><a href=""></a></li>
            <button></button><img src="" alt="" /> */}
             {goods &&
          goods.map(good => {
            return (
              <li  key={good.id}>
                <GoodsItem
                        name={good.name}
                        price = {good.price}
                //   followers={item.followers}
                  idGood={good.id}
                //   isActive={item.isActive}
                />
              </li>
            );
          })}
       </ul>
    )
}