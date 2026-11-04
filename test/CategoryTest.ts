import { describe, it, expect } from "vitest";
import { Category } from "../src/models/category"

describe ("Category - Testes Unitários", () => {

    it ("deve criar uma categoria válida", () => {
        const name = "Pizzas";
        const display_order = 1;
        const description = "Categoria de Pizzas";
        const icon = "";

        const category = new Category(
            name,
            display_order,
            description,
            icon
        );

        expect(category.getName()).toBe("Pizza");
        expect(category.getDisplayOrder()).toBe(1);
        expect(category.getDescription()).toBe("Categoria de Pizza");
        expect(category.getIcon()).toBe("");
        expect(category.isActive()).toBe(true);
        expect(category.getId()).toBeUndefined();
    });


    it("não deve permitir criar uma categoria sem nome", () => {
        const name = "";
        const display_order = 1;

        expect(() => {
            new Category(name, display_order);
        }).toThrow("O nome da categoria é obrigatório.");
    });


    it("não permitir a criação de categoria com nome sem caracteres", () => {
        {/*Código vai aqui, a ser acrescentado depois*/}
    });

    it("deve remover os espaços antes e depois do nome de uma categoria", () => {
        {/*Código vai aqui, a ser acrescentado depois*/}
    });

});