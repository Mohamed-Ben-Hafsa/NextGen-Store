import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllProducts } from "../Redux/productSlice.js";
import ProductCard from "../Components/ProductCard.jsx";
import { getAllWishlist } from "../Redux/wishlistSlice.js";
import WishlistCard from "../Components/WishlistCard.jsx";

function Wishlist() {
  const dispatch = useDispatch();

  const { allWishlistProducts, deletedFromWishlist } = useSelector(
    (state) => state.wishlist
  );

  console.log(allWishlistProducts);

  useEffect(() => {
    dispatch(getAllWishlist());
  }, [deletedFromWishlist]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="grid grid-cols-3   ">
          {allWishlistProducts?.map((product) => (
            <WishlistCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Wishlist;
