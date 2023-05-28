import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { selectAuth } from '../../redux/selectors'
// import { addPage } from '../../redux/tweetCard/tweetCardSlice'
import {fetchMacMenu} from "../../redux/auth/authOperations"
export const ShopsList = () => {
    const dispatch = useDispatch()
   
  
    return (
        <ul> 
            <li>
                <button type="button" onClick={() =>dispatch(fetchMacMenu())}>Mcdon</button>
                {/* <p></p>
                <span></span><a href=""></a> */}
            </li>
            <li>
                <p>KFC</p>
                <span></span><a href=""></a></li>
            <li>
                <p>MonoPizza</p>
                <span></span><a href=""></a></li>
            <li>
                <p>Chelentano</p>
                <span></span><a href=""></a></li>
            <li>
                <p>Dominoz</p>
                <span></span><a href=""></a></li>
        </ul>
    )
}