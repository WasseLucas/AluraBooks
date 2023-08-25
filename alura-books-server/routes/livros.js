const { Router } = require("express")
const {getLivros, getLivro,postLivro, patchLivro, deletarLivro} = require("../controller/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro) //Rota get por ID;

router.post('/', postLivro) //Rota para adicionar um livro

router.patch('/:id', patchLivro) //Rota para atualizar livro

router.delete('/:id', deletarLivro)

module.exports = router