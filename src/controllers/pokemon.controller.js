import view from "../views/pokemon.html";

const getPokemonData = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("No se encontró el Pokémon");
    }
    const data = await response.json();
    console.log(data);
    return {
      name: data.name,
      image: data.sprites.front_default,
      type: data.types.map((type) => type.type.name),
      abilities: data.abilities.map((ability) => ability.ability.name),
      height: data.height,
      weight: data.weight,
    };
  } catch (error) {
    console.error("Error al obtener los datos del Pokémon:", error);
    return null;
  }
};

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const searchForm = divElement.querySelector("#search-form");
  const pokemonNameInput = divElement.querySelector("#pokemon-name");
  const pokemonDetailsContainer = divElement.querySelector("#pokemon-details");

  const displayPokemonDetails = (pokemon) => {
    if (!pokemon) {
      pokemonDetailsContainer.innerHTML =
        '<p class="text-danger">No se encontró el Pokémon.</p>';
      return;
    }
    console.log(pokemon);
    const { name, image, type, abilities, height, weight } = pokemon;
    pokemonDetailsContainer.innerHTML = `
            <div class="card">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <p class="card-text"><strong>Nombre:</strong>  ${name}</p>
                    <p class="card-text"><strong>Tipo:</strong> ${type.join(
                      ", "
                    )}</p>
                    <p class="card-text"><strong>Habilidades:</strong> ${abilities.join(
                      ", "
                    )}</p>
                    <p class="card-text"><strong>Altura:</strong> ${height}</p>
                    <p class="card-text"><strong>Peso:</strong> ${weight}</p>

                </div>
            </div>
        `;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const pokemonName = pokemonNameInput.value.trim();
    if (!pokemonName) {
      alert("Por favor ingrese un nombre de Pokémon.");
      return;
    }
    const pokemonData = await getPokemonData(pokemonName);
    displayPokemonDetails(pokemonData);
    pokemonNameInput.value = "";
  };

  searchForm.addEventListener("submit", handleFormSubmit);

  return divElement;
};
