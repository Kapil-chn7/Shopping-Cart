import React, { useContext } from "react";
import ShopProduct from "./ShopProduct";
// import items from "../Data/Productdetails";
import Productstate from "../context/Maincontext";
export default function Shop() {
  const itemsObj = useContext(Productstate);
  var items = itemsObj.productDetails;
  return (
    <div className="d-flex flex-wrap container">
      {items.map((item, index) => {
        return (
          <div key={item.productId} className="col-md-2 m-5">
            <ShopProduct productDetails={index} />
          </div>
        );
      })}
    </div>
  );
}
