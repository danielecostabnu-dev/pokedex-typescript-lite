import type { PokemonApiResponse, PokemonResumo } from '../models/Pokemon.js';

export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  try {
    const resposta = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' + nomeOuId
    );

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    const tipos = dados.types.map((item) => item.type.name);

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    return pokemon;
  } catch (erro) {
    console.log('[ERRO] Não foi possível buscar o Pokémon.');
    return null;
  }
}
    
