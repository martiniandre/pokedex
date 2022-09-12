import styled from "styled-components"
import Link from "next/link"

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding:10px;
  display: flex;
  flex-direction: column;
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  text-align: center;
`
export const Pokemon = styled(Link)`
  padding: 8px 16px;
  text-align: center;
  background: white;
`
export const Background = styled.section`
  background: ${({ backColor }) =>
    backColor.length > 1
      ? `linear-gradient(${backColor[0]} 20%,${backColor[1]} 60%)`
      : `linear-gradient(${backColor[0]} 40%,#555 99%)`};
  border: ${({ backColor }) =>
    backColor.length > 1
      ? `3px solid ${backColor[1]}`
      : `3px solid ${backColor[0]}`};
  border-radius: 10px;
  margin: 10px;
  position: relative;
  min-height: 180px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
export const Number = styled.span`
  font-size: 0.6rem;
  color: white;
  position: absolute;
  right: -10px;
  top: -10px;
  background:#D7263D;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const PokemonName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  display:block;
  margin-bottom:10px;
  color: white;

  &::first-letter{
    text-transform: capitalize
  }
`
export const Type = styled.span`
  font-size: 0.85rem;
  padding: 3px 10px;
  color: white;
  font-weight: bold;
  background: ${({ backColor }) => (backColor ? backColor : "none")};
  box-shadow: 1px 1px 4px 1px #333;
  border-radius: 4px;

  &:nth-child(n + 2) {
    margin-left: 10px;
  }
`
