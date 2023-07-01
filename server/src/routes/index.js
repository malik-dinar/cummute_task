import { Router } from "express";
import authRoutes from "./auth.js";
const router = Router();

/**
 * @route /api/
 */
    
router.use("/auth", authRoutes);

// additional routes

export default router;
