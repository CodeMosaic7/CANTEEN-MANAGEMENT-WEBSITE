import Cart from "../models/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// get cart items
const getCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const cart = await Cart.findOne({ user: userId, status: "active" })
    .populate("items.product")
    .populate("restaurant");

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  res.status(200).json(cart);
});

// add item to cart
const addItemToCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId, price, quantity, specialInstructions } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { user: userId, status: "active" },
    {
      $addToSet: {
        items: {
          product: productId,
          quantity,
          specialInstructions,
        },
      },
    },
    { new: true, upsert: true }
  );

  res.status(201).json(cart);
});

// remove item from cart
const removeItemFromCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { itemId } = req.params;

  const cart = await Cart.findOneAndUpdate(
    { user: userId, status: "active" },
    { $pull: { items: { _id: itemId } } },
    { new: true }
  );

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  res.status(200).json(cart);
});

// update item quantity in cart
const updateItemQuantity = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { itemId } = req.params;
  const { quantity } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { user: userId, status: "active", "items._id": itemId },
    { $set: { "items.$.quantity": quantity } },
    { new: true }
  );

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  res.status(200).json(cart);
});
