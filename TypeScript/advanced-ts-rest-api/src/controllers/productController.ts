import { Request, Response } from 'express';
import { Product } from '../models/product';

let products: Product[] = [];

export const getProducts = (req: Request, res: Response) => {
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

export const createProduct = (req: Request, res: Response) => {
    const newProduct: Product = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = req.body;
        res.json(products[index]);
    } else {
        res.status(404).send('Product not found');
    }
};

export const deleteProduct = (req: Request, res: Response) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Product not found');
    }
};