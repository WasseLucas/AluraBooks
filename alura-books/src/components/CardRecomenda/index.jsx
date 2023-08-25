/* eslint-disable react/prop-types */

import { Titulo } from "../TItulo"
import { Botao, Card, Descricao, Subtitulo } from "./style"

function CardRecomenda({titulo, subtitulo, descricao, img}){

	return(
		<Card>
				<div>
					<Titulo tamanhoFonte={'16px'} cor={'#EB9000'} alinhamento={'left'} >{titulo}</Titulo>
					<Subtitulo>{subtitulo}</Subtitulo>
					<Descricao>{descricao}</Descricao>
				</div>
				<div>
					<img src={img}/>
					<Botao>Saiba Mais</Botao>
				</div>
		</Card>
	)
}
export { CardRecomenda }