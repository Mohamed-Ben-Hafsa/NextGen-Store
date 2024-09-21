import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteProductFromCartlist } from "../Redux/cartlistSlice.js";
import { IoReturnDownBackSharp } from "react-icons/io5";

function CartlistCard({ product, handleUpdateTotalPrice, allProducts }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [qty, setQty] = useState(product.quantity);

  const { deletedFromcartlist } = useSelector((state) => state.cartlist);

  const [updatedProducts, setUpdatedProducts] = useState(allProducts);
  //   const [addQty, setAddQty] = useState(1);
  //   const [calcPrice, setcalcPrice] = useState(1);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProductsArray = updatedProducts.map((product) => {
      if (product._id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setUpdatedProducts(updatedProductsArray);
  };

  const calTotalPrice = function () {
    const totalPrice = updatedProducts.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    console.log(totalPrice);
    handleUpdateTotalPrice(totalPrice);
  };

  useEffect(() => {
    calTotalPrice();
  }, [updatedProducts]);

  useEffect(() => {
    deleteProductFromCartlist();
  }, [deletedFromcartlist]);

  return (
    <div class="grid md:grid-cols-3 gap-4 mt-8">
      <div class="md:col-span-2 space-y-4">
        <div className="ml-auto flex flex-col">
          <div className="flex items-start gap-4 justify-end">
            <svg
              onClick={() => {
                dispatch(deleteProductFromCartlist(product._id));
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 cursor-pointer fill-gray-400 inline-block  hover:bg-red-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-800 mt-auto">
            {product.price * qty}dt
          </h3>
        </div>
        <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img
                src={product.image}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold text-gray-800">
                  {product.name}
                </h3>
              </div>
              <div className="mt-auto flex items-center gap-3">
                Quantity:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(Number(e.target.value));
                    handleQuantityChange(product._id, Number(e.target.value));
                  }}
                >
                  {[
                    ...Array.from({ length: 20 }, (_, i) => (
                      <option value={i + 1} key={i}>
                        {i + 1}
                      </option>
                    )),
                  ]}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartlistCard;
