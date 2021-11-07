import { Style } from './styles.css'

export type Props = {
  winner: string;
};

export const Winner = ( props: Props ): JSX.Element => {
  const { winner } = props;
  return (
    <div className={Style}>
      🎊 {winner}の勝ち!! 🎊
    </div>
  );
  
};
