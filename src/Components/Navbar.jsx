import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { add, search } from "../Redux/slices/CartSlice";
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { addproduct } from "../Redux/slices/CartSlice";
import logo1 from "../assets/logo1.png";
function Navbar() {
  const { cartItems, searchItem } = useSelector((state) => state.cart);
  const [showClose, setShowClose] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartDiv, setShowCartDiv] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [TotalAmount, setTotalAmount] = useState(0);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowCartDiv(false);
      setShowSearch(false);
      setShowClose(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.price, 0));
    dispatch(addproduct(products));
  }, [dispatch, cartItems]);

  return (
    <div className="w-full h-[5rem] md:h-[4rem] bg-[#FF7F00] text-white  fixed top-0 z-30 shadow-lg ">
      <div className="max-w-[320px]  pr-2 md:px-0 md:max-w-[1000px]  mx-auto flex justify-between py-3 items-center relative">
        {/* logo  */}
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center gap-2">
            <img src={logo1} alt="" className="w-[6rem] md:w-[10rem]" />
          </div>
        </NavLink>

        {/* search bar  */}
        <div className="hidden md:block">
          <label htmlFor="search" className="relative">
            <input
              type="text"
              id="search"
              name="search"
              value={searchItem}
              required
              onChange={(e) => {
                dispatch(search(e.target.value));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              placeholder="Search your product"
              className="w-[15rem] py-1 px-3 rounded-md text-black  border-gray-100"
            />
            <Link
              to={`/Category/${searchItem}`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <IoSearch className="absolute top-0.5 right-2 text-black font-semibold" />
            </Link>
          </label>
        </div>
        <div className="">
          <div
            className={`md:px-0 md:w-full  mx-auto flex justify-between gap-14 items-center absolute md:relative py-2 top-10 left-[4.5rem]  md:top-0 text-white`}
          >
            <NavLink to="/">
              <p className="font-medium">Home</p>
            </NavLink>

            <NavLink
              to="/Products"
              onClick={() => {
                dispatch(addproduct(products));
              }}
            >
              <p className="font-medium ">Products</p>
            </NavLink>
          </div>
        </div>

        {/* right nav  */}
        <div className="flex gap-5 md:gap-5 items-center">
          <div className="relative flex gap-3 items-center">
            <div>
              <div ref={ref}>z
                <IoSearch
                  className="md:hidden block font-semibold text-xl"
                  onClick={() => {
                    setShowSearch(!showSearch);
                  }}
                />
              </div>
              <div className="w-full block md:hidden" ref={ref}>
                <label
                  htmlFor="search"
                  className={`relative 
                      ${
                        showSearch
                          ? "top-8 opacity-100"
                          : "top-[-490px] md:opacity-100 opacity-0"
                      } `}
                >
                  <input
                    type="text"
                    id="search"
                    name="search"
                    value={searchItem}
                    required
                    onChange={(e) => {
                      dispatch(search(e.target.value));
                    }}
                    placeholder="Search your product"
                    className={`w-[18rem] md:w-[15rem] py-1 px-3 absolute md:relative -md:bg-white md:top-0 top-8 md:left-0 -left-[14.5rem] bg-white shadow-lg rounded-md  md:text-white text-black  z-40`}
                  />
                  <Link
                    to={`/Category/${searchItem}`}
                    onClick={() => setShowSearch(!showSearch)}
                  >
                    <IoSearch className="absolute top-10 -right-[3rem] text-black font-semibold z-50" />
                  </Link>
                </label>
              </div>
            </div>

            <div className="group relative">
              <abbr title=" Cart ">
                <div
                  onClick={() => setShowCartDiv(!cartDiv)}
                  className="w-[2rem] p-1 rounded-full transition-all duration-200 hover:bg-white group-hover:bg-zinc-900"
                >
                  <GiShoppingCart className="font-bold text-xl md:text-2xl text-black group-hover:text-white transition-all duration-200" />
                  <div className="absolute bg-white text-black font-bold px-1.5 py-0.5 rounded-full text-[9px] md:text-xs md:-right-[10px] -right-[2px] md:-top-[4px] top-[0px] animate-bounce group-hover:bg-white group-hover:text-black">
                    {cartItems.length}
                  </div>
                </div>
              </abbr>
            </div>

            {cartDiv && (
              <div
                ref={ref}
                className="w-[12rem] h-[8rem] bg-zinc-900 shadow-sm-light  shadow-zinc-800 absolute top-20 right-[-0rem] md:right-[-5rem] rounded-xl p-4 "
              >
                <p className="font-bold mb-3">{cartItems.length} Items</p>
                <p>
                  {" "}
                  <span className="mr-1  text-neutral-content">SubTotal:</span>$
                  {TotalAmount}
                </p>
                <NavLink
                  to={"/Cart"}
                  onClick={() => {
                    setShowCartDiv(!cartDiv);
                  }}
                >
                  <button className="mt-1 w-full py-1 rounded-md  bg-[#FF7F00]">
                    View Cart
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
