import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("JWT", token, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV !== "production",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
