import { buscarPokemon } from '../services/PokeApiService.js';
import { CatalogoService } from '../services/CatalogoService.js';

export class TerminalController {
    private catalogo = new CatalogoService();

    public async executar(): Promise<void> {
        console.log('Pokédex TypeScript Lite iniciada!');

        const pikachu = await buscarPokemon('pikachu');
        if (pikachu !== null) {
            this.catalogo.adicionarPokemon(pikachu);
        }

        const charmander = await buscarPokemon('charmander');
        if (charmander !== null) {
            this.catalogo.adicionarPokemon(charmander);
        }

        const pikachuDuplicado = await buscarPokemon('pikachu');
        if (pikachuDuplicado !== null) {
            this.catalogo.adicionarPokemon(pikachuDuplicado);
        }

        await buscarPokemon('pokemon-inexistente');

        console.log('Catálogo atual:');
        console.log(this.catalogo.listarPokemons());

        console.log('Busca por ID:');
        const pokemonEncontrado = this.catalogo.buscarPorId(4);
        console.log(pokemonEncontrado);

        this.catalogo.removerPokemon(25);

        console.log('Catálogo após remoção:');
        console.log(this.catalogo.listarPokemons());
    }
}