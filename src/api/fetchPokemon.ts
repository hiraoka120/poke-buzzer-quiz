
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api`);
  const data = await response.json();

  return data;
};
