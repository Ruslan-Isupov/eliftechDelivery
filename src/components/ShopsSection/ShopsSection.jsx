import css from "./ShopsSection.module.css";
import { ShopsList } from "../ShopsList/ShopsList";
import { MenuOfShop } from "../MenuOfShop/MenuOfShop";

export const ShopsSection = () => {
  return (
    <>
      <h1 className={css.mainSectHeading}>Shops Section</h1>
      <div className={css.shopsBox}>
        <ShopsList />
        <MenuOfShop />
      </div>
    </>
  );
};
