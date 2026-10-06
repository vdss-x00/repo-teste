# Sistema de Restaurante - APS

<p align="center">
<img alt="Static Badge" src="https://img.shields.io/badge/UniSenai_PR-1f396a?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Mi40NDU4IDY5LjAzNCIgaGVpZ2h0PSIxNCI%2BCiAgPGcgZmlsbD0iI2ZmZiIgZGF0YS1uYW1lPSJHcm91cCAxMTAxNSI%2BCiAgICA8cGF0aCBkPSJNLjY2OSA2OS4wMzRhLjY2OS42NjkgMCAxIDEgMC0xLjMzOGM5LjM2NSAwIDE1Ljg3Ni0yLjM0NyAxOS45MDUtNy4xNzUgMy4zNDktNC4wMTMgNC45NzgtOS44MDUgNC45NzgtMTcuNzA5di0uMTM1YzAtOC4yMyAxLjczLTE0LjMgNS4yODktMTguNTY2IDQuMy01LjE1MSAxMS4xNDctNy42NTUgMjAuOTMyLTcuNjU1YS42NjkuNjY5IDAgMSAxIDAgMS4zMzhjLTkuMzY0IDAtMTUuODc1IDIuMzQ2LTE5LjkwNSA3LjE3NC0zLjM0OSA0LjAxMy00Ljk3OCA5LjgwNi00Ljk3OCAxNy43MDl2LjEzNWMwIDguMjMtMS43MyAxNC4zLTUuMjg5IDE4LjU2NkMxNy4zIDY2LjUzIDEwLjQ1NSA2OS4wMzQuNjY5IDY5LjAzNCIgZGF0YS1uYW1lPSJQYXRoIDEiLz4KICAgIDxwYXRoIGQ9Ik0xOC4wNiA0My40ODNhLjY2OS42NjkgMCAwIDEtLjY2OS0uNjY5di0uMTM1YzAtMTAuMjIgMi4zNS0xOCA3LjE4NC0yMy44IDUuOTQ2LTcuMTIzIDE0Ljg0Mi0xMC41ODYgMjcuMi0xMC41ODZhLjY2OS42NjkgMCAxIDEgMCAxLjMzOGMtMTEuOTM0IDAtMjAuNDk0IDMuMzA2LTI2LjE3MSAxMC4xMDYtNC42MjcgNS41NDYtNi44NzUgMTMuMDQ2LTYuODc1IDIyLjk0di4xMzVhLjY2OS42NjkgMCAwIDEtLjY2OS42NjkiIGRhdGEtbmFtZT0iUGF0aCAyIi8%2BCiAgICA8cGF0aCBkPSJNMTcuOTAzIDU4Ljk2MWEuNjY5LjY2OSAwIDAgMS0uNTEzLTEuMWMyLjctMy4yMzYgNC4wMTQtOC4xNTkgNC4wMTQtMTUuMDUxdi0uMTM1YzAtOS4yNDIgMi4wNDUtMTYuMTg0IDYuMjUyLTIxLjIyNCA1LjEzNy02LjE1NCAxMy4wMjUtOS4xNDUgMjQuMTE2LTkuMTQ1YS42NjkuNjY5IDAgMSAxIDAgMS4zMzhjLTEwLjY3IDAtMTguMjIzIDIuODM0LTIzLjA4OSA4LjY2NC00IDQuNzktNS45NDEgMTEuNDUyLTUuOTQxIDIwLjM2N3YuMTM1YzAgNy4yMTgtMS40MTUgMTIuNDIyLTQuMzI2IDE1LjkwOGEuNjY2LjY2NiAwIDAgMS0uNTE0LjI0MSIgZGF0YS1uYW1lPSJQYXRoIDMiLz4KICAgIDxwYXRoIGQ9Ik0xNS42ODUgMjkuMjk5YS42NjkuNjY5IDAgMCAxLS42NDMtLjg1MyAzMi42NjkgMzIuNjY5IDAgMCAxIDYuMzUtMTIuMjIxQzI4LjE3NSA4LjA5OSAzOC4xMTMgNC4xNDkgNTEuNzc0IDQuMTQ5YS42NjkuNjY5IDAgMSAxIDAgMS4zMzhjLTEzLjI0IDAtMjIuODQyIDMuNzkzLTI5LjM1NSAxMS42YTMxLjM2OSAzMS4zNjkgMCAwIDAtNi4wOSAxMS43MzMuNjcuNjcgMCAwIDEtLjY0My40ODUiIGRhdGEtbmFtZT0iUGF0aCA0Ii8%2BCiAgICA8cGF0aCBkPSJNMTguNzIgMTQuNjY0YS42NjkuNjY5IDAgMCAxLS41MTMtMS4xQzI1LjgzIDQuNDM4IDM2LjgwNiAwIDUxLjc3MyAwYS42NjkuNjY5IDAgMCAxIDAgMS4zMzhjLTE0LjU0MyAwLTI1LjE4OSA0LjI4LTMyLjU0MyAxMy4wODVhLjY2Ni42NjYgMCAwIDEtLjUxNC4yNDEiIGRhdGEtbmFtZT0iUGF0aCA1Ii8%2BCiAgPC9nPgo8L3N2Zz4K">
</p>

