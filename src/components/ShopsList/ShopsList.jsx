import { useDispatch } from 'react-redux'
import css from "./ShopsList.module.css"
// import { useSelector } from 'react-redux'
// import { selectAuth } from '../../redux/selectors'
// import { addPage } from '../../redux/tweetCard/tweetCardSlice'
import {fetchMacMenu,fetchKFZ,fetchMonoPizza,fetchChelentano,fetchDominoz} from "../../redux/auth/authOperations"
export const ShopsList = () => {
    const dispatch = useDispatch()
   
  
    return (
        <div className={css.divBox}>
            <p>Shops:</p>
        <ul className={css.shopsList}> 
            <li>
                <button className={css.shopsButton} type="button" onClick={() =>dispatch(fetchMacMenu())}>Mcdon</button>
        
            </li>
            <li>
                <button className={css.shopsButton} type="button" onClick={() =>dispatch(fetchKFZ())}>KFZ</button>
                
            </li>
            <li>
                <button className={css.shopsButton} type="button" onClick={() =>dispatch(fetchMonoPizza())}>MonoPizza</button>
                
            </li>
            <li>
                <button className={css.shopsButton} type="button" onClick={() =>dispatch(fetchChelentano())}>Chelentano</button>
                
            </li>
            <li>
                 <button className={css.shopsButton} type="button" onClick={() =>dispatch(fetchDominoz())}>Dominoz</button>
                
            </li>
            </ul>
            </div>
    )
}