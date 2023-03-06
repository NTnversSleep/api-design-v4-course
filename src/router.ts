import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/products";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/updates";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.put(
  "/products/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);
router.post(
  "/products",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/products/:id", deleteProduct);

/**
 * Update
 */
router.get("/updates", getUpdates);
router.get("/updates/:id", getOneUpdate);
router.put(
  "/updates/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.post(
  "/updates",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/updates/:id", deleteUpdate);

/**
 * Update Point
 */
router.get("/updatepoints", () => {});
router.get("/updatepoints/:id", () => {});
router.put(
  "/updatepoints/:id",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.post("/updatepoints", () => {});
router.delete("/updatepoints/:id", () => {});

export default router;
