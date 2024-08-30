


export function validarNovoFilme(filmeObj) {
    if(!filmeObj.nome)
        throw new Error('nome do filme é obrigatorio.');

    if(!filmeObj.sinopse)
        throw new Error('sinopse do filme é obrigatorio.');

    if(!filmeObj.avaliacao)
        throw new Error('avaliação do filme é obrigatorio.');

    if(!filmeObj.avaliacao)
        throw new Error('avaliação do filme é inválida.');

    if(!filmeObj.lancamento)
        throw new Error('lançamento do filme é obrigatorio.');

    if(!filmeObj.disponivel == undefined)
        throw new Error('disponivel do filme é obrigatorio.');
}


export function validarFilmeUnico(registros) {
    if(registros.length == 0) {
        throw new Error('filme não encontrado')
    }
}

export function validarFilmeIgual(registros) {
    if(registros.length > 0) {
        throw new Error('ja existe filme cadastrado com esse nome!!');
    }
}