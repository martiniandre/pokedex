import styled from "styled-components";
import Link from "next/link";




export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.section`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;
export const Pokemon = styled(Link)`
  margin: 8px 10px;
  border-radius: 4px;
  background: white;
  padding: 8px 16px;
  text-align: center;
  max-width: 350px;

  @media (max-width: 425px) {
    padding: 4px 8px;
    margin: 2px;
  }
`;
export const Background = styled.section`
  background: ${props => props.color ? props.color : "pink"};
  margin: 10px;
  padding: 6px 3px;
  position: relative;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;

`;
export const Number = styled.span`
  font-size: 0.7rem;
  color: white;
  position: absolute;
  right: -10px;
  top: -10px;
  background: red;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 425px) {
    height: 50px;
    width: 50px;
  }
`;

export const PokemonName = styled.span`
  font-size: 1.1rem;
  margin-bottom:10px;
  font-weight:bold;
  color: white;
`;
export const Type = styled.span`
  font-size: 1rem;
  padding:0 10px;
  color: white;
  font-weight:bold;
  background:${({ color }) => color ? color : "none"};
  border-radius:4px;
  
  &::first-letter {
    text-transform: capitalize;
  }
  &:nth-child(n + 2) {
    margin-left: 10px;
  }
`;
