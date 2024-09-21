
import Order from "../Model/orderModel.js";
import asyncHandler from "express-async-handler";

const createOrder = asyncHandler(async (req, res) => {
    const { items , adress ,  orderBy } = req.body;
    try {
      const order = await Order.create({
        items:req.body.product_id,
        adress: req.body.adress ,
        orderBy: req.user._id,
      });
  
      res.status(201).json(order);
    } catch (error) {
      res.status(401);
      throw new Error(error);
    }
  });


  export {createOrder} 

