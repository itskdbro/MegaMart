import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
import { Carousel } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addproduct } from "../Redux/slices/CartSlice";
import { Link, NavLink } from "react-router-dom";
import Foooter from "./Foooter";
import { IoTrendingUp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaSdCard } from "react-icons/fa6";
import { GiPoloShirt } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import BackToTop from "./BackToTop";
function Home() {
  const Url = "https://fakestoreapi.com/products";
  const Url2 = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [smartphone, setSmartphone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  async function fetchProducts() {
    setloading(true);
    try {
      await axios.get(Url).then((Response) => {
        setTrendingProducts(Response.data.slice(0, 4));
        setProducts(Response.data);
        dispatch(addproduct(Response.data));
        // console.log(Response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCategoryProducts() {
    setloading(true);
    try {
      await axios.get(Url2).then((Response) => {
        // setSmartphones(Response.data.products);
        setSmartphone(Response.data.products);
        // console.log(Response.data.products);
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    fetchProducts();
    fetchCategoryProducts();
  }, [dispatch]);
  const Smartphones = smartphone
    .filter((data) => data.category === "smartphones")
    .slice(0, 4);
  const Laptop = smartphone
    .filter((data) => data.category === "laptops")
    .slice(0, 4);
  const Fragrances = smartphone
    .filter((data) => data.category === "fragrances")
    .slice(0, 4);
  const Jewelery = products
    .filter((data) => data.category === "jewelery")
    .slice(0, 4);
  const WomensClothing = products
    .filter((data) => data.category === "women's clothing")
    .slice(0, 4);
  const Electronics = products
    .filter((data) => data.category === "electronics")
    .slice(0, 4);

  return (
    <div className="w-full h-full mx-auto pt-[80px] md:pt-[66px] relative ">
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div>
          <div className="h-[10rem] flex  sm:h-64 xl:h-80 2xl:h-96 z-10 py-5">
            <Carousel slideInterval={1000}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/585a93b0ebfd39c2.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem] "
              />
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fd68bbdcaea79197.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem]"
              />
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bd4e7bd1406a534e.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem] "
              />

              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cdcfbef98097e15a.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem] "
              />
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b6d0f4b7a5e55fbc.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem] "
              />
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bd4e7bd1406a534e.jpg?q=20"
                alt="..."
                className=" md:h-full h-[6rem] "
              />
            </Carousel>
          </div>
          <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Trending
                  <IoTrendingUp className="font-bold text-white" />
                </p>
                <p className="text-[5.5rem] -rotate-90 uppercase font-bold text-white absolute  -right-[12rem] top-[13rem] opacity-5">
                  Trending
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {TrendingProducts.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Smartphones <FaMobileAlt className="font-bold text-black" />
                </p>
                <p className="text-[4.5rem] rotate-90 uppercase font-bold text-black absolute  -left-[15rem] top-[14rem] opacity-5 z-10">
                  Smartphones
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {Smartphones.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Laptops <FaLaptop className=" text-white" />
                </p>
                <p className="text-[5.5rem] -rotate-90 uppercase font-bold text-white absolute  -right-[9.5rem] top-[13.5rem] opacity-5">
                  Laptops
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {Laptop.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center">
                  Jewelery <GiBigDiamondRing className="font-bold text-black" />
                </p>
                <p className="text-[5.5rem] rotate-90 uppercase font-bold text-black absolute  -left-[11rem] top-[14rem] opacity-5 z-10">
                  Jewelery
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {Jewelery.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center">
                  Womens Clothing <GiPoloShirt className=" text-white" />
                </p>
                <p className="text-[3.4rem] -rotate-90 uppercase font-bold text-white absolute  -right-[15.2rem] top-[14.5rem] opacity-5">
                  Womens Clothing
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {WomensClothing.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Electronics <FaSdCard className="font-bold text-black " />
                </p>
                <p className="text-[5rem] rotate-90 uppercase font-bold text-black absolute  -left-[14rem] top-[13.4rem] opacity-5 z-10">
                  Electronics
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {Electronics.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          {/* <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-5 py-16">
              <div>
                <p className="pl-10 md:pl-0 text-xl md:text-3xl uppercase font-bold text-[#FF7F00] flex gap-3 items-center">
                  Fragrances <TbPerfume className=" text-white" />
                </p>
                <p className="text-[5rem] -rotate-90 uppercase font-bold text-white absolute  -right-[14rem] top-[13.5rem] opacity-5">
                  Fragrances
                </p>
              </div>
              <div className="flex flex-wrap gap-3  ">
                {Fragrances.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div> */}
          {/* <div className="max-w-[1000px] mx-auto flex flex-col  gap-5 mt-10">
            <div>
              <p className="text-3xl uppercase font-bold text-[#FF7F00] ">
                Products
              </p>
            </div>
            <div className="flex flex-wrap gap-3  ">
              {products.map((product, index) => {
                return <Card product={product} key={index} />;
              })}
            </div>
          </div> */}
          <div className="w-full bg-zinc-100 h-full flex justify-center items-center pb-20">
            <Link to={"/Products"}>
              <button
                onClick={() => {
                  dispatch(addproduct(products));
                  window.scrollTo(top);
                }}
                className="font-semibold text-lg bg-black px-6 py-1 text-white rounded-md "
              >
                View All Products
              </button>
            </Link>
          </div>
          <div className="absolute right-3 md:right-5 bottom-[17.5rem] md:bottom-[12rem]  ">
            <BackToTop />
          </div>
          <Foooter />
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center  ">
          <p className="font-semibold text-lg">No Products Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
