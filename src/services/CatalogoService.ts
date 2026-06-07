import type { PokemonResumo } from '../models/Pokemon.js';

export class CatalogoService {
    private pokemons: PokemonResumo[] = [];

    public adicionarPokemon(pokemon: PokemonResumo): void {
        this.pokemons.push(pokemon);
    }

    public listarPokemons(): PokemonResumo[] {
        return this.pokemons;
    }

    public buscarPorId(id: number): PokemonResumo | undefined {
        return this.pokemons.find((pokemon) => pokemon.id === id);
    }
}     

