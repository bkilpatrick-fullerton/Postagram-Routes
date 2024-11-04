import jwt from "jsonwebtoken";
//import User from "../model/user.js";

const authenticate = async (req, res, next) => {
  // try {
  //   const token = req.header("Authorization");

  //   const { email } = jwt.verify(token, process.env.SECRET_KEY);
  //   console.log(email)

  //   const response = await User.find({ email });
  //   req.user = response[0];
  //   console.log(`inside middleware`, response)
    next();
  // } catch (err) {
  //   console.log(err);
  // }
};

export default authenticate;
