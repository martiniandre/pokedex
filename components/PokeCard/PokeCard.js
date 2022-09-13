import {
  getBackground,
  gradientBackground,
} from "../../helpers/convertedTypes";
import { InfoCard } from "../InfoCard/InfoCard";
import {
  Image,
  Number,
  PokemonContainer,
  PokemonName,
  Type,
  Card,
  Information,
} from "./styles";

export const PokeCard = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map((pokemon) => {
        let gradient = gradientBackground(pokemon);
        return (
          <>
            <PokemonContainer backColor={gradient}>
              <div style={{ textAlign: "center" }}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <Number>#{pokemon.order}</Number>
              <PokemonName>{pokemon.name}</PokemonName>
              {pokemon.types.map((types, index) => {
                const typeName = types.type.name;
                return (
                  <Type
                    backColor={getBackground(pokemon, 1, index)}
                    key={pokemon.name + typeName}
                  >
                    {typeName}
                  </Type>
                );
              })}
            </PokemonContainer>
            <Information className="pokemon-info" backColor={gradient}>
              <InfoCard pokemon={pokemon} />
            </Information>
          </>
        );
      })}
    </>
  );
};
