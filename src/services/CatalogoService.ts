import type { PokemonResumo } from '../models/Pokemon.js';

export class CatalogoService {
    private pokemons: PokemonResumo[] = [];

    public adicionarPokemon(pokemon: PokemonResumo): void {
        const existe = this.pokemons.some(
            (item) => item.id === pokemon.id
        );

        if (existe) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    public listarPokemons(): PokemonResumo[] {
        return this.pokemons;
    }

    public buscarPorId(id: number): PokemonResumo | undefined {
        return this.pokemons.find(
            (pokemon) => pokemon.id === id
        );
    }

    public removerPokemon(id: number): void {
        const existe = this.pokemons.some(
            (pokemon) => pokemon.id === id
        );

        if (!existe) {
            console.log('[AVISO] Nenhum Pokémon encontrado com esse ID.');
            return;
        }

        this.pokemons = this.pokemons.filter(
            (pokemon) => pokemon.id !== id
        );

        console.log('[OK] Pokémon removido do catálogo.');
    }
}
