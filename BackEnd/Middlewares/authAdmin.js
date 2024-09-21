import asyncHandler from "express-async-handler";

const authorizeAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Admin authorization required",
    });
  }
});

export { authorizeAdmin };
