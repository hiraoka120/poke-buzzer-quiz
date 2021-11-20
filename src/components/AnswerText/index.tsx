import { ChangeEvent, useRef, useEffect } from 'react';
import { Style } from './styles.css'

export type Props = {
  answer: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AnswerText = ( {
  answer,
  handleChange
}: Props ): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, [answer]);

  return (
    <input
      className={Style}
      onChange={handleChange}
      value={answer}
      ref={inputRef}
      type="text"
    />
  );
  
};
