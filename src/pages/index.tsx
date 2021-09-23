import { NextPage } from 'next';
import NextHead from 'next/head';
import { Button } from '../components/Button';
import { AnswerText } from '../components/AnswerText';
import { useSelector, useDispatch } from 'react-redux';
import { Game, setGame, setCorrectAnswer } from '../stores';
import { useAnswer } from '../hooks/useAnswer';
import { useQuestion } from '../hooks/useQuestion';

const Index: NextPage = () => {
  const state = useSelector((state: Game) => state);
  const dispatch = useDispatch();
  const { handleAnswer, checkAnswer, answer, handleChange } = useAnswer();
  const { question, handleQuestion } = useQuestion();

  const startGame = () => {
    dispatch(setGame(true));
    handleQuestion();
  };

  return (
    <>
      <NextHead>
        <title>index page</title>
        <meta name="description" content="index page" />
      </NextHead>
      問題:
      <p>{question.name}</p>
      <img src={question.imageUrl} alt={question.name}/>
      <Button
        onClick={() => startGame()}
      >
        Start!
      </Button>
      <div>
        Aさん
        <Button
          onClick={() => handleAnswer('A')}
        >
          はい！
        </Button>
        <AnswerText
          answer={answer}
          handleChange={handleChange}
        />
        <Button
          onClick={() => checkAnswer('フシギダネ', answer)}
        >
          答える
        </Button>
      </div>
      <div>
        Bさん
        <Button
          onClick={() => handleAnswer('B')}
        >
          はい!
        </Button>
      </div>
    </>
  );
};

export default Index;
