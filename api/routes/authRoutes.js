import express from "express";
import { userSignUp, getUserSignUp } from "../controllers/authControllers.js";
const router = express.Router();
// @desc: user sign UP @method: GET @access: public @path: /api/auth/signup
router.get('/signup', getUserSignUp)
// @desc: user sign UP @method: POST @access: public @path: /api/auth/signup
router.post('/signup',userSignUp)
export default router;