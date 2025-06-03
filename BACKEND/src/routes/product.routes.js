import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  addProduct,
  getProducts,
  removeProduct,
} from "../controllers/products.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

// Add product route - requires admin/manager role
router
  .route("/addProduct")
  .post(
    verifyJWT,
    authorizeRoles("admin", "manager"),
    upload.array("images", 5),
    addProduct
  );

router.route("/getProducts").get(getProducts);

// Remove product route - requires admin/manager role
router
  .route("/removeProduct/:id")
  .delete(verifyJWT, authorizeRoles("admin", "manager"), removeProduct); // Changed to DELETE method

export default router;
