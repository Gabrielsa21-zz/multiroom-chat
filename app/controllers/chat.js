module.exports.iniciaChat = function(app, req, res) {

    var dadosForm =  req.body;

    req.assert('apelido', 'Nome ou apelido obrigatorio').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15)

    var erros = req.validationErrors()

    if(erros){
        res.render('index', { validacao: erros })
    }

    app.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'},
    )
    res.render('chat', {dadosForm: dadosForm})  
}