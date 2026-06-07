import { buscarPokemon } from './services/PokeApiService.js';

// Teste inicial da aplicação
console.log("Aplicação iniciada com sucesso!");

async function main() {
  const pokemon = await buscarPokemon('pikachu');

  console.log(pokemon);
}

main();
