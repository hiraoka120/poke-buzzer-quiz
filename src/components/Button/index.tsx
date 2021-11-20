import { MouseEvent, ReactNode } from 'react';
import { ButtonWrapperStyle, ButtonStyle } from './styles.css'

export type Props = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ( props: Props ): JSX.Element => {
  const { children, onClick } = props;
  return (
    <div className={ButtonWrapperStyle}>
      <button onClick={onClick} className={ButtonStyle}>{children}</button>
    </div>
  );
};
