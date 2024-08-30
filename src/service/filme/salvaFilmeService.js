import { salvaFilme, consultarFilmesPorNome } from "../../repository/filmeRepository.js";
import { validarNovoFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";

export default async function salvaFilmeService(filmeObj){
    validarNovoFilme(filmeObj);

    //buscar filmes com o mesmo nome.
    let registros = await consultarFilmesPorNome(filmeObj.nome)

    //validar filmes com o mesmo nome.
    validarFilmeIgual(registros)


    let id = await salvaFilme(filmeObj);

    return id;
}