import classNames from 'classnames';
import Image from 'next/image';

import styles from './Rating.module.scss';

interface IRatingProps {
  rating: number;
  maxRating?: number;
  src?: string;
  className?: string;
}

export const Rating = ({ rating, maxRating = 5, src = '/images/rating-head.jpeg' }: IRatingProps) => {
  return (
    <div className={styles.root}>
      {[...Array(maxRating).keys()].map((_, i) => {
        const rateValue = i + 1;

        const isFull = rateValue <= rating;
        const isHalf = rateValue - rating > 0 && rateValue - rating < 1;

        return (
          <div key={rateValue} className={styles.rateWrapper}>
            <div className={styles.circle} />
            {(isFull || isHalf) && (
              <Image
                src={src}
                alt="rate"
                fill
                className={classNames(styles.image, {
                  [styles.halfImage]: isHalf,
                })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
