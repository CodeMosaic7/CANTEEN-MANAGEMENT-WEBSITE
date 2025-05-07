import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model("Payement", paymentSchema);
