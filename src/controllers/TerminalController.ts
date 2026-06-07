import { buscarPokemon } from '../services/PokeApiService.js';
import { CatalogoService } from '../services/CatalogoService.js';

export class TerminalController {
    private catalogo = new CatalogoService();

    public async executar(): Promise<void> {
        console.log('Pokédex TypeScript Lite iniciada!');

        const pokemon = await buscarPokemon('pikachu');

        if (pokemon !== null) {
            this.catalogo.adicionarPokemon(pokemon);
            console.log('Pokémon adicionado ao catálogo:');
            console.log(pokemon);
        }

        console.log('Catálogo atual:');
        console.log(this.catalogo.listarPokemons());
    }
}