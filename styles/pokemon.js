import styled from 'styled-components'
import Link from 'next/link'

const pokemonType = [
  {name:"normal",color:"#A8A878"},
  {name:"fire",color:"#F08030"},
  {name:"fighting",color:"#C03028"},
  {name:"water",color:"#6890F0"},
  {name:"flying",color:"#A890F0"},
  {name:"grass",color:"#78C850"},
  {name:"poison",color:"#A040A0"},
  {name:"eletric",color:"#F8D030"},
  {name:"ground",color:"#E0C068"},
  {name:"psychic",color:"#F85888"},
  {name:"rock",color:"#B8A038"},
  {name:"ice",color:"#98D8D8"},
  {name:"bug",color:"#A8B820"},
  {name:"dragon",color:"#7038F8"},
  {name:"ghost",color:"#705898"},
  {name:"dark",color:"#705848"},
  {name:"steel",color:"#B8B8D0"},
  {name:"fairy",color:"#EE99AC"},
  
]

export const Container = styled.div`
  min-height: 100vh;
  width:100%;
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
`
export const Content = styled.section`
  display:grid;
  grid-template-columns: repeat(4,minmax(200px, 1fr));
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  text-align:center;
  @media(max-width:768px){
    grid-template-columns: repeat(3 ,minmax(100px,1fr));
  }
  @media(max-width:425px){
    grid-template-columns: repeat(2 ,minmax(100px,1fr));
  }
`
export const Pokemon = styled(Link)`
  margin: 5px 10px;
  border-radius: 4px;
  background: pink;
  padding: 8px 16px;
  text-align: center;


  @media(max-width:425px){
    padding:4px 8px;
    margin:2px;
  }
`
export const Figure = styled.figure`
  width: 100px;
  height:100px;
  text-align: center;
  @media(max-width: 425px){
    height:50px;
    width:50px;
    text-align:center;
  }
`
export const Image = styled.img`
 width: 100px;
  height:100px;
  text-align: center;
  @media(max-width: 425px){
    height:50px;
    width:50px;
    text-align:center;
  }
`

export const PokemonName = styled.span`
  font-size: 1.1rem;
`
export const Type = styled.span`
  font-size: 1rem;

  &:nth-child(n+2){
    margin-left:10px;
  }
`

 