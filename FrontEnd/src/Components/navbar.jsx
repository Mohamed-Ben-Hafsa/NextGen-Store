import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearCredentials } from "../Redux/authSlice";
import { logout } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
    dispatch(clearCredentials());
  };

  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/">
              <span class="ml-3 text-xl font-bold">NextGen </span>{" "}
            </Link>
          </a>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/cellphones" class="mr-5 hover:text-gray-900 font-bold">
              Cellphones
            </Link>
            <Link to="/laptops" class="mr-5 hover:text-gray-900 font-bold">
              LapTops
            </Link>
            <Link to="/watch" class="mr-5 hover:text-gray-900 font-bold">
              Watch
            </Link>
          </nav>

          {userInfo ? (
            <div className="flex items-center gap-2 mr-5 hover:text-gray-900 font-bold">
              <h3> {`${userInfo.firstName.toUpperCase()}`} </h3>
              <Link to="/profile">
                <img src={userInfo.photo} className=" h-11" />
              </Link>

              <button
                onClick={logoutHandler}
                className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold text-white shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/signin">
                <button class="inline-flex items-center bg-emerald-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold">
                  Sign-in
                </button>
              </Link>

              <Link to="/signup">
                <button class="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold">
                  Try For Free
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
