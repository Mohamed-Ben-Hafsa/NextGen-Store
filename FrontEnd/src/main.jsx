import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cellphones from "./pages/Cellphones.jsx";
import LapTops from "./pages/LapTops.jsx";
import Watch from "./pages/Watch.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cartlist from "./pages/Cartlist.jsx";
import Orderpage from "./pages/Orderpage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ProductDescription from "./Components/ProductDescription.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import PrivateRouteLoggedInUser from "./Components/PrivateRouteLoggedInUser.jsx";
import { Profile } from "./pages/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/cellphones" element={<Cellphones />} />
      <Route path="/laptops" element={<LapTops />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cartlist" element={<Cartlist />} />
      <Route path="/orderpage" element={<Orderpage />} />
      <Route path="/aboutUs" element={<AboutUs />} />

      <Route path="/productDescription/:id" element={<ProductDescription />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
