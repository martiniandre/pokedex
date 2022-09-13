export const pokemonType = [
  { name: "normal", color: "#535657" },
  { name: "fire", color: "#E4572E" },
  { name: "fighting", color: "#C03028" },
  { name: "water", color: "#009DDC" },
  { name: "flying", color: "#5899E2" },
  { name: "grass", color: "#248232" },
  { name: "poison", color: "#A040A0" },
  { name: "electric", color: "#EC9F05" },
  { name: "ground", color: "#343A1A" },
  { name: "psychic", color: "#F85888" },
  { name: "rock", color: "#3F292B" },
  { name: "ice", color: "#274690" },
  { name: "bug", color: "#6C7D47" },
  { name: "dragon", color: "#26408B" },
  { name: "ghost", color: "#705898" },
  { name: "dark", color: "#705848" },
  { name: "steel", color: "#7E7F83" },
  { name: "fairy", color: "#FF006E" },
];

const convertHexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};

export const getBackground = (pokemon, opacity, index) => {
  const { type } = pokemon.types[index ? index : 0];
  let getType;
  pokemonType.map((pokeType) => {
    if (!pokeType.name.includes(type.name)) return;
    getType = convertHexToRGBA(pokeType.color, opacity);
  });
  return getType;
};

export const gradientBackground = (pokemon) => {
  const types = pokemon.types;
  let getType = [];
  pokemonType?.map((pokeType, index) => {
    types.map(({ type }) => {
      if (!pokeType.name.includes(type.name)) return;
      getType.push(convertHexToRGBA(pokeType.color, 0.8));
    });
  });

  return getType;
};
