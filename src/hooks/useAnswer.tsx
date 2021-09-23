import { useEffect, useState, ChangeEvent, useCallback, SetStateAction, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { setCorrectAnswer } from '../stores'

type Return = {
  answering: boolean;
  respondent: string;
  answer: string;
  question: {
    name: string,
    imageUrl: string,
  };
  handleAnswer: (respondent: string) => void;
  checkAnswer: (correctAnswer: string, answer: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useAnswer = (): Return => {
  const dispatch = useDispatch();
  const [answering, setAnswering] = useState(false);
  const [respondent, setRespondent] = useState('');
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState({name: '', imageUrl: ''});

  useEffect(() => {
    setAnswering(respondent != '');
  }, [respondent]);

  const handleAnswer = (respondent: string) => {
    setRespondent(respondent);
  };

  const checkAnswer = (correctAnswer: string, answer: string) => {
    if (correctAnswer === answer) {
      dispatch(setCorrectAnswer(respondent));
    }
    setRespondent('');
  };

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
    handleAnswer,
    checkAnswer,
    handleChange
  }
};