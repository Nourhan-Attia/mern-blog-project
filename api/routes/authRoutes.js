import express from "express";
import {
  userSignUp,
  getUserSignUp,
  userSignIn,
} from "../controllers/authControllers.js";
const router = express.Router();
// @desc: user sign UP @method: GET @access: public @path: /api/auth/signup
router.get("/signup", getUserSignUp);
// @desc: user sign UP @method: POST @access: public @path: /api/auth/signup
router.post("/signup", userSignUp);
// @desc: user sign IN @method: POST @access: public @path: /api/auth/signin
router.post("/signin", userSignIn);
export default router;
