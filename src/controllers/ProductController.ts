import type { Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository.js";

async function findAll(req:Request, res:Response) {
    try {
        try {
            const product = await ProductRepository.findAll();

            res.status(200).json(product);
        } catch (error) {
            console.log("Erro ao buscar produto: ");

            res.status(404).json({
                message: "Erro ao buscar produto: ",
            });
        }
    } catch (error) {

    }
}

async function findById(req:Request<{ id:string }>, res:Response) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "ID do produto não informado.",
        });
    } try {
        const product = await ProductRepository.findById(id);

        res.status(200).json(product);
    } catch (error) {
        console.log("Erro ao buscar produto: ", error);

        res.status(404).json({
            message: "Erro ao buscar produto.",
        });
    }
}

async function create(req:Request, res:Response) {
    try {
        const product = await ProductRepository.create(req.body);

        res.status(201).json(product);
    } catch (error) {
        console.log("Erro ao criar produto: ", error);

        res.status(500).json({
            message: "Erro ao criar produto.",
        });
    }
}

async function update(req:Request<{ id:string }>, res:Response) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "Id do produto não informado.",
        });
    }

    const { name, description, icon, active } = req.body;
    const changes = { name, description, icon, active };
    const hasChanges = Object.values(changes).some((value) => value !== undefined);

    if (!hasChanges) {
        return res.status(400).json({
            message: "Informe ao menos um campo para atualizar.",
        });
    }

    try {
        const product = await ProductRepository.update(id, changes);
        return res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        return res.status(404).json({
            message: "Produto não encontrado.",
        });
    }
}

async function remove(req: Request<{id: string}>, res: Response){
    const { id } = req.params;

    if (!id){
        return res.status(400).json({
            message: "ID do produto não informado.",
        });
    }

    try{
        const product = await ProductRepository.remove(id);

        res.status(200).json({
            message: "Produto removido com sucesso.",
        });
    } catch(error){
        console.log("Erro ao remover produto.", error);

        res.status(404).json({
            message: "Produto não encontrado.",
        });
    }
}

export default {
    findAll,
    findById,
    create,
	update,
	remove,
};

