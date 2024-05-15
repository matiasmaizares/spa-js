import view from "../views/rickAndMorty.html";

const getCharacters = async (page = 1) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  return await response.json();
};

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const postsContainer = divElement.querySelector("#posts");

  const characters = await getCharacters();

  characters.results.forEach((character) => {
    const cardHTML = `
        <div class="card mb-3" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top mt-2" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Estado: ${character.status}</p>
            <p class="card-text">Especie: ${character.species}</p>
            <p class="card-text">Género: ${character.gender}</p>
          </div>
        </div>
      `;
    postsContainer.innerHTML += cardHTML;
  });

  return divElement;
};
