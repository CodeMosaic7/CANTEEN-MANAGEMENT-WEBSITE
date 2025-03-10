import { Inventory } from "../models/inventory.model";
import { asyncHandler } from "../utils/asyncHandler";
import {ApiResponse} from "../utils/ApiResponse";
import {ApiError} from "../utils/ApiError";

const addInventory = asyncHandler(async (req, res) => {
    const {productName, quantity, category,price,description,ingredients,images,status,expirationDate} = req.body;
    if (![productName, quantity, category,price,description,ingredients,images,status,expirationDate].every(Boolean)) {
        throw new ApiError(400, 'Please fill all fields');
    }

    const inventory = await Inventory.create({
        productName, quantity, category,price,description,ingredients,images,status,expirationDate
    });
    return res.status(201).json(new ApiResponse(201, 'Product added to inventory successfully', inventory));
})

// to get all inventory items 
const getInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.find();
    return res.status(200).json(new ApiResponse(200, 'All inventory items', inventory));
})

// to get a single inventory item
const getInventoryItem = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
        throw new ApiError(404, 'Inventory item not found');
    }
    return res.status(200).json(new ApiResponse(200, 'Inventory item', inventory));
})

// to update an inventory item
const updateInventoryItem = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) throw new ApiError(404, "Inventory item not found");

    // Update only provided fields
    Object.keys(req.body).forEach((key) => {
        if (req.body[key] !== undefined) {
            inventory[key] = req.body[key];
        }
    });

    await inventory.save();

    return res.status(200).json(new ApiResponse(200, inventory, "Inventory item updated successfully"));
});

const deleteInventoryItem = asyncHandler(async (req, res) => {
    const item = await Inventory.findById(req.params.id);
    if (!item) throw new ApiError(404, "Inventory item not found");

    await item.deleteOne();

    return res.status(200).json(new ApiResponse(200, null, "Inventory item deleted successfully"));
});

export { addInventory, getInventoryItems, getInventoryItem, updateInventoryItem, deleteInventoryItem };