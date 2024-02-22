import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, addProductDetails } from "../Redux/slices/CartSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Card({ product, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { id, title, image, thumbnail, description, price } = product;

  function addToCart() {
    dispatch(add(product));
    toast.success("Item Added to Cart");
  }
  function removeToCart() {
    dispatch(remove(id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="w-[240px] h-[350px] mx-auto flex bg-white flex-col  justify-between px-5 py-4 border rounded-md shadow-xl mb-10 hover:scale-105 transition-all duration-300  z-20   ">
      <div className=" h-[250px] flex flex-col justify-between">
        <div
          className="h-[18rem] flex items-center justify-center"
          onClick={() => {
            navigate(`/ProductDetails`);
            dispatch(addProductDetails(product));
            window.scrollTo(top);
          }}
        >
          {thumbnail ? (
            <img src={thumbnail} alt="" width="170rem" className="h-[10rem]" />
          ) : (
            <img src={image} alt="" width={100} height={100} />
          )}
        </div>
        <div className="w-full flex justify-evenly ">
          <div className="w-full flex flex-col justify-evenly gap-0 mt-2">
            <div>
              <p className="font-bold text-sm  text-black ">
                {title.split(" ").splice(0, 6).join(" ") + "..."}
              </p>
            </div>
            <div className="w-full flex">
              <div className="w-full flex flex-col ">
                <p className="text-[#FF7F00] text-[1.1rem] font-bold ">
                  ${price}{" "}
                  <span className="line-through text-zinc-600 text-[0.8rem] opacity-50 ml-2">
                    ${price * 2}
                  </span>
                </p>
                <div>
                  <p className="font-bold text-sm  text-black ">50% off</p>
                </div>
              </div>
              <div>
                {/* <img
                  src="
                https://media.istockphoto.com/id/1225603023/vector/100-satisfaction-guaranteed-stamp-on-white-background-vector-illustration.jpg?s=170667a&w=0&k=20&c=-aJLuqjIlWj29UTX3hGOju-PliLCgYfSXBfSx6PoPtI="
                  alt="" className="w-[4rem] "
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          {cartItems.some((p) => p.id === id) ? (
            <button
              onClick={removeToCart}
              className="border-2 border-black rounded-full px-[1.3rem] uppercase font-semibold text-xs py-1  hover:bg-red-600 hover:text-white"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="border-2 border-black rounded-full px-2 uppercase font-bold text-xs py-1 hover:bg-gray-300 hover:text-black
            "
            >
              Addtocart
            </button>
          )}
        </div>
        <div>
          <Link to={`/ProductDetails`}>
            <button
              onClick={() => {
                dispatch(addProductDetails(product));
                window.scrollTo(top);
              }}
              className="bg-black text-white rounded-full px-[1.2rem] uppercase font-semibold text-xs py-1.5 transition-all duration-200 hover:bg-[#FF7F00] hover:text-white 
            "
            >
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
