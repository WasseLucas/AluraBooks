const { getTodosLivros, getLivroPorID,insereLivro, modificarLivro, deletaLivroPorID } = require("../service/livro")

function getLivros(request, response){
	try{
		const livros = getTodosLivros()
		response.send(livros)
	}catch(error){
		response.status(500)
		response.send(error.message)
	}
}

function getLivro(req, res) {
	try {
			const id = req.params.id
		
			if(id && Number(id)) {
				const livro = getLivroPorID(id)
				res.send("livro buscado com sucesso")
			} else {
				res.status(422)
				res.send("ID inválido")
			}

	} catch (error) {
			res.status(500)
			res.send(error.message)
	}
}

function postLivro(req, res){
	try{
		const livroNovo = req.body
		if(req.body.nome){
			insereLivro(livroNovo)
			res.status(201)
			res.send('Livro criado com sucesso')
		} else{
			res.status(422)
			res.send('O campo nome é obrigatório')
		}

	}catch(error){
		res.status(500)
		res.send(error.message)
	}
}

function patchLivro(req,res){
	try{
		const id = req.params.id
		
		if(id && Number(id)) {
			const body = req.body
			modificarLivro(body,id)
			res.send("livro atualizado com sucesso")
		}else {
			res.status(422)
			res.send("ID inválido")
		}

	}catch(error){
		res.status(500)
		res.send(error.message)
	}
}

function deletarLivro(req, res){
		try{
			const id = req.params.id

			if(id && Number(id)) {
				deletaLivroPorID(id)
				res.send("livro deletado com sucesso")
			}else {
				res.status(422)
				res.send("ID inválido")
			}

		}catch(error){
			res.status(500)
			res.send(error.message)
		}	
}

module.exports= {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deletarLivro
}