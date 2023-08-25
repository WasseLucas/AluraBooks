import { styled } from "styled-components";

export const Container = styled.section`
	background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;

`;

export const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
	font-family:sans-serif;
  width: 100%;
`;

export const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const ResultadoPesquisa = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;
