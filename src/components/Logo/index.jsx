import logo from '../../assets/img/logo.svg';
import './style.js';
import { ContainerImg, LogoContainer,Text } from './style.js';


function Logo(){
	
	return(
		<LogoContainer>
			<ContainerImg
					src={logo}
					className='logo-img'
					alt='Logo'
			/>
			<Text>AluraBooks</Text>
		</LogoContainer>
	)
}
export{Logo}