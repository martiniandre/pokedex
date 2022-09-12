import { getBackground, gradientBackground } from "../helpers/convertedTypes"
import {
  Container,
  Content,
  Background,
  Image,
  Pokemon,
  Number,
  PokemonName,
  Type,
} from "../styles/home"


export default function Home({ pokemons }) {
  return (
    <Container>
      <h1 style={{ textAlign: "center", color: "white" }}>Pokedex</h1>
      <Content>
        {pokemons?.map((pokemon) => {
          let gradient = gradientBackground(pokemon)
          return (
            <Pokemon href={`pokemon/${pokemon.name}`} alt="" key={pokemon.name}>
              <Background backColor={gradient}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                </div>
                <Number>#{pokemon.order}</Number>
                <PokemonName>{pokemon.name}</PokemonName>
                  {pokemon.types.map((types, index) => {
                    const typeName = types.type.name
                    return (
                      <Type
                        backColor={getBackground(pokemon, 1, index)}
                        key={pokemon.name + typeName}
                      >
                        {typeName}
                      </Type>
                    )
                  })}
              </Background>
            </Pokemon>
          )
        })}
      </Content>
    </Container>
  )
}
export async function getStaticProps() {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=898`)
  const {results} = await resp.json()
  const pokemons = await Promise.all(
   results.map(async (pokemon) => {
    const res = await fetch(pokemon.url)
    const data = await res.json()

    return {
      name: data.name,
      order: data.order,
      sprites: {
        front_default: data.sprites.front_default
      },
      types: data.types
    }
   })
  )

  return {
    props: {
      pokemons,
    }
  }
}
