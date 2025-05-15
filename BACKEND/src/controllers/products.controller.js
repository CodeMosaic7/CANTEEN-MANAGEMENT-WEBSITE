import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const addProduct = asyncHandler(async (req, res) => {
  // checks if user is logged in
  // if user is logged in, check if user is admin or manager
  if (!req.user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const allowedRoles = ["admin", "manager"];
  if (!allowedRoles.includes(req.user.role)) {
    res.status(403);
    throw new Error("Not authorized");
  }
  const {
    productName,
    ingredients,
    price,
    category,
    availabilitystatus,

    description,
  } = req.body;

  const images = req.files;
  if (
    !productName ||
    !ingredients ||
    !price ||
    !category ||
    !availabilitystatus ||
    !images ||
    !description
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const uploadedImages = [];

  for (const image of images) {
    const result = await uploadOnCloudinary(image.path);
    uploadedImages.push({
      // public_id: result.public_id,
      url: result.secure_url,
    });
  }
  console.log(uploadedImages);
  const product = await Product.create({
    productName,
    ingredients,
    price,
    category,
    availabilitystatus,
    uploadedImages,
    description,
  });
});

const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

const removeProduct = asyncHandler(async (req, res) => {
  if (!req.user.role === "admin" || req.user.role === "manager") {
    res.status(401);
    throw new Error("Not authorized");
  }
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

export { addProduct, getProducts, removeProduct };
