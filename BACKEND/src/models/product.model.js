import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      required: true,
      enum: ["all", "breakfast", "lunch", "dinner", "snacks", "Beverage"],
      default: "all",
    },
    availabilitystatus: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("product", productSchema);
