import { ReactNode } from 'react';
import { Style } from './styles.css'

export type Props = {
  children: ReactNode;
};

export const Layout = ( props: Props ): JSX.Element => {
  const { children } = props;
  return (
    <div className={Style}>
      {children}
    </div>
  );
  
};
