import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export const CartList = () => {
    const { products } = useSelector()
    console.log(products)
    return (
        <ul>
            
        </ul>
    )
}