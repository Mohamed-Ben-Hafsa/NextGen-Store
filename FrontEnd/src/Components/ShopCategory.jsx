import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ShopCategory() {
  return (
    <div className="pb-16">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-600"></p>
              <h1 className="text-2xl xl:text-4xl font-bold leading-7 xl:leading-9 text-gray-800 uppercase mt-4">
                Shop By Category
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
              <Link to="/cellphones">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://img.phonandroid.com/2012/10/appareil-photo-smarphone.jpg"
                    alt="girl-image"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Cellphones
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </Link>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <Link to="/laptops">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://reviewed-com-res.cloudinary.com/image/fetch/s--0SMEQYMv--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/b830aab262aa462f/omen.jpeg"
                      alt="shoe-image"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Laptops
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                </Link>
                <Link to="/watch">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                      alt="watch-image"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Watches
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                </Link>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://www.bebotechnologies.com/skin/images/about-us/get-to-know-more-about-bebo-technologies-pvt-ltd-mobile.jpg"
                  alt="girl-image"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  <Link to="/aboutUs">About Us</Link>
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
