import { useEffect, useState, ChangeEvent, useCallback, SetStateAction, Dispatch } from 'react';

type Return = {
  playing: boolean,
  standings: string[];
  answering: boolean;
  respondent: string;
  answer: string;
  winner: string,
  handlePlaying: (playing: boolean) => void;
  handleAnswer: (respondent: string) => void;
  handleCorrectAnswer: (respondent: string) => void;
  checkAnswer: () => void;
  resetGame: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useGame = (): Return => {
  const [playing, setPlaying] = useState(false);
  const [standings, setStandings] = useState<string[]>([]);
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

  const handleCorrectAnswer = (respondent: string) => {
    setStandings([...standings, respondent]);
  };

  const handlePlaying = (playing: boolean) => {
    setPlaying(playing);
  }

  const checkAnswer = () => {
    handleWinner(respondent);
    setAnswer('');
    setRespondent('');
  };

  const handleWinner = (respondent: string): void => {
    if (standings.filter(answer => answer === respondent).length >= 2) {
      setWinner(respondent);
    }
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.currentTarget.value);
    },
    [setAnswer]
  );

  const resetGame = () => {
    setStandings([]);
    setAnswer('');
    setRespondent('');
    setWinner('');
  };

  return {
    playing,
    standings,
    answering,
    respondent,
    answer,
    winner,
    handlePlaying,
    handleAnswer,
    handleCorrectAnswer,
    checkAnswer,
    resetGame,
    handleChange
  }
};