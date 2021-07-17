import { getBackground } from "../../helpers/convertedTypes";
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
} from "../../styles/specificPokemon";

export default function Home({ pokemons }) {
  return (
    <Container color={() => getBackground(pokemons, 0.7)}>
      <ImageContainer>
        <Image src={pokemons.image} alt={pokemons.image} />
      </ImageContainer>
      <Information color={() => getBackground(pokemons, 0.7)}>
        <BaseInfo>
          <Flex>
            <PokemonName>
              #{pokemons.data.id} {pokemons.name}
            </PokemonName>
            {pokemons.data.types.map((types, index) => {
              const typeName = types.type.name;
              return (
                <Types
                  color={() => getBackground(pokemons, 1, index)}
                  key={pokemons.name + typeName}
                >
                  {typeName}
                </Types>
              );
            })}
          </Flex>
          <Flex>
            <Moves>Skiils: </Moves>
            {pokemons.data.abilities.map((abilities) => (
              <Moves key={abilities.ability.name}>
                {abilities.ability.name}
              </Moves>
            ))}
          </Flex>
        </BaseInfo>
        {pokemons.data.stats.map((stats) => (
          <OthersInfos key={stats.stat.name}>
            <InfoData>{stats.stat.name}</InfoData>
            <InfoData>{stats.base_stat}</InfoData>
          </OthersInfos>
        ))}
      </Information>
    </Container>
  );
}
export async function getStaticPaths() {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
  );
  const data = await resp.json();
  const totalPaths = data.results.map((pokemon) => {
    return { params: { name: pokemon.name } };
  });

  return {
    paths: totalPaths,
    fallback: "blocking", // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();
  const image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
  const firstLetterUpperCase =
    data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);
  const pokemons = {
    data,
    image,
    name: firstLetterUpperCase,
  };
  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
}
{
  /*  <h1>{pokemons.id}</h1>
     <h1>{pokemons.data.stats.map}</h1>
     <h1>{pokemons.data.base_experience}</h1>
     <h1>{pokemons.data.abilities.map}</h1>
     <h1>{pokemons.data.abilities.map}</h1> */
}
