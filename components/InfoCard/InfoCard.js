import { Container, InfoData, MoveList, Moves, OthersInfos } from "./styles";

export const InfoCard = ({ pokemon }) => {
  return (
    <Container>
      <strong>Moves: </strong>
      <MoveList>
        {pokemon.abilities.map((abilities) => {
          return (
            <Moves key={abilities.ability.name}>{abilities.ability.name}</Moves>
          );
        })}
      </MoveList>
      {pokemon.stats.map((stats) => (
        <OthersInfos key={stats.stat.name}>
          <InfoData>{stats.stat.name}</InfoData>
          <InfoData>{stats.base_stat}</InfoData>
        </OthersInfos>
      ))}
    </Container>
  );
};
