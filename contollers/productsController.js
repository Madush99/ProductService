import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const createProduct = asyncHandler(async (req, res) => {
    const {
        itemName,
        image,
        brand,
        category,
        description,
        price,
        countInstock} = req.body
           
    const product = new Product({
        itemName,
        image,
        brand,
        category,
        description,
        price,
        countInstock
    })

    try {
        await product.save();
        if(product){
            res.status(201).json({
                _id: product.id,
                itemName: product.itemName,
                image: product.image,
                brand: product.brand,
                category: product.category,
                description: product.description,
                price: product.price,
                countInstock: product.countInstock
            })

        }
    } catch (error) {
        return res.status(400).json({message: "Invalid product data..."})
    }
})

const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)
})

export {createProduct, getProducts}