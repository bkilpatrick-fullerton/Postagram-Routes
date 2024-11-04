//import { getUserByemail } from "../services/user.service.js";

const checkUser = async (req, res, next) => {
  // try {
  //   const email = req.params.id;
  //   const user = await getUserByemail(email);
  //   console.log(user)
  //   if (user.length === 0) {
  //     throw new Error("User does not exist");
  //   } else {
      next();
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(400).json({"status": "user not found"})
  // }
};

export default checkUser;
