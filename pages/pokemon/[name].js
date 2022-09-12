import { getBackground, gradientBackground } from "../../helpers/convertedTypes"
import {
  Container,
  Image,
  ImageContainer,
  Information,
  PokemonName,
  Moves,
  OthersInfos,
  Types,
  BaseInfo,
  InfoData,
  Flex,
} from "../../styles/specificPokemon"

export default function Pokemon({ pokemon }) {
  const gradient = gradientBackground(pokemon)
  return (
    <Container color={() => getBackground(pokemon, 0.7)}>
      <ImageContainer>
        <Image src={pokemon.sprites.front_default} alt={pokemon.image} />
      </ImageContainer>
      <Information backColor={gradient}>
        <BaseInfo>
          <Flex>
            <PokemonName>
              #{pokemon.order} {pokemon.name}
            </PokemonName>
            {pokemon.types.map((types, index) => {
              const typeName = types.type.name
              return (
                <Types
                  backColor={() => getBackground(pokemon, 1, index)}
                  key={pokemon.name + typeName}
                >
                  {typeName}
                </Types>
              )
            })}
          </Flex>
          <Flex>
            <Moves>Skiils: </Moves>
            {pokemon.abilities.map((abilities) => (
              <Moves key={abilities.ability.name}>
                {abilities.ability.name}
              </Moves>
            ))}
          </Flex>
        </BaseInfo>
        {pokemon.stats.map((stats) => (
          <OthersInfos key={stats.stat.name}>
            <InfoData>{stats.stat.name}</InfoData>
            <InfoData>{stats.base_stat}</InfoData>
          </OthersInfos>
        ))}
      </Information>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { name } = params
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await resp.json()

  const cleanData = {
    name: data.name,
    order: data.order,
    sprites: {
      front_default: data.sprites.front_default
    },
    types: data.types,
    abilities: data.abilities,
    stats: data.stats
  }

  return {
    props: {
      pokemon: cleanData,
    }
  }
}
