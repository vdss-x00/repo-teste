import { describe, expect, it } from "vitest";
import { Product } from "../src/models/product.ts";

const categoryId = "44ec31af-a216-4b49-a112-e51e3187378c";

describe("Product - Testes unitários", () => {
  it("cria um produto válido com os valores padrão", () => {
    const product = new Product(categoryId, "  Pizza Margherita  ", 65);

    expect(product.getId()).toBeUndefined();
    expect(product.getCategoryId()).toBe(categoryId);
    expect(product.getTitle()).toBe("Pizza Margherita");
    expect(product.getPrice()).toBe(65);
    expect(product.getDescription()).toBeUndefined();
    expect(product.getImage()).toBeUndefined();
    expect(product.isAvailable()).toBe(true);
    expect(product.isActive()).toBe(true);
  });

  it("normaliza espaços ao redor do ID da categoria", () => {
    const product = new Product(` ${categoryId} `, "Pizza", 10);

    expect(product.getCategoryId()).toBe(categoryId);
  });

  it.each(["", "   "])("rejeita categoria vazia (%j)", (invalidCategoryId) => {
    expect(() => new Product(invalidCategoryId, "Pizza", 10)).toThrow(
      "A categoria do produto é obrigatória.",
    );
  });

  it("rejeita um ID de categoria que não seja UUID válido", () => {
    expect(() => new Product("not-a-uuid", "Pizza", 10)).toThrow(
      "O identificador da categoria deve ser um UUID válido.",
    );
  });

  it("rejeita título vazio ou composto apenas por espaços", () => {
    expect(() => new Product(categoryId, "", 10)).toThrow(
      "O título do produto é obrigatório.",
    );
    expect(() => new Product(categoryId, "   ", 10)).toThrow(
      "O título do produto é obrigatório.",
    );
  });

  it.each([-1, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejeita preço inválido (%s)",
    (price) => {
      expect(() => new Product(categoryId, "Pizza", price)).toThrow(
        "O preço do produto deve ser um número maior ou igual a zero.",
      );
    },
  );

  it("permite preço igual a zero", () => {
    const product = new Product(categoryId, "Pizza", 0);

    expect(product.getPrice()).toBe(0);
  });

  it("altera os dados do produto", () => {
    const product = new Product(categoryId, "Pizza", 65);
    const newCategoryId = "c682e8a9-9b18-4c7f-8b2f-ef22b3a0413e";

    product.changeCategory(newCategoryId);
    product.rename("Calzone");
    product.changePrice(42.5);
    product.changeDescription("Recheado com queijo");
    product.changeImage("calzone.jpg");

    expect(product.getCategoryId()).toBe(newCategoryId);
    expect(product.getTitle()).toBe("Calzone");
    expect(product.getPrice()).toBe(42.5);
    expect(product.getDescription()).toBe("Recheado com queijo");
    expect(product.getImage()).toBe("calzone.jpg");
  });

  it("preserva os valores existentes após uma alteração inválida", () => {
    const product = new Product(categoryId, "Pizza", 65);

    expect(() => product.changeCategory("invalid")).toThrow(
      "O identificador da categoria deve ser um UUID válido.",
    );
    expect(() => product.rename(" ")).toThrow(
      "O título do produto é obrigatório.",
    );
    expect(() => product.changePrice(-1)).toThrow(
      "O preço do produto deve ser um número maior ou igual a zero.",
    );

    expect(product.getCategoryId()).toBe(categoryId);
    expect(product.getTitle()).toBe("Pizza");
    expect(product.getPrice()).toBe(65);
  });

  it("alterna disponibilidade e status ativo", () => {
    const product = new Product(categoryId, "Pizza", 65);

    product.makeUnavailable();
    product.deactivate();
    expect(product.isAvailable()).toBe(false);
    expect(product.isActive()).toBe(false);

    product.makeAvailable();
    product.activate();
    expect(product.isAvailable()).toBe(true);
    expect(product.isActive()).toBe(true);
  });

  it("restaura um produto existente", () => {
    const productId = "67dc1e74-c55f-4f4f-8355-0d5f8569f4b9";
    const product = Product.restore(
      productId,
      categoryId,
      "Pizza",
      65,
      false,
      false,
      "Pizza tradicional",
      "pizza.jpg",
    );

    expect(product.getId()).toBe(productId);
    expect(product.getCategoryId()).toBe(categoryId);
    expect(product.getTitle()).toBe("Pizza");
    expect(product.getPrice()).toBe(65);
    expect(product.isAvailable()).toBe(false);
    expect(product.isActive()).toBe(false);
    expect(product.getDescription()).toBe("Pizza tradicional");
    expect(product.getImage()).toBe("pizza.jpg");
  });
});