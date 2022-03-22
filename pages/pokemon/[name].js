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
        <Image src={pokemon.data.sprites.front_default} alt={pokemon.image} />
      </ImageContainer>
      <Information backColor={gradient}>
        <BaseInfo>
          <Flex>
            <PokemonName>
              #{pokemon.data.id} {pokemon.name}
            </PokemonName>
            {pokemon.data.types.map((types, index) => {
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
            {pokemon.data.abilities.map((abilities) => (
              <Moves key={abilities.ability.name}>
                {abilities.ability.name}
              </Moves>
            ))}
          </Flex>
        </BaseInfo>
        {pokemon.data.stats.map((stats) => (
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
  const firstLetterUpperCase =
    data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)
  const pokemon = {
    data,
    name: firstLetterUpperCase,
  }
  return {
    props: {
      pokemon,
    }, // will be passed to the page component as props
  }
}
