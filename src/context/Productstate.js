import maincontext from "./Maincontext";
import React, { useState } from "react";
import productDetails from "../Data/Productdetails";
// import userInfo from "../Data/UserInfo";

const Productstate = (props) => {
  var [cartItems, setCartItems] = useState(productDetails);

  const additems = (props) => {
    cartItems = cartItems.map((item) => {
      if (item.productId == props.productId) {
        // console.log("Error is here 2 ", item);
        var itemval = {
          productId: 1,
          productName: "Water Bottle",
          productQuantity: item.productQuantity - 1,
          productPrice: 20,
          productImageUrl: "Images/water-bottle.png",
        };

        return itemval;
      } else {
        return item;
      }
    });

    setCartItems(cartItems);
  };

  return (
    <maincontext.Provider value={{ cartItems, additems, productDetails }}>
      {props.children}
    </maincontext.Provider>
  );
};

export default Productstate;
