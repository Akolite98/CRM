const { Router } = require("express");
const userRouter = Router();

const {
  signUp,
  loginUser,
  findAUser,
  fetchAllUsers,
  updateAUser,
  removeUser,
  loggedOut,
  forgotPassword,
  forgottenPassword,
  updatePassword,
  verifyEmail,
} = (userController = require("../controller/user.controller"));

userRouter.post("/user/register", signUp);
userRouter.post("/user/login", loginUser);
userRouter.post("/user/reset-password", forgotPassword);
userRouter.post("/user/logout", loggedOut);
userRouter.get("/user", fetchAllUsers);
userRouter.get("/user/reset-password/:id/:token", forgottenPassword);
userRouter.get("/user/:id", findAUser);
userRouter.patch("/user/setpassword", updatePassword);
userRouter.patch("/user/:id", updateAUser);
userRouter.delete("/user/:id", removeUser);
userRouter.get("/user/verify-email/:token", verifyEmail);

module.exports = userRouter;
