import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";
import generateToken from "../Utils/generateToken.js";
// @desc Register new User
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, photo, password, isAdmin } =
    req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    age,
    photo,
    password,
    isAdmin,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
      isAdmin: user.isAdmin,
    });
  } else {
    throw new Error("Invalid user Data");
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or password" });
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ messsage: "User Logged Out" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, age, photo } = req.body;
  try {
    const user = await User.findById(req.user._id).select("+password");
    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.password = password || user.password;
      user.age = age || user.age;
      user.photo = photo || user.photo;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// admin action

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

const getSpecificUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    if (user) {
      res.json(user);
    }
  } catch (error) {
    res.status(404).json({
      message: "user is not found",
    });
  }
});

//Delete User

const deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (user) {
    await User.deleteOne({ _id: user._id });
    res.json({
      message: "user is deleted",
    });
  } else {
    res.status(404);
    throw new Error("User is not found");
  }
});

export {
  registerUser,
  authUser,
  logoutUser,
  updateUser,
  getAllUsers,
  getSpecificUser,
  deleteUserById,
};
