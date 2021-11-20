import { questionProps } from '../../hooks/useQuestion';
import Image from 'next/image';
import { ImageWrapperStyle, NoImageStyle } from './styles.css';

export type Props = {
  isShow: boolean;
  question: questionProps;
};

export const PokemonImage = ( props: Props ): JSX.Element => {
  const { isShow, question } = props;
  return (
    <div className={ImageWrapperStyle}>
      {isShow && question.imageUrl && question.name
        ? <Image src={question.imageUrl} alt={question.name} width={400} height={400} />
        : <div className={NoImageStyle}>？</div>
      }
    </div>
  );
  
};
