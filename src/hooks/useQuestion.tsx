import { useState, useCallback } from 'react';
import { fetchPokemon } from '../api/fetchPokemon'

type Return = {
  question: {
    name: string,
    imageUrl: string,
  };
  handleQuestion: () => void;
};

export const useQuestion = (): Return => {
  const [question, setQuestion] = useState({name: '', imageUrl: ''});

  const handleQuestion = useCallback(async() => {
    const result = await fetchPokemon();
    setQuestion({name: result.name.japanese, imageUrl: setImageUrl(result.id)});
  }, [question]);

  const setImageUrl = (imageID: number):string => {
    // TODO: ドメインをconfに変更
    return `http://localhost:3000/images/${imageID.toString().padStart(3, '0')}.png`;
  };

  return {
    question,
    handleQuestion,
  }
};