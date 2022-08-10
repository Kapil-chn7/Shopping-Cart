import React, { useContext, useEffect } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import Productstate from "../context/Maincontext";
export default function ShopProduct(index) {
  const Items = useContext(Productstate);

  var newObj = {};
  // var Id = null;
  const addItem = (propsval) => {
    // console.log("this is the propsvla ", propsval.productDetails.productId);
    // Id = propsval.productDetails.productId - 1;
    // console.log("this is id ", Id);
    // var quantity = propsval.productDetails.productQuantity - 1;

    // var updateObj = {
    //   productId: 1,
    //   productName: "Water Bottle",
    //   productQuantity: quantity,
    //   productPrice: 20,
    //   productImageUrl: "Images/water-bottle.png",
    // };
    // newObj = updateObj;
    Items.additems(index);
  };

  useEffect(() => {
    // props = Items.cartItems;
  });
  // console.log("outside ");
  return (
    <div className="card mb-3 " style={{ maxWidth: "240px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={Items.cartItems[index].productImageUrl}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{Items.cartItems[index].productName}</h5>
            {/* <span className="m-2">
              <button type="button" className="btn btn-primary">
                <AiOutlineShoppingCart />
              </button>
            </span> */}
            <p className="card-text">
              <span>&#8377;</span>
              {Items.cartItems[index].productPrice}
            </p>

            <p className="card-text">
              <small className="text-muted">
                Product left {Items.cartItems[index].productQuantity}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="col">
          <button type="button" className="btn btn-danger btn-sm">
            {" "}
            <IoMdRemoveCircleOutline />
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-success btn-sm">
            {" "}
            <MdAddShoppingCart
              onClick={() => {
                // console.log("this is the click event ", event.index);
                addItem();
              }}
            />
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="card w-75">
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <div className="col-md-4">
    //         <img
    //           src={props.productDetails.productImageUrl}
    //           className="img-fluid rounded-start"
    //           alt="..."
    //         />
    //       </div>
    //       <p className="card-text">
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </p>
    //       <a href="#" className="btn btn-primary">
    //         Button
    //       </a>
    //     </div>
    //   </div>

    //   <div className="card w-50">
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </p>
    //       <a href="#" className="btn btn-primary">
    //         Button
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
