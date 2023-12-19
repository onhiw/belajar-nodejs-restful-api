import express from "express";

import userController from "../controllers/user-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import contactController from "../controllers/contact-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User Api
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// Contact Api
userRouter.post("/api/contacts", contactController.create);
userRouter.get("/api/contacts/:contactId", contactController.get);
userRouter.put("/api/contacts/:contactId", contactController.update);

export { userRouter };
