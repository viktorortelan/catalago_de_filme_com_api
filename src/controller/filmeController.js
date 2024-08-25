import salvaFilmeService from "../service/filme/salvaFilmeService.js";

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

export default endpoints;


