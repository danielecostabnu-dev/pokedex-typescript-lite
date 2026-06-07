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

        this.catalogo.removerPokemon(25);

        console.log('Catálogo após remoção:');
        console.log(this.catalogo.listarPokemons());
    }
}