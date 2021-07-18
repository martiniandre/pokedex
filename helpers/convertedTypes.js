export
    const pokemonType = [
        { name: "normal", color: "#A8A878" },
        { name: "fire", color: "#F08030" },
        { name: "fighting", color: "#C03028" },
        { name: "water", color: "#6890F0" },
        { name: "flying", color: "#A890F0" },
        { name: "grass", color: "#78C850" },
        { name: "poison", color: "#A040A0" },
        { name: "electric", color: "#F8D030" },
        { name: "ground", color: "#E0C068" },
        { name: "psychic", color: "#F85888" },
        { name: "rock", color: "#B8A038" },
        { name: "ice", color: "#98D8D8" },
        { name: "bug", color: "#A8B820" },
        { name: "dragon", color: "#7038F8" },
        { name: "ghost", color: "#705898" },
        { name: "dark", color: "#705848" },
        { name: "steel", color: "#B8B8D0" },
        { name: "fairy", color: "#EE99AC" },
    ];

const convertHexToRGBA = (hexCode, opacity = 1) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
};

export const getBackground = (pokemon, opacity = 1, index) => {
    const { type } = pokemon.data.types[index ? index : 0];
    let getType;
    pokemonType.map(pokeType => {
        if (!pokeType.name.includes(type.name)) return;
        return getType = convertHexToRGBA(pokeType.color, opacity);
    });
    return getType;
};
export const gradientBackground = (pokemon) => {
    const types = pokemon.data.types;
    let getType = [];
    pokemonType.map((pokeType, index) => {
        types.map(t => {
            if (!pokeType.name.includes(t.type.name)) return;
            getType.push(convertHexToRGBA(pokeType.color, 0.8));
        });
    });

    return getType;
};
