const connection = require('../databases/connection');
const generateUniqueId = require('../utils/generateUniqueId');
const cryptoPassword = require('../utils/cryptoPassword');

module.exports ={
    async create(request,response){
        const { name, email, number, passwordClient, cpf } = request.body;

        const id = generateUniqueId();
        const password = cryptoPassword(passwordClient);
        const id_cliente = id;

        await connection('cliente').insert({
            id,
            name,
            email,
            cpf,
            password,
        });
        await connection('telefone').insert({
            id_cliente,
            number
        });
        return response.json('Cadastrado com sucesso');
    },
    async login(request,response){
        const { emailLogin, passwordLogin } = request.body;

        const password = cryptoPassword(passwordLogin);

        if(await connection('cliente').where('email',emailLogin) != ''){
            if(await connection('cliente').where('password',password) != ''){
                return response.json('Logado com sucesso');
            }else{
                return response.json('Senha incorreta');
            }
        }else{
            return response.json('Email Inexistente');
        }

    }
}