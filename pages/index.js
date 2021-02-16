import { Container, Content, Image, Pokemon,Number,PokemonName,Type } from '../styles/home'



export default function Home({pokemons}) {
  return (
    <Container>
    <h1 style={{textAlign:"center"}}>Pokedex</h1>
    <Content>
      {pokemons.map((poke) => {
        return(
          <Pokemon href={`pokemon/${poke.data.name}`} alt="" key={poke.name}>
        <section style={{background:"pink",margin:"5px 10px",padding:"6px 3px",position:"relative"}}>
          <div style={{textAlign:"center"}}>
          <Image src={poke.image} alt={poke.name}/>
          </div>
          <Number>#{poke.data.id}</Number>
          <PokemonName>{poke.name}</PokemonName>
          <div>
          {poke.data.types.map(types => {
            const typeName = types.type.name
            return(
                <Type
                 key={poke.name + typeName}
                 >{typeName}
                 </Type>
            )
          })}
          </div>
        </section>
        </Pokemon>
        )
      }
      )}
    </Content>
  </Container>
  )
}
export async function getStaticProps() {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
  const data = await resp.json()
  const pokemons = await Promise.all(
    data.results.map(async (poke,index) => {
      const res = await fetch(poke.url)
      const data = await res.json()
      const image = `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`
      const firstLetterUpperCase = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
      return {
        ...poke,
        name: firstLetterUpperCase,
        image,
        data
      }
  }))
  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
}}