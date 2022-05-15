import express from "express";

const router = express.Router()

import { createProduct, getProducts } from "../contollers/productsController.js";

router.post('/createProduct', createProduct);
router.get('/allproducts', getProducts)

export default router;

