import { MouseEvent, ReactNode } from 'react';
import { Style } from './styles.css'

export type Props = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ( props: Props ): JSX.Element => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className={Style}>{children}</button>
  );
  
};
