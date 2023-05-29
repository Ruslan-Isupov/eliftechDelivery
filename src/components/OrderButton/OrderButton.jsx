import css from "./OrderButton.module.css"
export const OrderButton = () => {
    return (
        <button type="submit" className={css.orderButton} form="form1">Submit</button>
    )
}