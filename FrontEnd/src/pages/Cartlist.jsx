import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllProducts } from "../Redux/productSlice.js";
import ProductCard from "../Components/ProductCard.jsx";
import { getAllCartlist } from "../Redux/cartlistSlice.js";
import CartlistCard from "../Components/CartlistCard.jsx";
import { IoReturnDownBackSharp } from "react-icons/io5";

function Cartlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const { allCartlistProducts, deletedFromcartlist } = useSelector(
    (state) => state.cartlist
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const handleUpdateTotalPrice = (price) => {
    return setTotalPrice(price);
  };

  console.log(allCartlistProducts);

  useEffect(() => {
    dispatch(getAllCartlist());
  }, [deletedFromcartlist]);

  useEffect(() => {}, [totalPrice]);

  return (
    <div>
      <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <h1 class="text-2xl font-extrabold text-gray-800">{`${
          allCartlistProducts?.length === 0
            ? "Your Cart is Empty"
            : "Your Shopping Bag"
        }`}</h1>
        {allCartlistProducts?.length === 0 && (
          <>
            {" "}
            <Link to="/cellphones">
              <button
                type="button"
                className="bg-yellow-300 flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {" "}
                <IoReturnDownBackSharp />
                Back Shopping
              </button>
              <br />
            </Link>
          </>
        )}
        {allCartlistProducts?.length > 0 && (
          <>
            {" "}
            <div class="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div class="flex gap-4">
                <section className="text-gray-600 body-font">
                  {allCartlistProducts?.map((product) => (
                    <CartlistCard
                      allProducts={allCartlistProducts}
                      product={product}
                      totalPrice={totalPrice}
                      handleUpdateTotalPrice={handleUpdateTotalPrice}
                    />
                  ))}
                </section>
              </div>
            </div>
          </>
        )}
        {allCartlistProducts?.length > 0 && (
          <>
            {" "}
            <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <ul className="text-gray-800 space-y-4">
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">
                  Total <span className="ml-auto">{totalPrice} dt</span>
                </li>
              </ul>{" "}
              <div className="mt-8 space-y-2">
                <Link to="/orderpage">
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                  >
                    Buy Now
                  </button>
                </Link>

                <Link to="/cellphones">
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <img
                  src="https://readymadeui.com/images/master.webp"
                  alt="card1"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  alt="card2"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/american-express.webp"
                  alt="card3"
                  className="w-10 object-contain"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cartlist;
