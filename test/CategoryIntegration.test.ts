import { randomUUID } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import app from "../src/app"
import supabase from "../src/config/supabase";

describe("Category - teste de integração", () => {
    const testNames: string[] = [];

    function makeCategoryData(){
        const name = `Teste Integração ${randomUUID()}`;

        testNames.push(name);

        return{
            name,
            display_order: 1,
            description: "Categoria criada pelo teste de integração.",
            icon: "🍕"
        };
    }

    async function createCategory(){
        const data = makeCategoryData();

        const response = await request(app).post("/categories").send(data);

        expect(response.status).toBe(201);
        expect(response.body.id).toEqual(expect.any(String));

        return{
            id: response.body.id as string,
            data
        }

    }

    afterEach(async() => {
        const names = testNames.slice(0);

        if (names.length === 0){
            return;
        }

        const { error } = await supabase.from("categories").delete().in("name", names);

        if (error){
            throw new Error(`Falha ao limpar categoriaas do teste: ${error.message}`);
        }
    });

    it("deve criar uma categoria válida", async () => {
        const data = makeCategoryData();

        const response = await request(app).post("/categories").send(data);

        expect(response.status).toBe(201);
        expect(response.body.id).toEqual(expect.any(String));
        expect(response.body).toMatchObject({
            ...data,
            active: true
        });
    });
})