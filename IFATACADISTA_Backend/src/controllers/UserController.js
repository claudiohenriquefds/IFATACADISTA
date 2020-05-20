const connection = require('../databases/connection');
const generateUniqueId = require('../utils/generateUniqueId');
const cryptoPassword = require('../utils/cryptoPassword');

module.exports ={
    async create(request,response){
        const { NomeUsuario, number, passwordUser, cpf } = request.body;

        const idUsuario = generateUniqueId();
        const password = cryptoPassword(passwordUser);
        const id_usuario = idUsuario;

        await connection('usuario').insert({
            idUsuario,
            NomeUsuario,
            cpf,
            password,
        });

        await connection('telefone').insert({
            id_usuario,
            number,
        });
        
        return response.json('Usuário cadastrado com sucesso');
    },
    async login(request,response){
        const { cpfLogin, passwordLogin } = request.body;

        const password = cryptoPassword(passwordLogin);

        if(await connection('usuario').where('cpf',cpfLogin) != ''){
            if(await connection('usuario').where('password',password) != ''){
                id_usuario = await connection('usuario').select('idUsuario').where('password',password)
                usuario_name = await connection('usuario').select('NomeUsuario').where('password',password)
                return response.json({ result:'Logado com sucesso',id:id_usuario,usuario:usuario_name });
            }else{
                return response.json({result:'Senha incorreta'});
            }
        }else{
            return response.json({result:'Cpf Inexistente'});
        }
    }
}