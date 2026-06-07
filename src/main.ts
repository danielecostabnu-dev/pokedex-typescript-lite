import { buscarPokemon } from './services/PokeApiService.js';
import { CatalogoService } from './services/CatalogoService.js';

async function main() {
    console.log('Aplicação iniciada com sucesso!');

    const catalogo = new CatalogoService();

    const pokemon = await buscarPokemon('pikachu');

    if (pokemon !== null) {
        catalogo.adicionarPokemon(pokemon);
    }

    console.log(catalogo.listarPokemons());

    console.log(catalogo.buscarPorId(25));
}

main();