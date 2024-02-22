import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import axios from "axios";
import Back from "./Back";
import Foooter from "./Foooter";
import BackToTop from "./BackToTop";

function AllProducts() {
  const Url = "https://fakestoreapi.com/products";
  const Url2 = "https://dummyjson.com/products";
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  async function fetchProducts() {
    setloading(true);
    try {
      await axios.get(Url).then((Response) => {
        setProducts(Response.data);
        console.log(Response.data);
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  async function fetchProducts2() {
    setloading(true);
    try {
      await axios.get(Url2).then((Response) => {
        setProducts2(Response.data.products.splice(0, 28));
        console.log(Response.data.products);
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    fetchProducts();
    fetchProducts2();
  }, []);

  return (
    <div className="w-full h-full  mx-auto pt-[80px] md:pt-[60px] relative">
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="max-w-[1000px] mx-auto flex flex-col  gap-5 my-10">
          <div className="pl-4">
            <Back />
          </div>
          <div>
            <p className="md:pl-0 text-xl md:text-3xl text-center  uppercase font-bold text-black ">
              All Products
            </p>
          </div>
          <div className="flex flex-wrap gap-3  ">
            {products.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
            {products2.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <div className="w-full h-[28rem] flex flex-col items-center justify-center  ">
          <p className="font-semibold text-lg">No Products Found</p>
        </div>
      )}
      <p className="text-[2rem] md:text-[4.5rem] uppercase font-bold text-black absolute  left-0 bottom-[10.7rem] md:bottom-[10rem] opacity-5 z-10">
        All   Products
      </p>
      <div className="absolute right-5 bottom-[12rem]  ">
        <BackToTop />
      </div>
      <Foooter />
    </div>
  );
}

export default AllProducts;
