import { NextPage } from 'next';
import { useEffect } from 'react'
import NextHead from 'next/head';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { AnswerText } from '../components/AnswerText';
import { PokemonImage } from '../components/PokemonImage';
import { Winner } from '../components/Winner';
import { useGame } from '../hooks/useGame';
import { useQuestion } from '../hooks/useQuestion'

const Index: NextPage = () => {
  const {
    handleAnswer,
    checkAnswer,
    answer,
    respondent,
    handleChange,
    winner,
    playing,
    handlePlaying,
    handleCorrectAnswer,
    resetGame,
  } = useGame();
  const { question, handleQuestion } = useQuestion();

  const keyBind = (e: globalThis.KeyboardEvent): void => {
    if (e.key === '1') {
      handleAnswer('A');
    }
    if (e.key === '0') {
      handleAnswer('B');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e)=>{keyBind(e)});
    return () => {
      document.removeEventListener('keydown', (e)=>{keyBind(e)});
    }
  }, []);

  return (
    <>
      <NextHead>
        <title>index page</title>
        <meta name="description" content="index page" />
      </NextHead>
      <Layout>
        <PokemonImage isShow={!winner} question={question} />
        {!playing &&
          <Button
            onClick={() => {
              handlePlaying(true);
              handleQuestion();
            }}
          >
            Start!
          </Button>
        }
        {!winner &&
          <>
            {respondent &&
              <>
                <AnswerText
                  answer={answer}
                  handleChange={handleChange}
                />
                <Button
                  onClick={() => {
                    if (question.name === answer) {
                      handleCorrectAnswer(respondent);
                    }
                    checkAnswer();
                    handleQuestion();
                  }}
                >
                  こたえる
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
            <Winner winner={winner} />
            <Button
              onClick={() => {
                resetGame();
                handleQuestion();
              }}
            >
            もう一度やる
            </Button>
          </>
        }
      </Layout>
    </>
  );
};

export default Index;
