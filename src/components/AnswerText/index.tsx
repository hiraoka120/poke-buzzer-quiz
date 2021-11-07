import { ChangeEvent } from 'react';
import { Style } from './styles.css'

export type Props = {
  answer: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AnswerText = ( {
  answer,
  handleChange
}: Props ): JSX.Element => {
  return (
    <input
      className={Style}
      onChange={handleChange}
      value={answer}
      type="text"
    />
  );
  
};
