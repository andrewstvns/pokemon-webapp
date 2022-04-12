import {
  PokemonList,
  PokemonDetail,
  MyPokemon
} from 'pages';

const AppRoutes = [
  {
    id: 0,
    path: '/',
    element: <PokemonList />
  },
  {
    id: 1,
    path: '/pokemon/detail/:name',
    element: <PokemonDetail />
  },
  {
    id: 2,
    path: '/pokemon/my-pokemon',
    element: <MyPokemon />
  }
];

export default AppRoutes