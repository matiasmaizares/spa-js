import Home from "./home.controller";
import Posts from "./posts.controller";
import notFound from "./404.controller";
import RickAndMorty from "./rickAndMorty.controller";
import Pokemon from "./pokemon.controller";

const pages = {
  home: Home,
  posts: Posts,
  rickAndMorty: RickAndMorty,
  pokemon: Pokemon,
  notFound: notFound,
};

export { pages };
