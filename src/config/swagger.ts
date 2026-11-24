import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Restaurant Ordering System - API",
            version: "1.0.0",
            description: "API REST para gerenciamento de categorias e produtos de um sistema de pedidos de restaurante.",
        },
        servers: [
            {
                url: "/",
                description: "Servidor atual (local ou Vercel)",
            },
            {
                url: "http://localhost:3000",
                description: "Development server",
            },
        ],
        tags: [
            {
                name: "Categories",
                description: "Gerenciamento de categorias",
            },
            {
                name: "Products",
                description: "Gerenciamento de produtos",
            },
        ],
        components: {
            schemas: {
                Category: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            format: "uuid",
                            readonly: true,
                        },
                        name: {
                            type: "string",
                            example: "Pizzas",
                        },
                        description: {
                            type: "string",
                            example: "Pizzas tradicionais e especiais",
                        },
                        icon: {
                            type: "string",
                            example: "🍕",
                        },
                        display_order: {
                            type: "integer",
                            minimum: 0,
                            example: 1,
                        },
                        active: {
                            type: "boolean",
                            example: true,
                        },
                    },
                },
                CreateCategory: {
                    type: "object",
                    required: ["name", "display_order"],
                    properties: {
                        name: { type: "string", example: "Pizzas" },
                        display_order: { type: "integer", minimum: 0, example: 1 },
                        description: { type: "string", example: "Pizzas tradicionais e especiais" },
                        icon: { type: "string", example: "" },
                    },
                },
                UpdateCategory: {
                    type: "object",
                    properties: {
                        name: { type: "string", example: "Pizzas" },
                        display_order: { type: "integer", minimum: 0, example: 1 },
                        description: { type: "string", example: "Pizzas tradicionais e especiais" },
                        icon: { type: "string", example: "" },
                        active: { type: "boolean", example: true },
                    },
                },
                Product: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid", readonly: true },
                        category_id: { type: "string", format: "uuid" },
                        title: { type: "string", example: "Pizza Margherita" },
                        description: { type: "string", example: "Pizza com tomate e queijo" },
                        price: { type: "number", format: "float", example: 65 },
                        image: { type: "string", nullable: true, example: "" },
                        available: { type: "boolean", example: true },
                        active: { type: "boolean", example: true },
                    },
                },
                CreateProduct: {
                    type: "object",
                    required: ["category_id", "title", "price"],
                    properties: {
                        category_id: { type: "string", format: "uuid" },
                        title: { type: "string", example: "Pizza Margherita" },
                        description: { type: "string", example: "Pizza com tomate e queijo" },
                        price: { type: "number", format: "float", example: 65 },
                        image: { type: "string", example: "" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            example: "Erro ao processar solicitação."
                        },
                    },
                },
            }
        }
    },

    apis: [
        "./src/routers/*.ts",
        "./dist/routers/*.js",
    ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;