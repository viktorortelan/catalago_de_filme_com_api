import './utils/global.js'

import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';


import adicionarRotas from './rotas.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//configurando rota.
adicionarRotas(servidor)

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`API subida com sucesso na porta ${PORTA}`))