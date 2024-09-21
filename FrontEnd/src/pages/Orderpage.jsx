import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { deleteProductFromCartlist } from "../Redux/cartlistSlice.js";

function Orderpage({ product }) {
  const dispatch = useDispatch();
  const { allCartlistProducts, deletedFromcartlist } = useSelector(
    (state) => state.cartlist
  );
  const { userInfo } = useSelector((state) => state.auth);

  console.log(allCartlistProducts);

  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-11">
          Your Order Confirmed
        </h2>
        <h6 class="font-medium text-xl leading-8 text-black mb-3">
          Hello, {userInfo.firstName}
        </h6>
        <p class="font-normal text-lg leading-8 text-gray-500 mb-11">
          Your order has been completed and be delivery in only two days .
        </p>
        <h6 class="font-manrope font-bold text-2xl leading-9 text-black mb-3">
          Thank you for shopping with us!
        </h6>
        <p class="font-medium text-xl leading-8 text-indigo-600">
          Team NextGEN
        </p>

        <Link to="/cellphones">
          <button
            type="button"
            className="bg-yellow-300 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {" "}
            <IoReturnDownBackSharp />
            Back Shopping
          </button>
          <br />
        </Link>
      </div>
    </section>
  );
}

export default Orderpage;
