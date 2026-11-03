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

        expect(category.getName()).toBe("");
        expect(category.getDisplayOrder()).toBe("");
        expect(category.getDescription()).toBe("");
        expect(category.getIcon()).toBe("");
        expect(category.isActive()).toBe("");
        expect(category.getId()).toBe("");
    })
});