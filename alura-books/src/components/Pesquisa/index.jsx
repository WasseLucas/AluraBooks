/* eslint-disable react/jsx-key */

import { useState } from "react";
import { Input } from "../Input";
import { Container,Titulo,SubTitulo, ResultadoPesquisa } from './style';
import { livros } from "./components/Data";

function Pesquisa (){

	const [livrosPesquisado, setLivrosPesquisado] = useState([])
	console.log(livrosPesquisado)
	return(
		<Container>
			<Titulo>Já sabe por onde começar</Titulo>
			<SubTitulo>Encontre o livro em nossa instante.</SubTitulo>
			<Input
				type="text"
				placeholder="Escreva sua próxima leitura"
				onBlur={evento => {
					const textoDigitado = evento.target.value
					const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
					setLivrosPesquisado(resultadoPesquisa)
				}}
			/>
			{livrosPesquisado.map(livro => (
				<ResultadoPesquisa>
					<p>{livro.nome}</p>
					<img src={livro.src} alt="Livros" />
				</ResultadoPesquisa>
			))}
		</Container>
	)
}
export{ Pesquisa }