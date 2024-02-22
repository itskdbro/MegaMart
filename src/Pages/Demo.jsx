import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsFetch } from "../Redux/slices/ProductsFetch";

function Demo() {
  const data = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsFetch());
  }, []);

  console.log(data);
  return <div></div>;
}

export default Demo;
