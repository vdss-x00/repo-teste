import type { Request, Response } from "express";
import Category from "../models/category.js";

async function getAll (req: Request, res: Response) {
    try {
        try{
            const categories = await Category.findAll();
            res.status(200).json(categories);
        } catch (error) {
            console.log ("Erro ao buscar categorias: ", error);

            res.status(404).json({
                message: "Erro ao buscar categorias.",
            });
        }
    } catch(error){}
}

export default {
    getAll,
}