import { horaAtual } from "./datetime.js";

global.criarErro = function criarErro(error){
    let obj = {
        erro: error.message
    }

    return obj;
}

global.logErro = function logError(error){
    console.log(horaAtual() + 'o erro é ' + error.message);
}