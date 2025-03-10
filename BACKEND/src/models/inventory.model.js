import mongoose from "mongoose";
import { Product } from "./product.model.js";
const inventorySchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["snack", "beverage", "meal", "dessert", "other"],
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["available", "out of stock"],
      default: "available",
    },
    expirationDate: {
      type: Date,
    },
    images: [{
        type: String,
        required: true
      }],
    description: {
        type: String,
        required: true
      },
    ingredients: {
        type: String,
        required: true
      },

  },
  {
    timestamps: true,
  }
);


// Middleware to check if the product is available
inventorySchema.pre('save', async function(doc) {
    if (doc.status === 'available') {
        // Add to Product table if not already present
        const existingProduct = await Product.findOne({ productname: doc.productName });
        if (!existingProduct) {
            await Product.create({
                productName: doc.productName,
                price: doc.price,
                category: doc.category,
                availabilitystatus: 'available',
                images: doc.images,
                description: doc.description,
                ingredients: doc.ingredients
            });
        }
    } else {
        // Remove from Product table if status is not available
        await Product.deleteOne({ productname: doc.productName });
    }
});

export const Inventory = mongoose.model("inventory", inventorySchema);
