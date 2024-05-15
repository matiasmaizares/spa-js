import { pages } from "../controllers/index";

let content = document.getElementById("root");
const router = async (route) => {
  content.innerHTML = "";
  console.log(route);
  switch (route) {

    case "#/":
    case "":

      
      return content.appendChild(await pages.rickAndMorty());
    case "#/posts":
      return content.appendChild(await pages.posts());
    case "#/rick-morty":
      return content.appendChild(await pages.rickAndMorty());
    case "#/pokemon":
      return content.appendChild(await pages.pokemon());
    default:
      return content.appendChild(pages.notFound());
  }
};

export { router };
