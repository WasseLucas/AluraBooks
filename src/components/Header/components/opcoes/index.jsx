import "./styled.js";
import { Container, Opcao } from "./styled.js";

const textoOpcoes = ['HOME','CATEGORIAS','FAVORITOS','MINHA ESTANTE'];

function OpcoesHeader(){
	return(
		<Container>
			{textoOpcoes.map( (texto) => (
				<Opcao key={texto.length}>{texto}</Opcao>
			))}
		</Container>
	)
}

export{OpcoesHeader}