import jwt from "jsonwebtoken";

export const signAccessToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is missing in .env");
  }

  return jwt.sign(payload, secret, { expiresIn: "7d" });
};
