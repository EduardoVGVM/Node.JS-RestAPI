import express from "express";
import LivroController from "../controller/LivroController.js";

const routes = express.Router();
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;