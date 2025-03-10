import { Router } from "express";
import {
    addInventory,
    getInventory,
    getInventoryItem,
    updateInventory,
    deleteInventoryItem
} from "../controllers/inventory.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

// Public Routes
router.route("/").get(getInventory); // Get all inventory items
router.route("/:id").get(getInventoryItem); // Get a specific inventory item

// Protected Routes (Only Manager and Admin)
router.route("/").post(verifyJWT, authorizeRoles("manager", "admin"), addInventory);
router.route("/:id").patch(verifyJWT, authorizeRoles("manager", "admin"), updateInventory);
router.route("/:id").delete(verifyJWT, authorizeRoles("manager", "admin"), deleteInventoryItem);

export default router;
