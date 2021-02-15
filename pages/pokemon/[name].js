import { Container, Content,PokemonName,Pokemon} from '../../styles/pokemon'
import Image from 'next/image'



export default function Home({pokemons}) {
  return (
    <Container >
        <PokemonName>{pokemons.name}</PokemonName>
        <Content>
          <Pokemon href="/">
        <figure>
          <Image src={pokemon.image} 
          alt={pokemon.name} 
          width={350}
          height={350}
          />
        </figure>
            </Pokemon>
        </Content>
  </Container>
  )
}
export async function getStaticPaths() {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
    const data = await resp.json()   
    const totalPaths = data.results.map(pokemon => {
        return { params: { name: pokemon.name } }
    })


    return {
      paths: totalPaths,
      fallback: false // See the "fallback" section below
    };
  }



export async function getStaticProps({params}) {
    const { name } = params
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await resp.json()   
    const image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
    const firstLetterUpperCase = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1) 
    const pokemons = {
        data,
        image,
        name: firstLetterUpperCase,

    }
    return {
        props: {
            pokemons
        }, // will be passed to the page component as props
    }}