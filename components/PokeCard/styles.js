import styled, { keyframes } from "styled-components";

const BgAnimation = keyframes`  
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const FlipperContainer = styled.div`
  position: relative;
  display: inline-block;
  perspective: 1000px;
  min-height: 200px;
  max-width: 300px;
`;

export const Flipper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;

  &:hover,
  &:focus {
    transform: rotateY(180deg);
  }
`;

export const FlipperFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
export const FlipperBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const PokemonContainer = styled.section`
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  height:100%;
  background: ${({ backColor }) =>
    backColor.length > 1
      ? `linear-gradient(-90deg,${backColor[0]},${backColor[1]})`
      : `linear-gradient(-90deg,${backColor[0]},#333)`};
  background-size: 300% 300%;
	animation: ${BgAnimation} 15s ease-in-out infinite;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
}
`;

export const Number = styled.span`
  font-size: 0.6rem;
  color: white;
  position: absolute;
  right: -10px;
  top: -10px;
  background: #d7263d;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 10px;
`;

export const PokemonName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  display: block;
  margin-bottom: 30px;
  color: white;
  margin-right: 10px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
export const Type = styled.span`
  font-size: 1rem;
  padding: 3px 10px;
  color: #e1eff6;
  font-weight: bold;
  background: ${({ backColor }) => (backColor ? backColor : "none")};
  box-shadow: 2px 2px 2px 1px #111;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Card = styled.section`
  width:100%:
  height: 100%;
`;

export const Information = styled.section`
  height: 100%;
  padding: 10px 20px;
  border-radius: 10px;

  background: ${({ backColor }) =>
    backColor.length > 1
      ? `linear-gradient(-90deg,${backColor[0]},${backColor[1]})`
      : `linear-gradient(-90deg,${backColor[0]},#333)`};
  background-size: 300% 300%;
  animation: ${BgAnimation} 20s ease-in-out infinite;
`;
