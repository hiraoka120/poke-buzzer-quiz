
export type fetchPokemonResponse = {
  id: number;
  name: {
    english: string,
    japanese: string,
    chinese: string,
    french: string
  };
};

export const fetchPokemon = async (): Promise<fetchPokemonResponse> => {
  // TODO: ドメインをconfに変更
  const response = await fetch(`http://localhost:3000/api`);
  const data = await response.json();

  return data;
};
