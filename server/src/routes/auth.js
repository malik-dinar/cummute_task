import { Router } from "express";
import { userLogin, userRegister } from "../controllers/auth.controller.js";
const passport = require("passport");

const router = Router();

/**
 * @Route /api/auth/
 */

router
    .post("/register", userRegister)
    .post("/login",passport.authenticate("local", { session: false }), userLogin);

export default router;
