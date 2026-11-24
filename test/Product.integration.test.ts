import { randomUUID } from "node:crypto";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../src/app.js";
import supabase from "../src/config/supabase.js";

describe("Product - Testes de integração", () => {
  const createdProductIds: string[] = [];
  const categoryName = `Categoria de teste ${randomUUID()}`;
  let categoryId: string;

  async function createProduct() {
    const response = await request(app)
      .post("/products")
      .send({
        category_id: categoryId,
        title: `Produto de teste ${randomUUID()}`,
        description: "Produto criado pelo teste de integração",
        price: 19.9,
        image: "produto-teste.jpg",
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toEqual(expect.any(String));
    createdProductIds.push(response.body.id as string);

    return response;
  }

  beforeAll(async () => {
    const response = await request(app).post("/categories").send({
      name: categoryName,
      display_order: 0,
    });

    expect(response.status).toBe(201);
    expect(response.body.id).toEqual(expect.any(String));
    categoryId = response.body.id as string;
  }, 20_000);

  afterEach(async () => {
    if (createdProductIds.length === 0) {
      return;
    }

    const { error } = await supabase
      .from("products")
      .delete()
      .in("id", createdProductIds.splice(0));

    if (error) {
      throw new Error(`Falha ao limpar produtos do teste: ${error.message}`);
    }
  });

  afterAll(async () => {
    if (!categoryId) {
      return;
    }

    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id", categoryId);

    if (error) {
      throw new Error(`Falha ao limpar categoria do teste: ${error.message}`);
    }
  }, 20_000);

  it("cria um produto válido", async () => {
    const response = await createProduct();

    expect(response.body).toMatchObject({
      category_id: categoryId,
      description: "Produto criado pelo teste de integração",
      image: "produto-teste.jpg",
      price: 19.9,
      available: true,
      active: true,
    });
  }, 20_000);

  it("lista os produtos incluindo o produto criado", async () => {
    const created = await createProduct();
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: created.body.id,
          title: created.body.title,
        }),
      ]),
    );
  }, 20_000);

  it("consulta um produto existente pelo ID", async () => {
    const created = await createProduct();
    const response = await request(app).get(`/products/${created.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: created.body.id,
      category_id: categoryId,
      title: created.body.title,
      price: 19.9,
      available: true,
      active: true,
    });
  }, 20_000);

  it("retorna 404 ao consultar um produto inexistente", async () => {
    const response = await request(app).get(`/products/${randomUUID()}`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: "Produto não encontrado.",
    });
  }, 20_000);

  it("atualiza parcialmente um produto", async () => {
    const created = await createProduct();
    const response = await request(app)
      .put(`/products/${created.body.id}`)
      .send({
        price: 24.5,
        available: false,
        active: false,
      });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: created.body.id,
      title: created.body.title,
      price: 24.5,
      available: false,
      active: false,
    });
  }, 20_000);

  it("remove um produto existente", async () => {
    const created = await createProduct();
    const response = await request(app).delete(
      `/products/${created.body.id}`,
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Produto removido com sucesso.",
    });

    const lookup = await request(app).get(`/products/${created.body.id}`);
    expect(lookup.status).toBe(404);
  }, 20_000);

  it("rejeita dados inválidos ao criar um produto", async () => {
    const response = await request(app).post("/products").send({
      category_id: "not-a-uuid",
      title: "Produto inválido",
      price: 10,
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      message: "O identificador da categoria deve ser um UUID válido.",
    });
  });
});