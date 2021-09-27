import { useEffect, useState, ChangeEvent, useCallback, SetStateAction, Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { Game } from '../stores'

type Return = {
  answering: boolean;
  respondent: string;
  answer: string;
  winner: string,
  handleAnswer: (respondent: string) => void;
  checkAnswer: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useAnswer = (): Return => {
  const state = useSelector((state: Game) => state);
  const [answering, setAnswering] = useState(false);
  const [respondent, setRespondent] = useState('');
  const [answer, setAnswer] = useState('');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    setAnswering(respondent != '');
  }, [respondent]);

  const handleAnswer = (respondent: string) => {
    setRespondent(respondent);
  };

  const checkAnswer = () => {
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
    winner,
    handleAnswer,
    checkAnswer,
    handleChange
  }
};