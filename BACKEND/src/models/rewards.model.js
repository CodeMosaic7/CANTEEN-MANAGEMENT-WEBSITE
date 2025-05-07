import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Reward = mongoose.model("Reward", userSchema);
