import { useState, useCallback } from 'react';
import { fetchPokemon } from '../api/fetchPokemon'

export type questionProps = {
  name: string,
  imageUrl: string,
};

type Return = {
  question: questionProps;
  handleQuestion: () => void;
};

export const useQuestion = (): Return => {
  const [question, setQuestion] = useState({name: '', imageUrl: ''});

  const handleQuestion = useCallback(async() => {
    const result = await fetchPokemon();
    setQuestion({name: result.name.japanese, imageUrl: setImageUrl(result.id)});
  }, [question]);

  const setImageUrl = (imageID: number):string => {
    // TODO: API側でもたせる
    // return `${process.env.NEXT_PUBLIC_APP_HOST}/images/${imageID.toString().padStart(3, '0')}.png`;
    return `/images/pokemon/${imageID.toString().padStart(3, '0')}.png`;
  };

  return {
    question,
    handleQuestion,
  }
};