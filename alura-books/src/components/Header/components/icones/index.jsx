/* eslint-disable react/jsx-key */
import perfil from '../../../../assets/img/perfil.svg';
import sacola from '../../../../assets/img/sacola.svg';
import "./styled.js";
import { Container, Icone } from './styled.js';

const icones= [perfil,sacola];

function IconesHeader(){
	return(
		<Container>
			{icones.map( (icone) => (
				<Icone>
					<img 
						src={icone} 
						alt="icones"
					/>
				</Icone>
			))}
		</Container>
	)
}

export{IconesHeader}