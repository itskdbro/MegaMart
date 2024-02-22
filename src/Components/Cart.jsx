import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Foooter from "./Foooter";
import Back from "./Back";
import BackToTop from "./BackToTop";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems]);

  return (
    <div className="w-full h-full relative">
      {cartItems.length > 0 ? (
        <div className="w-full h-full flex flex-col">
          <div className="max-w-[300px] flex flex-col md:flex-row md:flex gap-10 py-[120px] md:max-w-[1000px] mx-auto">
            <div className="">
              <Back />
            </div>
            <div className="md:w-[70%]   ">
              {cartItems.map((item, index) => {
                return <CartItem item={item} />;
              })}
            </div>
            <div className="md:w-[45%] h-[20rem] md:h-[30rem] pt-8 flex flex-col md:justify-between mx-auto  ">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0">
                  <p className="font-bold text-lg text-black">Your Cart </p>
                  <p className="font-bold text-4xl text-black">Summary</p>
                </div>
                <p className="text-lg font-semibold">
                  <span>Total items: {cartItems.length}</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-gray-600">
                  Total Amount :{" "}
                  <span className="font-bold text-black">${TotalAmount} </span>
                </p>
                <button className="w-[270px] md:w-[350px] py-1 px-4 font-semibold text-white rounded-md bg-black">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
          <p className="text-[2.5rem] md:text-[4.5rem] uppercase font-bold text-black absolute  left-0 bottom-[10.7rem] md:bottom-[10rem] opacity-5 z-10x">
            cart
          </p>
          <div className="absolute right-5 bottom-[12rem]  ">
            <BackToTop />
          </div>
          <Foooter />
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center  ">
          <p className="font-semibold text-lg">No items in cart</p>
          <NavLink to={"/"}>
            <button className="font-semibold text-lg bg-[#FF7F00] px-6 py-1 text-white rounded-md ">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
