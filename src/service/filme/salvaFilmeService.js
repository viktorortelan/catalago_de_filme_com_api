import { salvaFilme } from "../../repository/filmeRepository.js";
import { validarNovoFilme } from "../../validation/filme/filmeValidation.js";

export default async function salvaFilmeService(filmeObj){
    validarNovoFilme(filmeObj);

    let id = await salvaFilme(filmeObj);

    return id;
}