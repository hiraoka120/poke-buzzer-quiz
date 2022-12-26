import { NextPage } from 'next';
import { useEffect, useCallback } from 'react'
import NextHead from 'next/head';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { AnswerText } from '../components/AnswerText';
import { PokemonImage } from '../components/PokemonImage';
import { Winner } from '../components/Winner';
import { Points } from '../components/Points';
import { useGame } from '../hooks/useGame';
import { useQuestion } from '../hooks/useQuestion'

const Index: NextPage = () => {
  const {
    handleAnswer,
    checkAnswer,
    answer,
    respondent,
    standings,
    handleChange,
    winner,
    playing,
    handlePlaying,
    handleCorrectAnswer,
    resetGame,
  } = useGame();
  const { question, handleQuestion } = useQuestion();

  const keyBind = useCallback(
    (e: globalThis.KeyboardEvent): void => {
      if (e.key === '1') {
        e.preventDefault();
        handleAnswer('A');
      }
      if (e.key === '0') {
        e.preventDefault();
        handleAnswer('B');
      }
    }, [respondent]
  );

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
        {playing　&& !winner &&
          <>
            <Points standings={standings} />
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
              onClick={() => {
                handleQuestion();
                // TODO: パス用メソッド作る
                checkAnswer(); 
              }
            }
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
