import express from "express";

import {createCategoryController,getAllCategoryController,getOneCategoryController,updateCategoryController,deleteCategoryController} from "../Controllers/categoryController.js";




const router = express.Router();

//routes
// CREATE CATEGORY
router.post("/create" , createCategoryController);

//GET ALL CATEGORY
router.get("/getAll",  getAllCategoryController);


//Get ONe CATEGORY
router.get("/get/:id" , getOneCategoryController);

// UPDATE CATEGORY
router.put("/update/:id", updateCategoryController);

// DELETE CATEGORY
router.delete("/delete/:id" , deleteCategoryController);


export default router;
