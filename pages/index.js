import LazyLoad from "react-lazyload";
import { getBackground, gradientBackground } from "../helpers/convertedTypes";
import {
  Container,
  Content,
  Background,
  Image,
  Pokemon,
  Number,
  PokemonName,
  Type,
} from "../styles/home";

export default function Home({ pokemons }) {

  return (
    <Container>
      <h1 style={{ textAlign: "center", color: "white" }}>Pokedex</h1>
      <Content>
        {pokemons.map((poke) => {
          let gradient = gradientBackground(poke);
          return (
            <LazyLoad height={200} key={poke.data.name}>

              <Pokemon href={`pokemon/${poke.data.name}`} alt="" key={poke.name}>
                <Background backColor={gradient}>
                  <div style={{ textAlign: "center" }}>
                    <Image src={poke.image} alt={poke.name} />
                  </div>
                  <Number>#{poke.data.id}</Number>
                  <PokemonName>{poke.name}</PokemonName>
                  <div>
                    {poke.data.types.map((types, index) => {
                      const typeName = types.type.name;
                      return <Type backColor={getBackground(poke, 1, index)} key={poke.name + typeName}>{typeName}</Type>;
                    })}
                  </div>
                </Background>
              </Pokemon>
            </LazyLoad>
          );
        })}
      </Content>
    </Container>
  );
}
export async function getStaticProps() {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
  const data = await resp.json();
  const pokemons = await Promise.all(
    data.results.map(async (poke, index) => {
      const res = await fetch(poke.url);
      const data = await res.json();
      const image = `https://pokeres.bastionbot.org/images/pokemon/${index + 1
        }.png`;
      const firstLetterUpperCase =
        poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
      return {
        ...poke,
        name: firstLetterUpperCase,
        image,
        data,
      };
    })
  );
  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
}
