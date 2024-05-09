import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const getUserSignUp = (req, res) => {
  res.send("GET request to /api/auth/signup");
};

const userSignUp = async (req, res) => {
  try {
    //get user name ,email and password from the front end form
    const { username, email, password } = req.body;
    // what if account is already in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("user already exists");
    } else {
      //hash the password before saving it to the db
      const hashedPassword = bcryptjs.hashSync(password, 10);
      //create new user and save the new user in the database
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      res.status(201).send("User created Successfully");
    }
  } catch (error) {
    console.error("Error signing up : ", error);
    res.status(500).send("internal server error");
  }
};
const userSignIn = async (req, res) => {
  try {
    // get user input from the form
    const { email, password } = req.body;
    // check if email exists in db
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // if user exists
      // check the password
      const isPasswordValid = bcryptjs.compareSync(
        password,
        existingUser.password
      );
      if (isPasswordValid) {
        // if password is valid
        // generate jwt
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.JWT_SECRET_KEY
        );
        const { password: pass, ...rest } = existingUser._doc;
        //send response
        res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
      } else {
        // if password is invalid
        res.status(401).send("wrong credentials!");
      }
    } else {
      // if user doesn't exist
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error Signing In : ", error);
    res.status(500).send("internal server error");
  }
};
export { userSignUp, getUserSignUp, userSignIn };
