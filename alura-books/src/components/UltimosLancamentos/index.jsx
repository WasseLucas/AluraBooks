/* eslint-disable */
import { CardRecomenda } from '../CardRecomenda'
import { Titulo } from '../TItulo'
import { livros } from './data/index'
import imgLivro from '../.../../../assets/img/livro2.png'
import { UltimosLancamentosContainer, NovosLivrosContainer} from './style'

function UltimosLancamentos(){
	return(
		<UltimosLancamentosContainer>
			<Titulo
			 	cor='#EB9B00'
				tamanhoFonte='36px'
			>
				Ultimos Lançamentos
			</Titulo>
			<NovosLivrosContainer>
							{livros.map( livro => (
				<img src={livro.src}/>
			))}
			</NovosLivrosContainer>
			<CardRecomenda
				titulo={'Talves você se interesse por'}
				subtitulo={'Angular 11'}
				descricao={'Construindo aplicação com a plataforma google'}
				img={imgLivro}
			/>
		</UltimosLancamentosContainer>
	)
}
export{ UltimosLancamentos }