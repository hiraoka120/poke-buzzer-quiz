import { useEffect, useState, ChangeEvent, useCallback, SetStateAction, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game, setCorrectAnswer } from '../stores'
import { fetchPokemon } from '../api/fetchPokemon'

type Return = {
  answering: boolean;
  respondent: string;
  answer: string;
  question: {
    name: string,
    imageUrl: string,
  };
  winner: string,
  handleQuestion: () => void;
  handleAnswer: (respondent: string) => void;
  checkAnswer: (correctAnswer: string, answer: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useAnswer = (): Return => {
  const state = useSelector((state: Game) => state);
  const dispatch = useDispatch();
  const [answering, setAnswering] = useState(false);
  const [respondent, setRespondent] = useState('');
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState({name: '', imageUrl: ''});
  const [winner, setWinner] = useState('');

  useEffect(() => {
    setAnswering(respondent != '');
  }, [respondent]);

  const handleQuestion = useCallback(async() => {
    const result = await fetchPokemon();
    setQuestion({name: result.name.japanese, imageUrl: setImageUrl(result.id)});
  }, [question]);

  const setImageUrl = (imageID: number):string => {
    // TODO: ドメインをconfに変更
    return `http://localhost:3000/images/${imageID.toString().padStart(3, '0')}.png`;
  };

  const handleAnswer = (respondent: string) => {
    setRespondent(respondent);
  };

  const checkAnswer = (correctAnswer: string, answer: string) => {
    if (correctAnswer === answer) {
      dispatch(setCorrectAnswer(respondent));
      handleQuestion();
    }
    handleWinner(respondent);
    setAnswer('');
    setRespondent('');
  };

  const handleWinner = (respondent: string): void => {
    if (state.correctAnswers.filter(answer => answer === respondent).length > 0) {
      setWinner(respondent);
    }
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.currentTarget.value);
    },
    [setAnswer]
  );

  return {
    answering,
    respondent,
    answer,
    question,
    winner,
    handleQuestion,
    handleAnswer,
    checkAnswer,
    handleChange
  }
};