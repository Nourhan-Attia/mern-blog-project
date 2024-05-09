import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
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
export { userSignUp, getUserSignUp };
