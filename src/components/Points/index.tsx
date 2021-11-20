import Image from 'next/image';
import { PointsWrapperStyle, PointStyle } from './styles.css'

export type Props = {
  standings: string[]
};

export const Points = ( props: Props ): JSX.Element => {
  const { standings } = props;
  return (
    <div className={PointsWrapperStyle}>
      <div>
        {(() => {
          const point = [];
          for (let i = 1; i < 3 + 1; i++) {
            point.push(
              <Image
                src="/images/point.gif"
                alt="point"
                width={30}
                height={30}
                className={standings.filter(n => n === 'A').length >= i ? PointStyle.active : PointStyle.inactive}
                key={`point-${i}`}
              />
            );
          }
          return point;
        })()}
      </div>
      <div>
      {(() => {
          const point = [];
          for (let i = 1; i < 3 + 1; i++) {
            point.push(
              <Image
                src="/images/point.gif"
                alt="point"
                width={30}
                height={30}
                className={standings.filter(n => n === 'B').length >= i ? PointStyle.active : PointStyle.inactive}
                key={`point-${i}`}
              />
            );
          }
          return point;
        })()}
      </div>
    </div>
  );
};
