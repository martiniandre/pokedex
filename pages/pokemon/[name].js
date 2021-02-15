import { Container, Content,PokemonName,Pokemon} from '../../styles/pokemon'



export default function Home({pokemons}) {
  console.log(pokemons)
  return (
    <Container >
        <PokemonName>{pokemons.name}</PokemonName>
        <Content>
          <Pokemon href="/">
        <figure>
          <img src={pokemons.image} alt="" style={{width: "350px",height:"350px"}}/>
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