/* eslint-disable react/jsx-key */
import { Logo } from "../Logo";
import "./style.js";

import { OpcoesHeader } from "./components/opcoes";
import { IconesHeader } from "./components/icones";
import { Container } from "./style.js";

function Header(){
	return(
		<Container>
			<Logo/>
			<OpcoesHeader/>
			<IconesHeader/>
		</Container>
	)
}
export{Header}