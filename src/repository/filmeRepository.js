import con from "./connection.js";


//função para salva adicionar filmes ao banco de dados.
export async function salvaFilme(filme){
    let comando = `
    insert into tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
			values(?, ?, ?, ?, ?) 
    `

    let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])
    let info = resposta[0];

    let idFilme = info.insertId;
   return idFilme;
}



//função para buscar por meio do nome do filme.
export async function consultarFilmes(nome) {
    let comando = `
        select id_filme        id,
                nm_filme       nome,
                ds_sinopse     sinopse,   
                vl_avaliacao   avaliacao,
                dt_lancamento  lancamento,
                bt_disponivel  disponivel
        from tb_filme 
        where nm_filme like ? 
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);

    let linhas = resposta[0];

    return linhas;
}

export async function consultarFilmesPorNome(nome) {
    let comando = `
        select id_filme        id,
                nm_filme       nome,
                ds_sinopse     sinopse,   
                vl_avaliacao   avaliacao,
                dt_lancamento  lancamento,
                bt_disponivel  disponivel
        from tb_filme 
        where nm_filme = ? 
    `

    let resposta = await con.query(comando, [nome]);

    let linhas = resposta[0];

    return linhas;
}


export async function consultarFilmesPorId(id) {
    let comando = `
        select id_filme        id,
                nm_filme       nome,
                ds_sinopse     sinopse,   
                vl_avaliacao   avaliacao,
                dt_lancamento  lancamento,
                bt_disponivel  disponivel,
                img_filme      img
        from tb_filme 
        where id_filme = ? 
    `

    let resposta = await con.query(comando, [id]);

    let linhas = resposta[0];

    return linhas;
}

export async function alterarFilme(filme, id) {
    let comando = `
        update tb_filme
           set nm_filme = ?,
           ds_sinopse = ?,
           vl_avaliacao = ?,
           dt_lancamento = ?,
           bt_disponivel = ?
        where id_filme = ?;      
    `
    let resposta = await con.query(comando, [filme.nome,
         filme.sinopse,
          filme.avaliacao, 
          filme.lancamento, 
          filme.disponivel, 
          id]);

    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}