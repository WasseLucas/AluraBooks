const express = require("express")
//importando Rotas
const rotalivro = require("./routes/livros")

const app = express()
app.use(express.json())
//Ultlizando Rotas
app.use("/livros", rotalivro)

const port = 8001

app.listen(port,()=>{
	console.log(`Rodando ${port}`)
})