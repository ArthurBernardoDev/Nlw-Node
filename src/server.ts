import express, { request, response } from 'express'

const app = express();
/**
 * GET          => Buscar uma informação
 * POST         => Inserir(Criar) uma informação
 * PUT          => Alterar uma informação
 * DELETE       => Remover um dado
 * PATH         => Alterar uma informação especifica
 */

app.get("/test", (request, response) => {
    //requrest => Entrando
    // Response => saindo

    return response.send("Olá Nlw")
})

app.post("/test-post", (request, response) => {
    return response.send("Ola metodo post")
})

app.listen(3333, () => console.log("Server is running"));