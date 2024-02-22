import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useSelector } from "react-redux";
import Back from "../Components/Back";
import Foooter from "../Components/Foooter";
import BackToTop from "../Components/BackToTop";

function Category() {
  const { searchItem } = useSelector((state) => state.cart);
  const Url = `https://dummyjson.com/products/search?q=${searchItem}`;
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  async function fetchProducts() {
    setloading(true);
    try {
      await axios.get(Url).then((Response) => {
        console.log(Response.data.products);
        setProducts(Response.data.products);
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, [searchItem]);

  return (
    <div className="w-full h-full mx-auto pt-[120px] md:pt-[40px] relative">
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="">
          <div className="max-w-[1000px] mx-auto flex flex-col gap-10 mt-14 ">
            <div>
              <Back />
            </div>
            <div className="flex items-center justify-center">
              {searchItem.length > 0 ? (
                <p className="text-3xl uppercase font-bold ">{searchItem}</p>
              ) : (
                <p className="text-3xl uppercase font-bold ">Category</p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 mb-20  ">
              {products.map((product, index) => {
                return <Card product={product} key={index} />;
              })}
            </div>
          </div>
          <div className="absolute right-5 bottom-[9rem]  ">
            <BackToTop/>
          </div>
          <p className="text-[4.5rem] uppercase font-bold text-black absolute  left-0 bottom-[7rem] opacity-5 z-10">
            Category
          </p>
          <Foooter />
        </div>
      ) : (
        <div className="w-full h-[28rem] flex flex-col items-center justify-center  ">
          <p className="font-semibold text-lg">No Products Found</p>
        </div>
      )}
    </div>
  );
}

export default Category;
