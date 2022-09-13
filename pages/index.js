import { PokeCard } from "../components/PokeCard/PokeCard";
import { Container, Content } from "../styles/home";

export default function Home({ pokemons }) {
  return (
    <Container>
      <h1 style={{ textAlign: "center", color: "white" }}>Pokedex</h1>
      <Content>
        <PokeCard pokemons={pokemons} />
      </Content>
    </Container>
  );
}
export async function getStaticProps() {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=493`);
  const { results } = await resp.json();
  const pokemons = await Promise.all(
    results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return {
        name: data.name,
        order: data.order,
        sprites: {
          front_default: data.sprites.other.home.front_default,
        },
        types: data.types,
        abilities: data.abilities,
        stats: data.stats,
      };
    })
  );

  return {
    props: {
      pokemons,
    },
  };
}
