import salvaFilmeService from "../service/filme/salvaFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultaFilmePorid.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";


import { Router } from "express";
const endpoints = Router();

endpoints.post('/filme', async (req, resp) =>{
    try {
        let filmeObj = req.body;
    
        let id = await salvaFilmeService(filmeObj);
    
        resp.send({
            id: id
        })
    } 

    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})


//endpoint para consultar um filme com base no nome dele
endpoints.get('/filme', async (req, resp) => {
    try {
        //leitura do nome
        let nome = req.query.nome;

        //processamento que esta na service
        let linhas = await consultarFilmesService(nome);

        //saida 
        resp.send(linhas);
    }

     catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error));
    }

})

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let filme = await consultarFilmePorIdService(id);
        resp.send(filme)
    } 
    
    catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error));
    }
})


endpoints.put('/filme/:id', async (req, resp) => {

    try {
        let filmeObj = req.body;
        let id = req.params.id;
    
    
        //processamento
       await alterarFilmeService(filmeObj, id);
    
       resp.status(204).send();
    } 
    
    catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error));
    }
   
})

export default endpoints;


