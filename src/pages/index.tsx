import { NextPage } from 'next';
import NextHead from 'next/head';
import { Button } from '../components/Button';
import { AnswerText } from '../components/AnswerText';
import { useSelector, useDispatch } from 'react-redux';
import { Game, setGame, resetCorrectAnswer } from '../stores';
import { useAnswer } from '../hooks/useAnswer';

const Index: NextPage = () => {
  const state = useSelector((state: Game) => state);
  const dispatch = useDispatch();
  const { question, handleQuestion, handleAnswer, checkAnswer, answer, respondent, handleChange, winner } = useAnswer();

  return (
    <>
      <NextHead>
        <title>index page</title>
        <meta name="description" content="index page" />
      </NextHead>
      {!winner &&
      <>
        問題:
        <p style={{color: 'white'}}>{question.name}</p>
        <img src={question.imageUrl} alt={question.name}/>
      </>
      }
      {!state.playing &&
        <Button
          onClick={() => {
            dispatch(setGame(true));
            handleQuestion();
          }}
        >
          Start!
        </Button>
      }
      {!winner &&
        <>
          <div>
            Aさん
            <Button
              onClick={() => handleAnswer('A')}
            >
              はい！
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
          {respondent &&
            <>
              <AnswerText
                answer={answer}
                handleChange={handleChange}
              />
              <Button
                onClick={() => checkAnswer(question.name, answer)}
              >
                答える
              </Button>
            </>
          }
          <Button
            onClick={() => handleQuestion()}
          >
            パスする
          </Button>
        </>
      }
      {winner &&
        <>
          <div>{winner}の勝ち！</div>
          <Button
            onClick={() => {
              dispatch(resetCorrectAnswer());
              handleQuestion();
            }}
          >
          もう一度やる
          </Button>
        </>
  }
    </>
  );
};

export default Index;
