import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, title, thumbnail, image, description, price } = item;
  function removeToCart() {
    dispatch(remove(id));
    toast.error("Item Removed from Cart");
  }

  console.log(cartItems);
  return (
    <div className="flex justify-evenly border-b-2 py-5">
      <div className="w-1/3 ">
        {thumbnail ? (
          <img src={thumbnail} width={120} alt="" />
        ) : (
          <img src={image} width={120} alt="" />
        )}
      </div>
      <div className="w-1/2 flex flex-col justify-evenly ">
        <p className="font-semibold">
          {title.split(" ").splice(0, 6).join(" ") + "..."}
        </p>
        <p className="text-sm">
          {" "}
          {description.split(" ").splice(0, 14).join(" ") + "..."}
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-[#FF7F00]">${price}</p>
          <button onClick={removeToCart}>
            <RiDeleteBin5Fill className="text-red-600 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
