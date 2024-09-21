import Category from "../Model/categoryModel.js";







// CREATE CATEGORY : 
const createCategoryController = async (req, res) => {
    try {
      const { name_category, icon } = req.body;
      //validation :
      if (!name_category) {
        return res.status(500).send({
          success: false,
          message: "please provide category name or icon",
        });
      }

      const categoryExists = await Category.findOne({ name_category });
      if (categoryExists) {
        res.status(400);
        throw new Error("Category already exists");
      }
      
      //creating new category:

      const newCategory = new Category({ name_category, icon });
      await newCategory.save();
      res.status(201).send({
        success: true,
        message: "category created",
        newCategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Create new Category API",
        error,
      });
    }
  };
  
  // GET ALL CATEGORY 
  const getAllCategoryController = async (req, res) => {
    try {
      const categories = await Category.find({});
      if (!categories) {
        return res.status(404).send({
          success: false,
          message: "No Categories found",
        });
      }
      res.status(200).send({
        success: true,
        totalCat: categories.length,
        categories,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting All Categpry API",
        error,
      });
    }
  };
  
  // UPDATE CATEGORY
  const updateCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name_category, icon } = req.body;
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name_category, icon },
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(500).send({
          success: false,
          message: "No Category Found",
        });
      }
      res.status(200).send({
        success: true,
        message: "Category Updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in update category api",
        error,
      });
    }
  };
  
  // DeLETE CATegory
  const deleteCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(500).send({
          success: false,
          message: "Please provide Category ID",
        });
      }
      const category = await Category.findById(id);
      if (!category) {
        return res.status(500).send({
          success: false,
          message: "No Category Found With this id",
        });
      }
      await Category.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "category Deleted succssfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error in Delete Category APi",
        error,
      });
    }
  };

  //get one Gategory

  const getOneCategoryController = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).send({
          success: false,
          message: "No Category found",
        });
      }
      res.status(200).send({
        success: true,
        totalCat: category.length,
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting the Category API",
        error,
      });
    }
  };

  export  {createCategoryController,getAllCategoryController,updateCategoryController,deleteCategoryController,getOneCategoryController};
  
 
