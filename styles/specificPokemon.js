import styled from 'styled-components'

export const Container = styled.div`

    background:black;
    min-height:100vh;
    `
export const ImageContainer = styled.section`
    text-align:center;
    padding:30px;
    height: 30%;
    box-sizing:border-box;
`
export const Image = styled.img`
    width: 100%;
    max-width:300px;
    height:250px;

`
export const Information = styled.main`
    width: 90%;
    margin: 0 auto;
    padding:10px;
    background:green;
`
export const BaseInfo = styled.section`
    display:flex;
    flex-direction:column;
`
export const PokemonName = styled.h1`
    font-size:1.4rem;
`
export const Types = styled.span`
    width:fit-content;
    padding:6px;
    border: 10px;
    color:white;
    background:black;
`
export const Moves = styled.span`
    font-size:1rem;
    color: #c0bbbb;
`
export const OthersInfos = styled.section`
    display:flex;
    justify-content:space-between;
    color:white;
    align-items:center;
`
export const InfoData = styled.h2`
    font-size:1rem;
`
