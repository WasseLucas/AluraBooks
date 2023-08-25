const { json } = require("express")
const fs = require("fs")

function getTodosLivros(){
	return JSON.parse(fs.readFileSync("./data/livros.json"))
}

function getLivroPorID(id){
	const livros = JSON.parse(fs.readFileSync("./data/livros.json"))
	const livroFiltrado  = livros.filter(livro => livro.id === id)[0]
	return livroFiltrado
}

function insereLivro(livroNovo){
	const livros  = JSON.parse(fs.readFileSync("./data/livros.json"))

	const novaListaDeLivros = [...livros,livroNovo]

	fs.writeFileSync("./data/livros.json",JSON.stringify(novaListaDeLivros))
}

function modificarLivro(modificacoes, id){
	let livrosAtuais = JSON.parse(fs.readFileSync("./data/livros.json"))
	const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
	const conteudoEditado  = { ...livrosAtuais[indiceModificado],...modificacoes}

	livrosAtuais[indiceModificado] = conteudoEditado

	fs.writeFileSync("./data/livros.json",JSON.stringify(livrosAtuais))
}

function deletaLivroPorID(id){
	//TODO: Implementar a exclusão de um livro pelo ID
	const livros = JSON.parse(fs.readFileSync("./data/livros.json"))

	const livrosFiltrados = livros.filter(livro => livro.id !== id)
	
	fs.writeFileSync("./data/livros.json", JSON.stringify(livrosFiltrados))

}

module.exports ={
	getTodosLivros,
	getLivroPorID,
	insereLivro, 
	modificarLivro,
	deletaLivroPorID
}