## Índice
 - [Nome do Aluno](#nome-do-aluno)
 - [Contexto](#contexto)
 - [Tecnologias Utilizadas](#tecnologias-utilizadas)
 - [Entidades e Relacionamentos](#entidades-e-relacionamentos)
 - [Estrutura do Projeto](#estrutura-do-projeto)
 - [Configuração e Execução](#configuração-e-execução)
 - [Variáveis de Ambiente](#variáveis-de-ambiente)
 - [Tabelas do Banco de Dados](#tabelas-do-banco-de-dados)
 - [Endpoints](#endpoints)
 - [Exemplos de Requisições](#exemplos-de-requisições)


## Nome do Aluno
- [Vitor de Souza Santos](https://github.com/vdss-x00)

## Contexto

Essa APS consiste na entrega de uma API RESTful de sistema de restaurantes desenvolvida em aula pelos alunos.

Com essa APS, os alunos aprenderam mais sobre operações CRUD, estrutura de APIs RESTful, métodos HTTP e endpoints, variáveis de ambiente, banco de dados, e ente outros.

[Voltar ao Índice](#índice)

## Tecnologias Usadas 

- Node.js
- TypeScript
- Supabase
- Express.js
- Postman
- Git


[Voltar ao Índice](#índice)
## Entidades e Relacionamentos

Há duas entidades principais envolvidas na API:

- `Categoria`: Entidade que representa as categorias de produtos disponíveis na plataforma;
- `Produto`: Entidade que representa o produto registrado na plataforma;

Uma categoria pode ter vários produtos, mas um produto pertence a apenas uma categoria. (1:N)

[Voltar ao Índice](#índice)
## Estrutura do Projeto

```text
src/
├── config/
├── controllers/
├── models/
├── repositories/
├── routers/
├── app.ts
└── server.ts
supabase/
├── schema.sql
```


[Voltar ao Índice](#índice)
## Configuração e Execução
>Pré-requisito: Ter um projeto ativo no Supabase

Antes de rodar `git clone`, vá ao editor SQL do seu projeto e copie e cole o código presente no arquivo `schema.sql`, clique em salvar e depois em `run`, para executar o código e criar as tabelas necessárias.

Após isso, agora sim clone o repositório:
```bash
git clone https://github.com/vdss-x00/repo-teste.git
```
Depois rode:
```bash
cd repo-teste
```
```bash
code .
```

Agora, estando com o projeto aberto, crie o arquivo .env que será usado para a API. Substitua os valores da chave pública e da chave anônima pelos valores reais do seu projeto.


Por último, rode os seguintes comandos para instalar as dependências necessárias do Node e para iniciar o servidor:
```bash
npm install
```
```bash
npm run dev
```


[Voltar ao Índice](#índice)
## Variáveis de Ambiente

A única variável de ambiente necessária é o arquivo .env, que será criado após seguir os passos do item anterior.

[Voltar ao Índice](#índice)
## Tabelas do Banco de Dados

Há duas tabelas usadas no projeto:

### categories

| Coluna | Descrição |
| ------ | --------- |
| id | Chave primária do tipo `uuid`, gerada automaticamente pela função `gen_random_uuid()`. |
| name | Nome da categoria, com até 100 caracteres. |
| description | Descrição da categoria, com até 255 caracteres. |
| icon | Atributo `VARCHAR` de até 10 caracteres que representa o ícone da categoria. |
| display_order | Número inteiro que define a ordem de exibição da categoria. |
| active | Atributo booleano que indica se a categoria está ativa ou não. Possui valor padrão `true`. |
| created_at | Atributo `timestamp with time zone` gerado automaticamente com o horário atual. |
| updated_at | Atributo `timestamp with time zone` gerado automaticamente com o horário atual. |



### products

| Coluna | Descrição |
| ------ | --------- |
| id | Chave primária do tipo `uuid`, gerada automaticamente pela função `gen_random_uuid()`. |
| category_id | Chave estrangeira da tabela `categories`, associando o produto à sua categoria. |
| title | Nome do produto, com até 150 caracteres. |
| description | Descrição do produto, com até 500 caracteres. |
| price | Valor numérico do produto, com até 10 dígitos e 2 casas decimais. |
| image | Atributo `VARCHAR` de até 255 caracteres que representa a imagem do produto. |
| available | Atributo booleano que indica se o produto está disponível ou não. Possui valor padrão `true`. |
| active | Atributo booleano que indica se o produto está ativo ou não. Possui valor padrão `true`. |
| created_at | Atributo `timestamp with time zone` gerado automaticamente com o horário atual. |
| updated_at | Atributo `timestamp with time zone` gerado automaticamente com o horário atual. |





[Voltar ao Índice](#índice)
## Endpoints

| Método |  Rota  | Descrição |
| :------ | :------: | :--------- |
|  `GET` |   `/categories`  | Lista todas as categorias registradas |
|  `GET` | `/categories/:id`| Lista uma categoria específica pelo seu id|
|  `GET` | `/categories/search/:keyword`| Lista uma categoria específica por uma palavra-chave|
| `POST` |`/categories`     | Registra uma categoria nova |
| `PUT`  | `/categories/:id`| Atualiza uma categoria registrada (selecionada pelo id) |
| `DELETE`| `/categories/:id`| Remove uma categoria (selecionada pelo id) |
|  `GET` |   `/products`  | Lista todas os produtos registrados |
|  `GET` | `/products/:id`| Lista um produto específico pelo seu id|
| `POST` |`/products`     | Registra um produtos novo |
| `PUT`  | `/products/:id`| Atualiza um produto registrado (selecionado pelo id) |
| `DELETE`| `/products/:id`| Remove uma categoria (selecionada pelo id) |

[Voltar ao Índice](#índice)
## Exemplos de Requisições

Antes de começar, é necessário lembrar que as duas tabelas estão vazias. Por isso, abra o Postman e efetue uma operação POST no endpoint `/categories`.

>Importante lembrar que a API só aceita um objeto JSON por vez, e não um array.
Exemplo:
```text
{
    "name": "Pizzas",
    "description": "Pizzas tradicionais e especiais",
    "display_order": 1
}
``` 

Deve resultar em algo assim:
```text
{
    "id": "d27b77c2-f7e2-4bfd-a17d-21f185f1c621",
    "name": "Pizzas",
    "description": "Pizzas tradicionais e especiais",
    "icon": null,
    "display_order": 1,
    "active": true,
    "created_at": "2026-10-06T23:42:26.439015+00:00",
    "updated_at": "2026-10-06T23:42:26.439015+00:00"
}
```
>Os campos que não foram incluídos no input são gerados automaticamente pelo Supabase.

Após criar sua primeira categoria, crie um produto com POST no endpoint `/products`, lembrando-se de copiar a id gerada no último exemplo:
```text
{
    "category_id": "d27b77c2-f7e2-4bfd-a17d-21f185f1c621",
    "title": "Pizza margherita",
    "description": "Pizza com queijo muçarela, molho de tomate e manjericão.",
    "price": 65.00,
    "available": true,
    "active": true
}
```

Resultado:
```text
{
    "id": "f3762275-64af-4a6a-895f-68ff46b21c9f",
    "category_id": "d27b77c2-f7e2-4bfd-a17d-21f185f1c621",
    "title": "Pizza margherita",
    "description": "Pizza com queijo muçarela, molho de tomate e manjericão.",
    "price": 65,
    "image": null,
    "available": true,
    "active": true,
    "created_at": "2026-10-06T23:47:26.31843+00:00",
    "updated_at": "2026-10-06T23:47:26.31843+00:00"
}
```
Agora, para mudar um ou mais atributos, efetue uma operação PUT no endpoint `/products/:id`, trocando o ":id" pelo id gerado pelo Supabase:
>Essa API permite efetuar operações PUT da mesma maneira que uma operação PATCH, especificando apenas o atributo que deseja modificar.
```text
{
    "active": false
}
```

Resultado:
```text
{
    "id": "f3762275-64af-4a6a-895f-68ff46b21c9f",
    "category_id": "d27b77c2-f7e2-4bfd-a17d-21f185f1c621",
    "title": "Pizza margherita",
    "description": "Pizza com queijo muçarela, molho de tomate e manjericão.",
    "price": 65,
    "image": null,
    "available": true,
    "active": false,
    "created_at": "2026-10-06T23:47:26.31843+00:00",
    "updated_at": "2026-10-06T23:47:26.31843+00:00"
}
```

Para completar o ciclo de CRUD, efetue uma operação DELETE no endpoint `/products/:id` para remover a campanha que você registrou.


[Voltar ao Índice](#índice)
