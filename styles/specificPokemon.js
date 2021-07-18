import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
    max-width:1130px;
    margin:0 auto;
    min-height:100vh;
    padding:30px;
    position:relative;
    `;
export const ImageContainer = styled.section`
    text-align:center;
    padding:30px;
    height: 30%;
    box-sizing:border-box;
`;
export const Image = styled.img`
    width: 100%;
    max-width:300px;
    height:200px;

`;
export const Information = styled.main`
    width: 90%;
    margin: 0 auto;
    padding:10px;
    background: ${({ backColor }) => backColor.length > 1 ? (
        `linear-gradient(${backColor[0]} 20%,${backColor[1]} 90%)`
    ) : (`linear-gradient(${backColor[0]} 40%,#222 99%)`)};
    font-weight:bold;
    border-radius:15px;
    
`;
export const BaseInfo = styled.section`
    display:flex;
    flex-direction:column;
`;
export const PokemonName = styled.h1`
    font-size:1.4rem;
    margin-right:10px;
    color:white;
`;
export const Types = styled.span`
    height:fit-content;
    width:fit-content;
    color:white;
    font-weight:bold;
    background: ${props => props.backColor ? props.backColor : "pink"};
    border-radius:10px;
    padding:5px 10px;

    &:nth-child(n+2){
    margin-left:10px;
    }

    &:hover{
        opacity:0.8;
    }
`;
export const Moves = styled.span`
    font-size:1rem;
    color: white;
    margin-right:5px;
    border-bottom: 1px solid white;
    
`;
export const OthersInfos = styled.section`
    display:flex;
    justify-content:space-between;
    color:white;
    align-items:center;
`;
export const InfoData = styled.h2`
    font-size:1rem;
`;
export const Flex = styled.div`
    display:flex;
    align-items:center;
`;
export const BackButton = styled(Link)`
    position:absolute;
`;