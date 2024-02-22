import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { add, remove, addProductDetails } from "../Redux/slices/CartSlice";
import Card from "../Components/Card";
import Foooter from "../Components/Foooter";
import BackToTop from "../Components/BackToTop";
import Back from "../Components/Back";
function ProductDetails() {
  const { cartItems, productDetails, products } = useSelector(
    (state) => state.cart
  );
  const { id, title, thumbnail, image, description, price } = productDetails;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [product, setProduct] = useState();
  console.log(products);
  const product = products.slice(0, 8);

  function addToCart() {
    dispatch(add(productDetails));
    toast.success("Item Added to Cart");
  }
  function removeToCart() {
    dispatch(remove(id));
    toast.error("Item Removed from Cart");
  }
  return (
    <div className="w-full h-full pt-[6.2rem] relative">
      <div className="max-w-[1000px] mx-auto flex flex-col">
        <div className="pl-5 pt-3">
          <Back />
        </div>
        <div className="max-w-[1000px] mx-auto flex flex-col  md:flex-row justify-evenly items-center py-5 ">
          <div className="w-full flex items-center justify-center  md:w-1/5">
            {thumbnail ? (
              <img src={thumbnail} width={200} alt="" />
            ) : (
              <img src={image} width={200} alt="" />
            )}
          </div>
          <div className="w-full px-5 md:w-1/2 flex flex-col justify-between  gap-6 md:gap-3 ">
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-sm"> {description}</p>
            <div className="w-full flex items-center">
              <div className="w-full md:w-1/2 flex flex-col justify-between ">
                <p className="text-[#FF7F00] text-[2rem] font-bold ">
                  ${price}{" "}
                  <span className="line-through text-zinc-600 text-[1rem] opacity-50 ml-2">
                    ${price * 2}
                  </span>
                </p>
                <div>
                  <p className="font-bold text-lg  text-black ">50% off</p>
                </div>
              </div>
              <div>
                <img
                  src="
                https://media.istockphoto.com/id/1225603023/vector/100-satisfaction-guaranteed-stamp-on-white-background-vector-illustration.jpg?s=170667a&w=0&k=20&c=-aJLuqjIlWj29UTX3hGOju-PliLCgYfSXBfSx6PoPtI="
                  alt=""
                  className="w-[5rem] "
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 items-center md:items-start mt-5">
              <div>
                <Link to={"/Cart"}>
                  <button
                    onClick={() => {
                      dispatch(add(productDetails));
                      dispatch(addProductDetails(product));
                    }}
                    className=" bg-black text-white rounded-full px-[6rem] md:px-8 uppercase font-semibold text-lg py-1.5 transition-all duration-200 hover:bg-[#FF7F00] hover:text-white "
                  >
                    Buy now
                  </button>
                </Link>
              </div>
              <div>
                {cartItems.some((p) => p.id === id) ? (
                  <button
                    onClick={removeToCart}
                    className="border-2 border-black rounded-full px-[6rem]  md:px-[2.4rem] uppercase font-semibold text-lg py-1  hover:bg-red-600 hover:text-white"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={addToCart}
                    className="border-2 border-black rounded-full px-[5rem]  md:px-5 uppercase font-bold text-lg py-1 hover:bg-gray-300 hover:text-black
            "
                  >
                    Addtocart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center  gap-5 my-20">
          <div>
            <p className="md:pl-0 text-xl md:text-3xl  uppercase font-bold text-black ">
              Related Products
            </p>
          </div>
          <div className="flex flex-wrap gap-3  ">
            {product.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
          </div>
        </div>
        <div className="absolute right-5 bottom-[12rem]  ">
          <BackToTop />
        </div>
      </div>
      <p className="text-[2rem] md:text-[4.5rem] uppercase font-bold text-black absolute  left-0 bottom-[10.7rem] md:bottom-[10rem] opacity-5 z-10x">
        Product DEtails
      </p>
      <Foooter />
    </div>
  );
}

export default ProductDetails;
